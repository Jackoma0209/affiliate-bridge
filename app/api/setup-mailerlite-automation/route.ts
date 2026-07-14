import { NextResponse } from "next/server";

const mailerLiteApi = "https://connect.mailerlite.com/api";
const automationName = "7-Day Shopify Checklist Welcome";

type Automation = {
  id: string;
  name: string;
  enabled: boolean;
};

type MailerLiteResponse<T> = {
  data?: T;
  message?: string;
};

async function requestMailerLite<T>(
  path: string,
  token: string,
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
  });

  const body = (await response.json().catch(() => null)) as
    | MailerLiteResponse<T>
    | null;

  return { response, body };
}

export async function GET() {
  const token = process.env.MAILERLITE_API_TOKEN?.trim();

  if (!token) {
    return NextResponse.json(
      { success: false, message: "MailerLite is not connected." },
      { status: 503 }
    );
  }

  const existing = await requestMailerLite<Automation[]>(
    `/automations?filter[name]=${encodeURIComponent(automationName)}&limit=100`,
    token
  );

  if (!existing.response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: existing.body?.message || "Could not search automations.",
      },
      { status: existing.response.status }
    );
  }

  const match = existing.body?.data?.find(
    (automation) => automation.name.toLowerCase() === automationName.toLowerCase()
  );

  if (match) {
    return NextResponse.json({
      success: true,
      created: false,
      automation: {
        id: match.id,
        name: match.name,
        enabled: match.enabled,
      },
    });
  }

  const created = await requestMailerLite<Automation>("/automations", token, {
    method: "POST",
    body: JSON.stringify({ name: automationName }),
  });

  if (!created.response.ok || !created.body?.data) {
    return NextResponse.json(
      {
        success: false,
        message: created.body?.message || "Could not create automation draft.",
      },
      { status: created.response.status || 502 }
    );
  }

  return NextResponse.json({
    success: true,
    created: true,
    automation: {
      id: created.body.data.id,
      name: created.body.data.name,
      enabled: created.body.data.enabled,
    },
  });
}
