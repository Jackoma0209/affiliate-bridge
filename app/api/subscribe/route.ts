import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://connect.mailerlite.com/api";
const GROUP_NAME = "7-Day Shopify Checklist";

function mailerLiteHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

function mailerLiteDate(date = new Date()) {
  return date.toISOString().slice(0, 19).replace("T", " ");
}

async function listMatchingGroups(token: string) {
  const groupsResponse = await fetch(
    `${API_BASE}/groups?filter[name]=${encodeURIComponent(GROUP_NAME)}&limit=100`,
    {
      headers: mailerLiteHeaders(token),
      cache: "no-store",
    }
  );

  if (!groupsResponse.ok) {
    throw new Error(`MailerLite group lookup failed (${groupsResponse.status})`);
  }

  const groupsPayload = (await groupsResponse.json()) as {
    data?: Array<{ id: string; name: string }>;
  };

  return groupsPayload.data || [];
}

async function getOrCreateGroup(token: string) {
  const groups = await listMatchingGroups(token);
  const existing = groups.find(
    (group) => group.name.toLowerCase() === GROUP_NAME.toLowerCase()
  );

  if (existing) return existing.id;

  const createResponse = await fetch(`${API_BASE}/groups`, {
    method: "POST",
    headers: mailerLiteHeaders(token),
    body: JSON.stringify({ name: GROUP_NAME }),
    cache: "no-store",
  });

  if (!createResponse.ok) {
    throw new Error(`MailerLite group creation failed (${createResponse.status})`);
  }

  const createPayload = (await createResponse.json()) as {
    data?: { id?: string };
  };

  if (!createPayload.data?.id) {
    throw new Error("MailerLite did not return a group ID");
  }

  return createPayload.data.id;
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
      },
      { status: 503 }
    );
  }

  try {
    const groups = await listMatchingGroups(token);
    const checklistGroupReady = groups.some(
      (group) => group.name.toLowerCase() === GROUP_NAME.toLowerCase()
    );

    return NextResponse.json({
      ok: true,
      configured: true,
      providerReachable: true,
      checklistGroupReady,
    });
  } catch (error) {
    console.error("MailerLite health check failed", error);
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        providerReachable: false,
        checklistGroupReady: false,
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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const payload = body as {
    email?: string;
    firstName?: string;
    consent?: boolean;
    website?: string;
  };

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const email = payload.email?.trim().toLowerCase() || "";
  const firstName = payload.firstName?.trim().slice(0, 100) || "";
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailLooksValid || !payload.consent) {
    return NextResponse.json(
      {
        ok: false,
        message: !payload.consent
          ? "Please confirm that you want to receive the checklist and launch tips."
          : "Please enter a valid email address.",
      },
      { status: 422 }
    );
  }

  try {
    const groupId = await getOrCreateGroup(token);
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const now = mailerLiteDate();

    const subscriberBody: Record<string, unknown> = {
      email,
      groups: [groupId],
      status: "active",
      subscribed_at: now,
      opted_in_at: now,
    };

    if (firstName) {
      subscriberBody.fields = { name: firstName };
    }

    if (forwardedFor) {
      subscriberBody.ip_address = forwardedFor;
      subscriberBody.optin_ip = forwardedFor;
    }

    const subscribeResponse = await fetch(`${API_BASE}/subscribers`, {
      method: "POST",
      headers: mailerLiteHeaders(token),
      body: JSON.stringify(subscriberBody),
      cache: "no-store",
    });

    if (!subscribeResponse.ok) {
      const errorText = await subscribeResponse.text();
      console.error("MailerLite subscribe failed", subscribeResponse.status, errorText);
      return NextResponse.json(
        { ok: false, message: "We couldn't save your signup. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "You're on the list. The checklist is available now, and future launch tips will go to your inbox.",
      checklistUrl: "/checklist",
    });
  } catch (error) {
    console.error("Checklist signup error", error);
    return NextResponse.json(
      { ok: false, message: "Email signup is temporarily unavailable. The checklist is still free to open now." },
      { status: 502 }
    );
  }
}
