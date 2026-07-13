"use client";

import { Printer } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export function PrintChecklistButton() {
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("checklist_print_click", { cta_location: "checklist_hero" });
        window.print();
      }}
      className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none sm:w-auto print:hidden"
    >
      <Printer className="size-4" aria-hidden="true" />
      Print or Save as PDF
    </button>
  );
}
