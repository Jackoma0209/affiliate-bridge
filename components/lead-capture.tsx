"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";

const deliverables = [
  "Seven focused daily launch tasks",
  "Product, trust, checkout, and traffic checks",
  "A printable page you can save as PDF",
] as const;

export function LeadCapture() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const attribution = readAttribution();
    const tracking = {
      cta_location: "lead_capture",
      traffic_source: attribution?.source || "website",
      page_path: window.location.pathname,
    };

    trackEvent("checklist_request_submit", tracking);
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          consent,
          website: formData.get("website") || "",
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message || "We couldn't save your signup. Please try again.");
      }

      setStatus("success");
      setMessage(payload.message || "You're on the list.");
      trackEvent("checklist_request_success", tracking);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We couldn't save your signup. Please try again.");
      trackEvent("checklist_request_error", tracking);
    }
  }

  return (
    <section
      id="lead-capture"
      className="scroll-mt-24 border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Free launch checklist
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
            Get the checklist now — and the launch tips by email
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            The full checklist is free to open instantly. If you want the follow-up launch tips too,
            add your email below. No income promises and no need to subscribe to use the checklist.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 shadow-[0_22px_70px_var(--card-glow)]">
          <ul className="grid gap-3">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-card-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link
              href="/checklist"
              onClick={() =>
                trackEvent("hero_checklist_click", {
                  cta_location: "lead_capture",
                  destination: "/checklist",
                })
              }
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
            >
              Open the Free Checklist Now
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            Optional email updates
            <span className="h-px flex-1 bg-border" />
          </div>

          {status === "success" ? (
            <div className="rounded-lg border border-primary/30 bg-primary/10 p-4" role="status">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-card-foreground">Signup saved</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{message}</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-card-foreground">
                  First name <span className="font-normal text-muted-foreground">(optional)</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    maxLength={100}
                    className="min-h-12 rounded-lg border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-card-foreground">
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="min-h-12 rounded-lg border border-input bg-background px-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/15"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[10000px] h-px w-px opacity-0"
                aria-hidden="true"
              />

              <label className="flex items-start gap-3 text-xs leading-5 text-muted-foreground">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  required
                  className="mt-1 size-4 accent-emerald-600"
                />
                <span>
                  Email me the checklist updates and practical Shopify launch tips. I can unsubscribe at any time.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 dark:bg-primary dark:text-primary-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {status === "loading" ? "Saving..." : "Send Me the Launch Tips"}
              </button>

              {status === "error" ? (
                <p className="text-sm leading-6 text-destructive" role="alert">
                  {message}
                </p>
              ) : null}
            </form>
          )}

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Your email is used for the checklist update series and practical launch tips. See the Privacy Policy for details.
          </p>
        </div>
      </div>
    </section>
  );
}
