import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { PrintChecklistButton } from "@/components/print-checklist-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "Shopify Launch Checklist: A Practical 7-Day Plan",
  description:
    "Use a practical 7-day Shopify launch checklist covering product choice, store setup, trust, checkout, first visitors, and analytics.",
  alternates: { canonical: "/checklist" },
  openGraph: {
    title: "Shopify Launch Checklist: A Practical 7-Day Plan",
    description:
      "Use a practical 7-day Shopify launch checklist covering product choice, store setup, trust, checkout, first visitors, and analytics.",
    url: `${config.siteUrl}/checklist`,
    siteName: config.siteName,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Launch Checklist: A Practical 7-Day Plan",
    description:
      "Use a practical 7-day Shopify launch checklist covering product choice, store setup, trust, checkout, first visitors, and analytics.",
  },
};

const checklist = [
  {
    day: "Day 1",
    title: "Choose one focused product idea",
    objective: "Finish the day with one buyer, one problem, and one offer you can explain in a sentence.",
    items: [
      "Choose one specific audience.",
      "Choose one problem, desire, or job to be done.",
      "List three possible offers and select the simplest to test.",
      "Write: This product helps [buyer] achieve [outcome] without [objection].",
    ],
  },
  {
    day: "Day 2",
    title: "Open Shopify and create the basic store",
    objective: "Create a functional foundation without losing the day to naming or visual branding.",
    items: [
      "Choose a clear working store name.",
      "Open your Shopify trial only when you are ready to build.",
      "Choose a clean free or starter theme.",
      "Create the essential navigation and contact page.",
    ],
  },
  {
    day: "Day 3",
    title: "Build the product page and offer",
    objective: "Publish a product page that clearly explains who the product is for and why it is useful.",
    items: [
      "Write a descriptive product title.",
      "Lead with benefits before technical details.",
      "Add original or accurate product images and specifications.",
      "Explain price, delivery, returns, and the primary call to action.",
    ],
  },
  {
    day: "Day 4",
    title: "Configure payments, shipping, and policies",
    objective: "Remove the operational problems that can stop a genuine customer from ordering.",
    items: [
      "Configure and verify payment methods.",
      "Check shipping zones, rates, and delivery estimates.",
      "Publish a clear returns and refund policy.",
      "Publish privacy, terms, and contact information.",
    ],
  },
  {
    day: "Day 5",
    title: "Add trust and test checkout",
    objective: "Make the store feel understandable and safe, then test the complete buyer journey.",
    items: [
      "Make contact and business information easy to find.",
      "Add factual FAQs that answer real objections.",
      "Test product selection, cart, checkout, and confirmation flow.",
      "Repeat the test on a mobile device and fix any friction.",
    ],
  },
  {
    day: "Day 6",
    title: "Send the first targeted visitors",
    objective: "Create a small, relevant traffic test rather than broadcasting the store to everyone.",
    items: [
      "Invite a small warm audience to review the offer.",
      "Choose one community or search-led channel where buyers already gather.",
      "Create one useful short-form post or contribution.",
      "Ask what is unclear instead of asking only whether people would buy.",
    ],
  },
  {
    day: "Day 7",
    title: "Review evidence and improve one thing",
    objective: "Use behaviour to decide whether the next problem is traffic, trust, or the offer itself.",
    items: [
      "Check visitor numbers and traffic sources.",
      "Check product-page engagement and CTA clicks.",
      "Check add-to-cart and checkout activity.",
      "Choose one evidence-based improvement for the next test.",
    ],
  },
] as const;

export default function ChecklistPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 py-14 sm:px-6 md:py-20 print:bg-none print:py-6">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] print:hidden">
                <ClipboardCheck className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary print:mt-0">
                Free practical resource
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                The 7-Day Shopify Launch Checklist
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Move from product idea to a tested store and your first targeted visitors without getting trapped in research or redesign loops.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <PrintChecklistButton />
                <AffiliateCta eventName="checklist_page_cta_click" large>
                  Start My Shopify Trial
                </AffiliateCta>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground print:hidden">
                The checklist is free and already visible below. Shopify is optional. Affiliate disclosure: {config.affiliateDisclosure.replace("Disclosure: ", "")} Results vary.
              </p>
            </div>
          </div>
        </section>

        <section id="checklist" className="px-4 py-14 sm:px-6 md:py-20 print:px-0 print:py-4">
          <div className="mx-auto grid max-w-5xl gap-4 print:max-w-none">
            {checklist.map((day) => (
              <article key={day.day} className="break-inside-avoid rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03] print:shadow-none">
                <div className="grid gap-4 md:grid-cols-[11rem_1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">{day.day}</p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-card-foreground">{day.title}</h2>
                  </div>
                  <div>
                    <p className="mb-4 text-sm leading-6 text-card-foreground"><strong>Objective:</strong> {day.objective}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {day.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-14 sm:px-6 md:py-20 print:hidden">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">Ready to build alongside the checklist?</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              Open Shopify, choose a simple theme, and complete one checklist stage at a time. The platform does not guarantee a sale; the checklist helps you run a clearer first test.
            </p>
            <div className="mt-8 flex justify-center">
              <AffiliateCta eventName="checklist_page_cta_click" large>Start My Shopify Trial</AffiliateCta>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
              {config.affiliateDisclosure} Get Your First Sale is independent from Shopify. Results vary based on your product, offer, traffic, effort, and market.
            </p>
          </div>
        </section>
      </main>
      <div className="print:hidden"><SiteFooter /></div>
    </>
  );
}
