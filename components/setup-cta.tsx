"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";
import { cn } from "@/lib/utils";

export function SetupCta({
  children = config.setupCta,
  className,
  trackingPlacement,
}: {
  children?: ReactNode;
  className?: string;
  trackingPlacement: string;
}) {
  return (
    <a
      href={config.setupPaymentUrl}
      target="_blank"
      rel="noopener"
      onClick={() => {
        trackEvent("setup_cta_click", {
          cta_location: trackingPlacement,
          traffic_source: readAttribution()?.source || "website",
          page_path: window.location.pathname,
          destination: "stripe",
          value: Number(config.setupPrice.replace(/[^0-9.]/g, "")),
          currency: "USD",
        });
      }}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground no-underline shadow-[0_16px_38px_var(--card-glow)] transition-colors outline-none hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}
