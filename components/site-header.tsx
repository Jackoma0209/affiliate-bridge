"use client";

import Link from "next/link";
import { ArrowRight, Menu, Rocket } from "lucide-react";

import { config } from "@/config";
import { trackEvent } from "@/lib/analytics";

const links = [
  ["7-Day Plan", "/#launch-plan"],
  ["Quiz", "/#quiz"],
  ["Compare", "/#comparison"],
] as const;

export function SiteHeader() {
  function trackChecklist(location: string) {
    trackEvent("hero_checklist_click", {
      cta_location: location,
      destination: "/#lead-capture",
    });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${config.siteName} home`}>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_12px_30px_var(--card-glow)]">
            <Rocket className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-foreground">
              {config.siteName}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              A practical beginner launch guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-border bg-card text-card-foreground focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none" aria-label="Open navigation menu">
              <Menu className="size-4" aria-hidden="true" />
            </summary>
            <nav className="absolute right-0 top-12 grid min-w-48 gap-1 rounded-2xl border border-border bg-card p-2 text-sm font-semibold shadow-xl" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-xl px-3 py-2.5 hover:bg-muted">
                  {label}
                </Link>
              ))}
              <Link
                href="/#lead-capture"
                onClick={() => trackChecklist("mobile_menu")}
                className="mt-1 rounded-xl bg-primary px-3 py-2.5 text-primary-foreground"
              >
                Get Free Checklist
              </Link>
            </nav>
          </details>

          <Link
            href="/#lead-capture"
            onClick={() => trackChecklist("header")}
            className="hidden min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-[0_12px_28px_var(--card-glow)] transition hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none sm:inline-flex"
          >
            Get Free Checklist
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
