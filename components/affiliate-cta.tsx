"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { config } from "@/config";
import { trackEvent, type TrackingEventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type AffiliateCtaProps = {
  children: ReactNode;
  className?: string;
  eventName?: TrackingEventName;
  large?: boolean;
  variant?: "primary" | "light" | "dark";
  showIcon?: boolean;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] hover:brightness-95 focus-visible:ring-primary/30",
  light:
    "bg-card text-card-foreground shadow-sm shadow-black/10 ring-1 ring-border hover:bg-muted focus-visible:ring-primary/25",
  dark:
    "bg-foreground text-background shadow-sm shadow-black/15 hover:opacity-90 focus-visible:ring-foreground/30",
};

export function AffiliateCta({
  children,
  className,
  eventName,
  large = false,
  variant = "primary",
  showIcon = true,
}: AffiliateCtaProps) {
  return (
    <a
      href={config.affiliateUrl}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      aria-label={`${children} — affiliate link to ${config.productName}`}
      data-analytics-event={eventName}
      onClick={() => {
        if (eventName) {
          trackEvent(eventName);
        }
      }}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors outline-none focus-visible:ring-4 sm:w-auto",
        large ? "min-h-14 px-6 text-base" : "min-h-11",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </a>
  );
}
