import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mailerLiteApi = "https://connect.mailerlite.com/api";
const checklistGroupName = "7-Day Shopify Checklist";

let cachedGroupId: string | null = null;

type SubscribePayload = {
  email?: string;
  firstName?: string;
  source?: string;
  resultTag?: string;
  company?: string;
};

type MailerLiteGroup = {
  id: string;
  name: string;
};

type MailerLiteResponse<T> = {
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
};

function formatMailerLiteDate(date: Date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;
}

function getProviderMessage(body: MailerLiteResponse<unknown> | null) {
  if (body?.message) {
    return body.message;
  }

  const firstError = body?.errors ? Object.values(body.errors).flat()[0] : undefined;
  return firstError || "MailerLite did not accept the request.";
}

async function mailerLiteRequest<T>(
  path: string,
  token: string,
  signal: AbortSignal,
  init: RequestInit = {}
) {
  const response = await fetch(`${mailerLiteApi}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
    signal,
  });

  const body = (await response.json().catch(() => null)) as MailerLiteResponse<T> | null;
  return { response, body };
}

async function getOrCreateChecklistGroup(token: string, signal: AbortSignal) {
  const configuredGroupId = process.env.MAILERLITE_GROUP_ID?.trim();
  if (configuredGroupId) {
    return configuredGroupId;
  }

  if (cachedGroupId) {
    return cachedGroupId;
  }

  const search = await mailerLiteRequest<MailerLiteGroup[]>(
    `/groups?filter[name]=${encodeURIComponent(checklistGroupName)}&limit=100`,
    token,
    signal
  );

  if (!search.response.ok) {
    throw new Error(getProviderMessage(search.body));
  }

  const existingGroup = search.body?.data?.find(
    (group) => group.name.toLowerCase() === checklistGroupName.toLowerCase()
  );

  if (existingGroup) {
    cachedGroupId = existingGroup.id;
    return existingGroup.id;
  }

  const created = await mailerLiteRequest<MailerLiteGroup>("/groups", token, signal, {
    method: "POST",
    body: JSON.stringify({ name: checklistGroupName }),
  });

  if (!created.response.ok || !created.body?.data?.id) {
    throw new Error(getProviderMessage(created.body));
  }

  cachedGroupId = created.body.data.id;
  return created.body.data.id;
}

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

  if (payload.company) {
    return NextResponse.json({ success: true });
  }

  const token = process.env.MAILERLITE_API_TOKEN?.trim();
  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message: "MailerLite is not connected yet. Please try again shortly.",
      },
      { status: 503 }
    );
  }

  const email = payload.email?.trim().toLowerCase() ?? "";
  const firstName = payload.firstName?.trim() ?? "";

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12_000);

  try {
    const groupId = await getOrCreateChecklistGroup(token, controller.signal);
    const ipAddress = getClientIp(request);
    const optedInAt = formatMailerLiteDate(new Date());

    const fields: Record<string, string> = {};
    if (firstName) {
      fields.name = firstName;
    }

    const subscriber = await mailerLiteRequest<unknown>(
      "/subscribers",
      token,
      controller.signal,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          fields,
          groups: [groupId],
          status: "active",
          ...(ipAddress
            ? {
                ip_address: ipAddress,
                opted_in_at: optedInAt,
                optin_ip: ipAddress,
              }
            : {}),
        }),
      }
    );

    if (!subscriber.response.ok) {
      return NextResponse.json(
        { success: false, message: getProviderMessage(subscriber.body) },
        { status: subscriber.response.status === 422 ? 400 : 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You have been added to the checklist list.",
    });
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "AbortError";

    return NextResponse.json(
      {
        success: false,
        message: timedOut
          ? "MailerLite took too long to respond."
          : error instanceof Error
            ? error.message
            : "MailerLite could not be reached.",
      },
      { status: 503 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
