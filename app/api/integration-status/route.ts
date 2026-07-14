import { NextResponse } from "next/server";

const mailerLiteApi = "https://connect.mailerlite.com/api";

export async function GET() {
  const token = process.env.MAILERLITE_API_TOKEN?.trim();

  if (!token) {
    return NextResponse.json(
      { connected: false, provider: "mailerlite", reason: "token_missing" },
      { status: 503 }
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(`${mailerLiteApi}/groups?limit=1`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          connected: false,
          provider: "mailerlite",
          reason: response.status === 401 ? "unauthorized" : "provider_rejected",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ connected: true, provider: "mailerlite" });
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";

    return NextResponse.json(
      {
        connected: false,
        provider: "mailerlite",
        reason: timedOut ? "timeout" : "provider_unreachable",
      },
      { status: 503 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
