import Link from "next/link";
import { Menu, Rocket } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { ThemeToggle } from "@/components/theme-toggle";
import { config } from "@/config";

const links = [
  ["Plan", "/#launch-plan"],
  ["Checklist", "/checklist"],
  ["Quiz", "/#quiz"],
  ["Compare", "/#comparison"],
] as const;

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

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-card text-card-foreground focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none" aria-label="Open navigation menu">
              <Menu className="size-4" aria-hidden="true" />
            </summary>
            <nav className="absolute right-0 top-12 grid min-w-44 gap-1 rounded-lg border border-border bg-card p-2 text-sm font-medium shadow-xl" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-md px-3 py-2 hover:bg-muted">
                  {label}
                </Link>
              ))}
            </nav>
          </details>
          <ThemeToggle />
          <AffiliateCta eventName="hero_cta_click" className="hidden sm:inline-flex sm:w-auto" showIcon={false}>
            Start Shopify Trial
          </AffiliateCta>
        </div>
      </div>
    </header>
  );
}
