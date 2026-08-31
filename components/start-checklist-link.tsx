"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function StartChecklistLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/checklist#day-1"
      onClick={() =>
        trackEvent("start_checklist_click", {
          cta_location: "start_checklist",
          destination: "/checklist",
        })
      }
      className={cn(className)}
    >
      {children}
    </Link>
  );
}
