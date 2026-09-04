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
            Independent from Shopify. Written by {config.authorName}.{" "}
            <a
              href={config.xUrl}
              className="text-background hover:underline dark:text-foreground"
              rel="me"
            >
              @{config.xHandle} on X
            </a>
            .
          </p>
        </div>

        <nav className="grid gap-2 text-sm" aria-label="Beginner guides">
          <p className="font-semibold text-background dark:text-foreground">Guides</p>
          <Link href="/shopify-for-beginners" className="hover:text-background dark:hover:text-foreground">
            Shopify for Beginners
          </Link>
          <Link href="/shopify-dawn-theme-setup" className="hover:text-background dark:hover:text-foreground">
            Dawn Setup
          </Link>
          <Link href="/shopify-product-page-template" className="hover:text-background dark:hover:text-foreground">
            Product Page Template
          </Link>
          <Link href="/shopify-trust-policies" className="hover:text-background dark:hover:text-foreground">
            Trust Copy and Policies
          </Link>
          <Link href="/test-shopify-checkout-on-mobile" className="hover:text-background dark:hover:text-foreground">
            Mobile Checkout Test
          </Link>
          <Link href="/get-first-shopify-visitors" className="hover:text-background dark:hover:text-foreground">
            First Visitors
          </Link>
          <Link href="/7-day-shopify-plan-what-usually-happens" className="hover:text-background dark:hover:text-foreground">
            What Usually Happens in 7 Days
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
          <Link href="/worksheets" className="hover:text-background dark:hover:text-foreground">
            Worksheets
          </Link>
          <Link href="/guides" className="hover:text-background dark:hover:text-foreground">
            All Guides
          </Link>
          <Link href="/contact#setup" className="hover:text-background dark:hover:text-foreground">
            Paid setup
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
