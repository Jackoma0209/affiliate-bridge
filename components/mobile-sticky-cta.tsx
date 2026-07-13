"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto max-w-sm">
        <Link
          href="/checklist"
          onClick={() =>
            trackEvent("sticky_checklist_click", {
              cta_location: "mobile_sticky",
              destination: "/checklist",
            })
          }
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
        >
          Get the Free Checklist
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-1 text-center text-xs font-medium text-muted-foreground">
          Opens instantly · no email gate
        </p>
      </div>
    </div>
  );
}
