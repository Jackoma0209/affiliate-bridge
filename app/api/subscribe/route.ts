import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://connect.mailerlite.com/api";
const GROUP_NAME = "7-Day Shopify Checklist";
const AUTOMATION_NAME = "7-Day Shopify Checklist Welcome";

type Group = { id: string; name: string };
type Automation = {
  name: string;
  enabled?: boolean;
  trigger_data?: { valid?: boolean };
  steps?: unknown[];
};

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

function mailerLiteDate(date = new Date()) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

async function listGroups(token: string) {
  const response = await fetch(
    `${API_BASE}/groups?filter[name]=${encodeURIComponent(GROUP_NAME)}&limit=100`,
    { headers: headers(token), cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`MailerLite group lookup failed (${response.status})`);
  }

  const payload = (await response.json()) as { data?: Group[] };
  return payload.data || [];
}

async function automationHealth(token: string) {
  try {
    const response = await fetch(
      `${API_BASE}/automations?filter[name]=${encodeURIComponent(AUTOMATION_NAME)}&limit=100`,
      { headers: headers(token), cache: "no-store" }
    );

    if (!response.ok) throw new Error("Automation check unavailable");

    const payload = (await response.json()) as { data?: Automation[] };
    const automation = payload.data?.find(
      (item) => item.name.toLowerCase() === AUTOMATION_NAME.toLowerCase()
    );

    return {
      automationCheckAvailable: true,
      automationFound: Boolean(automation),
      automationEnabled: Boolean(automation?.enabled),
      automationTriggerValid: Boolean(automation?.trigger_data?.valid),
      automationStepCount: automation?.steps?.length || 0,
    };
  } catch {
    return {
      automationCheckAvailable: false,
      automationFound: false,
      automationEnabled: false,
      automationTriggerValid: false,
      automationStepCount: 0,
    };
  }
}

async function getOrCreateGroup(token: string) {
  const groups = await listGroups(token);
  const existing = groups.find(
    (group) => group.name.toLowerCase() === GROUP_NAME.toLowerCase()
  );

  if (existing) return existing.id;

  const response = await fetch(`${API_BASE}/groups`, {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify({ name: GROUP_NAME }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`MailerLite group creation failed (${response.status})`);
  }

  const payload = (await response.json()) as { data?: { id?: string } };
  if (!payload.data?.id) throw new Error("MailerLite did not return a group ID");
  return payload.data.id;
}

export async function GET() {
  const token = process.env.MAILERLITE_API_TOKEN?.trim();

  if (!token) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        providerReachable: false,
        checklistGroupReady: false,
        automationCheckAvailable: false,
        automationFound: false,
        automationEnabled: false,
        automationTriggerValid: false,
        automationStepCount: 0,
      },
      { status: 503 }
    );
  }

  try {
    const groups = await listGroups(token);
    const checklistGroupReady = groups.some(
      (group) => group.name.toLowerCase() === GROUP_NAME.toLowerCase()
    );

    return NextResponse.json({
      ok: true,
      configured: true,
      providerReachable: true,
      checklistGroupReady,
      ...(await automationHealth(token)),
    });
  } catch (error) {
    console.error("MailerLite health check failed", error);
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        providerReachable: false,
        checklistGroupReady: false,
        automationCheckAvailable: false,
        automationFound: false,
        automationEnabled: false,
        automationTriggerValid: false,
        automationStepCount: 0,
      },
      { status: 502 }
    );
  }
}

export async function POST(request: NextRequest) {
  const token = process.env.MAILERLITE_API_TOKEN?.trim();
  if (!token) {
    return NextResponse.json(
      { ok: false, message: "Email updates are temporarily unavailable." },
      { status: 503 }
    );
  }

  let payload: {
    email?: string;
    firstName?: string;
    consent?: boolean;
    website?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (payload.website) return NextResponse.json({ ok: true });

  const email = payload.email?.trim().toLowerCase() || "";
  const firstName = payload.firstName?.trim().slice(0, 100) || "";
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailLooksValid || !payload.consent) {
    return NextResponse.json(
      {
        ok: false,
        message: !payload.consent
          ? "Please confirm that you want to receive future checklist updates and launch tips."
          : "Please enter a valid email address.",
      },
      { status: 422 }
    );
  }

  try {
    const groupId = await getOrCreateGroup(token);
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const now = mailerLiteDate();
    const subscriber: Record<string, unknown> = {
      email,
      groups: [groupId],
      status: "active",
      subscribed_at: now,
      opted_in_at: now,
    };

    if (firstName) subscriber.fields = { name: firstName };
    if (forwardedFor) {
      subscriber.ip_address = forwardedFor;
      subscriber.optin_ip = forwardedFor;
    }

    const response = await fetch(`${API_BASE}/subscribers`, {
      method: "POST",
      headers: headers(token),
      body: JSON.stringify(subscriber),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("MailerLite subscribe failed", response.status, await response.text());
      return NextResponse.json(
        { ok: false, message: "We couldn't save your signup. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You're on the list. The free checklist is available now.",
      checklistUrl: "/checklist",
    });
  } catch (error) {
    console.error("Checklist signup error", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Email signup is temporarily unavailable. The checklist is still free to open now.",
      },
      { status: 502 }
    );
  }
}
