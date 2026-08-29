"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { LeadForm } from "@/components/lead-form";
import { trackEvent } from "@/lib/analytics";

const deliverables = [
  "Seven focused daily launch tasks",
  "Product, trust, checkout, and traffic checks",
  "A printable page you can save as PDF",
  "Day 2 email: the moment most people should open Shopify",
] as const;

export function LeadCapture() {
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
            Get the checklist now — join the list for future launch tips
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            The full checklist is free to open instantly. If you want future checklist updates and practical Shopify launch tips, you can optionally join the email list below. No income promises and no need to subscribe to use the checklist.
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

          <LeadForm source="lead_capture" />

          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            Your email is stored for future checklist updates and practical launch tips. See the Privacy Policy for details.
          </p>
        </div>
      </div>
    </section>
  );
}
