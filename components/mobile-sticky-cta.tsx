"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Link
          href="/checklist"
          onClick={() =>
            trackEvent("sticky_checklist_click", {
              cta_location: "mobile_sticky",
              destination: "/checklist",
            })
          }
          className="inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none sm:text-sm"
        >
          Free Checklist
          <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
        </Link>
        <AffiliateCta
          eventName="sticky_trial_click"
          trackingPlacement="mobile_sticky"
          className="min-h-11 w-full px-3 text-xs sm:text-sm"
          variant="dark"
          showIcon
        >
          Start Trial
        </AffiliateCta>
      </div>
      <p className="mt-1.5 text-center text-[11px] font-medium text-muted-foreground">
        Checklist opens free · trial is an affiliate link
      </p>
    </div>
  );
}
