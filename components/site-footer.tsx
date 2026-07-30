import Link from "next/link";

import { config } from "@/config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-4 py-10 text-background/70 sm:px-6 dark:bg-card dark:text-muted-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start">
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

        <nav className="grid gap-2 text-sm" aria-label="Beginner guides">
          <p className="font-semibold text-background dark:text-foreground">Guides</p>
          <Link href="/shopify-for-beginners" className="hover:text-background dark:hover:text-foreground">
            Shopify for Beginners
          </Link>
          <Link href="/what-to-sell-on-shopify" className="hover:text-background dark:hover:text-foreground">
            What to Sell
          </Link>
          <Link href="/why-my-shopify-store-isnt-getting-sales" className="hover:text-background dark:hover:text-foreground">
            Store Not Getting Sales
          </Link>
          <Link href="/shopify-vs-etsy" className="hover:text-background dark:hover:text-foreground">
            Shopify vs Etsy
          </Link>
        </nav>

        <nav className="grid gap-2 text-sm lg:text-right" aria-label="Footer navigation">
          <p className="font-semibold text-background dark:text-foreground">Site</p>
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
