import Link from "next/link";
import { Rocket } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { ThemeToggle } from "@/components/theme-toggle";
import { config } from "@/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_12px_30px_var(--card-glow)]">
            <Rocket className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground">
              {config.siteName}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Independent beginner guide
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          <Link href="/#launch-plan" className="transition-colors hover:text-foreground">
            7-day plan
          </Link>
          <Link href="/checklist" className="transition-colors hover:text-foreground">
            Checklist
          </Link>
          <Link href="/#quiz" className="transition-colors hover:text-foreground">
            Quiz
          </Link>
          <Link href="/#comparison" className="transition-colors hover:text-foreground">
            Compare
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AffiliateCta
            eventName="hero_cta_click"
            className="hidden sm:inline-flex sm:w-auto"
            showIcon={false}
          >
            Open Shopify Trial
          </AffiliateCta>
        </div>
      </div>
    </header>
  );
}
