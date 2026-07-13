"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";

const deliverables = [
  "Seven focused daily launch tasks",
  "Product, trust, checkout, and traffic checks",
  "A printable page you can save as PDF",
] as const;

export function LeadCapture() {
  const subject = encodeURIComponent("7-day Shopify checklist request");
  const body = encodeURIComponent(
    "Hi, I have opened the free checklist and would also like future checklist updates.\n\nStore/product idea:"
  );

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
            Get the complete 7-day Shopify launch checklist
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Open it instantly, work through one practical task each day, and print
            or save the page as a PDF. No email gate and no income promises.
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

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/checklist"
              onClick={() =>
                trackEvent("hero_checklist_click", {
                  cta_location: "lead_capture",
                  destination: "/checklist",
                })
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
            >
              Open the Free Checklist
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${config.contactEmail}?subject=${subject}&body=${body}`}
              onClick={() =>
                trackEvent("checklist_request_email_open", {
                  cta_location: "lead_capture",
                })
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
            >
              <Mail className="size-4" aria-hidden="true" />
              Request Updates
            </a>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            The checklist opens immediately. The optional email button uses your own
            email app because a mailing-list provider is not yet connected.
          </p>
        </div>
      </div>
    </section>
  );
}
