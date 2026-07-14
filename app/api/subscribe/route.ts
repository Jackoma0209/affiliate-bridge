import { NextResponse } from "next/server";

import { config } from "@/config";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribePayload = {
  email?: string;
  firstName?: string;
  source?: string;
  resultTag?: string;
  company?: string;
};

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: SubscribePayload;

  try {
    payload = (await request.json()) as SubscribePayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "The request could not be read." },
      { status: 400 }
    );
  }

  const email = payload.email?.trim() ?? "";
  const firstName = payload.firstName?.trim() || "Not provided";
  const source = payload.source?.trim() || "website";
  const resultTag = payload.resultTag?.trim() || "Not provided";

  if (payload.company) {
    return NextResponse.json({ success: true });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12_000);

  try {
    const body = new URLSearchParams({
      email,
      _replyto: email,
      first_name: firstName,
      source,
      quiz_result: resultTag,
      checklist_url: `${config.siteUrl}/checklist`,
      _subject: `New 7-day checklist request — ${source}`,
      _template: "table",
      _captcha: "false",
    });

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(config.contactEmail)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Origin: config.siteUrl,
          Referer: `${config.siteUrl}/`,
        },
        body: body.toString(),
        cache: "no-store",
        signal: controller.signal,
      }
    );

    const responseText = await response.text();
    let providerResponse: FormSubmitResponse | null = null;

    try {
      providerResponse = JSON.parse(responseText) as FormSubmitResponse;
    } catch {
      providerResponse = null;
    }

    const providerRejected =
      providerResponse?.success === false ||
      providerResponse?.success === "false";

    if (!response.ok || providerRejected) {
      return NextResponse.json(
        {
          success: false,
          message:
            providerResponse?.message ||
            "The email service did not accept the request.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: providerResponse?.message || "Request accepted.",
    });
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";

    return NextResponse.json(
      {
        success: false,
        message: timedOut
          ? "The email service took too long to respond."
          : "The email service could not be reached.",
      },
      { status: 503 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
