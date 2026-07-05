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
    "bg-emerald-600 text-white shadow-sm shadow-emerald-900/10 hover:bg-emerald-700 focus-visible:ring-emerald-600/30",
  light:
    "bg-white text-slate-950 shadow-sm shadow-slate-950/10 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-white/50",
  dark:
    "bg-slate-950 text-white shadow-sm shadow-slate-950/15 hover:bg-slate-800 focus-visible:ring-slate-950/30",
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
