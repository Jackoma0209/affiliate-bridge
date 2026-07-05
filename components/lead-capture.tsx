"use client";

import { Mail } from "lucide-react";

import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";

export function LeadCapture() {
  const subject = encodeURIComponent("Checklist request");
  const body = encodeURIComponent(
    "Hi, please send me the 7-day Shopify first-sale checklist.\n\nStore/product idea:"
  );

  return (
    <section
      id="lead-capture"
      className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Checklist request
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
            Want the checklist before you start?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Get the 7-day Shopify first-sale checklist so you know what to do
            after opening your trial.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 shadow-[0_22px_70px_var(--card-glow)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-card-foreground sm:col-span-1">
              Email
              <input
                type="email"
                disabled
                placeholder="you@example.com"
                className="min-h-12 rounded-lg border border-input bg-muted px-3 text-sm text-muted-foreground outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-card-foreground sm:col-span-1">
              Store idea or product idea
              <input
                type="text"
                disabled
                placeholder="Optional"
                className="min-h-12 rounded-lg border border-input bg-muted px-3 text-sm text-muted-foreground outline-none"
              />
            </label>
          </div>

          <div className="mt-5 rounded-lg border border-dashed border-border bg-background/70 p-4">
            <p className="text-sm font-semibold text-foreground">
              Email capture coming soon.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              The form is intentionally disabled until a real email provider is
              connected, so no details are silently collected.
            </p>
          </div>

          {/* TODO: Replace the mailto fallback with ConvertKit, Beehiiv, Mailchimp, Resend, Supabase, or another provider-backed signup flow. */}
          <a
            href={`mailto:${config.contactEmail}?subject=${subject}&body=${body}`}
            onClick={() => trackEvent("lead_capture_interest_click")}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none sm:w-auto"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email me the checklist request
          </a>
        </div>
      </div>
    </section>
  );
}
