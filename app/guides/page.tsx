import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Shopify Beginner Guides | Get Your First Sale",
  description:
    "Practical beginner guides for choosing a product, launching Shopify, diagnosing no-sales problems, and comparing Shopify with Etsy.",
  path: "/guides",
});

const guides = [
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "A practical first-store guide covering offer, setup, product page, checkout, trust, traffic, and measurement.",
  },
  {
    href: "/what-to-sell-on-shopify",
    title: "What to Sell on Shopify",
    description: "Use a simple product filter instead of relying on hype or supposed winning-product lists.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Diagnose traffic, relevance, trust, product-page, and checkout problems in the right order.",
  },
  {
    href: "/shopify-vs-etsy",
    title: "Shopify vs Etsy for Beginners",
    description: "Compare the two approaches based on demand, control, traffic responsibility, and the test you need to run first.",
  },
  {
    href: "/checklist",
    title: "7-Day Shopify Launch Checklist",
    description: "Work through the complete launch sequence and print or save it as a PDF.",
  },
] as const;

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Beginner resource library</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Practical Shopify Guides for Getting From Idea to Real Visitor Feedback
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Use these guides to answer one launch question at a time: what to sell, how to build the first store, where sales problems happen, and whether Shopify is the right next platform for your test.
            </p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h2 className="text-xl font-semibold tracking-tight text-card-foreground">{guide.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{guide.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read guide <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
