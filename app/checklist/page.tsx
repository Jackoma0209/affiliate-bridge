import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "7-Day Shopify First Sale Checklist | Get Your First Sale",
  description:
    "Follow a practical 7-day checklist to open your Shopify trial, set up your store, test checkout, and start driving your first visitors.",
  alternates: {
    canonical: "/checklist",
  },
  openGraph: {
    title: "7-Day Shopify First Sale Checklist | Get Your First Sale",
    description:
      "Follow a practical 7-day checklist to open your Shopify trial, set up your store, test checkout, and start driving your first visitors.",
    url: `${config.siteUrl}/checklist`,
    siteName: config.siteName,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7-Day Shopify First Sale Checklist | Get Your First Sale",
    description:
      "Follow a practical 7-day checklist to open your Shopify trial, set up your store, test checkout, and start driving your first visitors.",
  },
};

const checklist = [
  {
    day: "Day 1",
    title: "Pick one product idea",
    items: [
      "Choose one audience.",
      "Choose one problem or desire.",
      "Pick one product type.",
      "Avoid trying to launch multiple ideas at once.",
    ],
  },
  {
    day: "Day 2",
    title: "Choose store name and open Shopify trial",
    items: [
      "Pick a simple name.",
      "Open Shopify.",
      "Choose a clean starter theme.",
      "Do not spend hours perfecting branding.",
    ],
  },
  {
    day: "Day 3",
    title: "Add product and offer",
    items: [
      "Add product title.",
      "Add clear product description.",
      "Add product images or mockups.",
      "Write one simple offer.",
    ],
  },
  {
    day: "Day 4",
    title: "Payments, shipping, and policies",
    items: [
      "Set up payments.",
      "Check shipping settings.",
      "Add refund/returns policy.",
      "Add privacy and terms pages.",
    ],
  },
  {
    day: "Day 5",
    title: "Trust signals and test checkout",
    items: [
      "Add contact details.",
      "Add simple FAQ.",
      "Test cart and checkout.",
      "Check mobile layout.",
    ],
  },
  {
    day: "Day 6",
    title: "First traffic push",
    items: [
      "Share with warm audience.",
      "Post in relevant communities where allowed.",
      "Create one short-form post.",
      "Ask for feedback, not just sales.",
    ],
  },
  {
    day: "Day 7",
    title: "Review analytics and improve",
    items: [
      "Check visits.",
      "Check CTA clicks.",
      "Check add-to-cart or checkout activity.",
      "Improve one thing at a time.",
    ],
  },
] as const;

export default function ChecklistPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_16px_38px_var(--card-glow)]">
                <ClipboardCheck className="size-5" aria-hidden="true" />
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                The 7-Day Shopify First Sale Checklist
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A practical beginner checklist to help you move from idea to
                launch without getting stuck in research mode.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AffiliateCta eventName="checklist_page_cta_click" large>
                  Start Shopify Free + Get the Checklist
                </AffiliateCta>
                <a
                  href="#checklist"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
                >
                  Review the checklist
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Affiliate disclosure: {config.affiliateDisclosure.replace("Disclosure: ", "")}{" "}
                Results vary. This checklist does not guarantee sales, traffic,
                revenue, or business outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="checklist" className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-4">
            {checklist.map((day) => (
              <article
                key={day.day}
                className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]"
              >
                <div className="grid gap-4 md:grid-cols-[10rem_1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {day.day}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-card-foreground">
                      {day.title}
                    </h2>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {day.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Open the store, then work through one day at a time.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              Shopify handles the commerce setup. The checklist keeps your first
              week focused on product, trust, checkout, and traffic.
            </p>
            <div className="mt-8 flex justify-center">
              <AffiliateCta eventName="checklist_page_cta_click" large>
                Open Shopify Trial
              </AffiliateCta>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
              {config.affiliateDisclosure} Get Your First Sale is independent
              from Shopify. Results vary based on your product, offer, traffic,
              effort, and market.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
