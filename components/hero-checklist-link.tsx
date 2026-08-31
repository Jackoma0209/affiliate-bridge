"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function HeroChecklistLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/checklist"
      onClick={() =>
        trackEvent("hero_checklist_click", {
          cta_location: "hero_checklist",
          destination: "/checklist",
        })
      }
      className={cn(className)}
    >
      {children}
    </Link>
  );
}
