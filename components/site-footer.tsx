import Link from "next/link";

import { config } from "@/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-4 py-10 text-background/70 sm:px-6 dark:bg-card dark:text-muted-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-sm font-semibold text-background dark:text-foreground">
            {config.siteName}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6">
            {config.affiliateDisclosure}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6">
            This site is independent from Shopify. It is not Shopify, not owned
            by Shopify, and does not imply that I work for Shopify. Results vary.
          </p>
        </div>
        <nav
          className="grid gap-2 text-sm md:text-right"
          aria-label="Footer navigation"
        >
          <Link href="/checklist" className="hover:text-background dark:hover:text-foreground">
            Checklist
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-background dark:hover:text-foreground">
            Affiliate Disclosure
          </Link>
          <Link href="/privacy-policy" className="hover:text-background dark:hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-background dark:hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-background dark:hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
