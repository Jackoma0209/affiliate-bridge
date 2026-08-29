import type { Metadata } from "next";
import { CheckCircle2, Clock3, ClipboardCheck, Palette } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { PrintChecklistButton } from "@/components/print-checklist-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";
import {
  breadcrumbJsonLd,
  howToJsonLd,
} from "@/lib/structured-data";

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
    objective:
      "Finish the day with one buyer, one problem, and one offer you can explain in a sentence.",
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
    objective:
      "Create a functional foundation without losing the day to naming or visual branding.",
    items: [
      "Choose a clear working store name.",
      "Open your Shopify trial only when you are ready to build.",
      "Choose a clean free or starter theme.",
      "Create the essential navigation and contact page.",
    ],
    showTrialCta: true,
  },
  {
    day: "Day 3",
    title: "Build the product page and offer",
    objective:
      "Publish a product page that clearly explains who the product is for and why it is useful.",
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
    objective:
      "Remove the operational problems that can stop a genuine customer from ordering.",
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
    objective:
      "Make the store feel understandable and safe, then test the complete buyer journey.",
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
    objective:
      "Create a small, relevant traffic test rather than broadcasting the store to everyone.",
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
    objective:
      "Use behaviour to decide whether the next problem is traffic, trust, or the offer itself.",
    items: [
      "Check visitor numbers and traffic sources.",
      "Check product-page engagement and CTA clicks.",
      "Check add-to-cart and checkout activity.",
      "Choose one evidence-based improvement for the next test.",
    ],
  },
] as const;

export default function ChecklistPage() {
  const howTo = howToJsonLd({
    name: "7-Day Shopify Launch Checklist",
    description:
      "A practical day-by-day plan to choose one product, open a simple Shopify store, test checkout, and send your first targeted visitors.",
    path: "/checklist",
    steps: checklist.map((day) => ({
      name: `${day.day}: ${day.title}`,
      text: `${day.objective} Tasks: ${day.items.join(" ")}`,
    })),
  });

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "7-Day Checklist", path: "/checklist" },
  ]);

  return (
    <>
      <JsonLd data={[howTo, breadcrumbs]} />
      <SiteHeader />
      <main className="bg-background pb-24 text-foreground md:pb-0">
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
                Move from product idea to a tested store and your first targeted
                visitors without getting trapped in research or redesign loops.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
                <PrintChecklistButton />
                <AffiliateCta
                  eventName="checklist_page_cta_click"
                  variant="light"
                  className="text-sm"
                  large
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground print:hidden">
                {config.affiliateDisclosureShort} The checklist is already
                visible below — no email required.
              </p>
            </div>

            <div className="mt-10 max-w-xl rounded-lg border border-border bg-card p-5 shadow-sm print:hidden">
              <p className="text-sm font-semibold text-card-foreground">
                Optional: get the Day 2 trial reminder
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Most people should open Shopify on Day 2. I’ll email that
                prompt, then one focused task a day.
              </p>
              <div className="mt-4">
                <LeadForm
                  source="checklist_hero"
                  compact
                  submitLabel="Send me Day 2"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="checklist"
          className="px-4 py-14 sm:px-6 md:py-20 print:px-0 print:py-4"
        >
          <div className="mx-auto grid max-w-5xl gap-4 print:max-w-none">
            {checklist.map((day, index) => {
              const isTrialDay = index === 1;

              if (isTrialDay) {
                return (
                  <article
                    id="day-2"
                    key={day.day}
                    className="break-inside-avoid scroll-mt-24 overflow-hidden rounded-xl border-2 border-primary/40 bg-card p-6 shadow-[0_24px_80px_var(--card-glow)] md:p-8 print:border-border print:shadow-none"
                  >
                    <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                          Day 2 · Store setup
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-card-foreground text-balance md:text-4xl">
                          Day 2 – Open your Shopify trial
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                          Open the store, choose a dependable free theme, and stop once the basic
                          structure is ready. You can refine the design after real visitors have
                          used it.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-lg border border-border bg-muted/60 p-4">
                            <div className="flex items-center gap-2 text-primary">
                              <Palette className="size-4" aria-hidden="true" />
                              <p className="text-xs font-semibold uppercase tracking-wide">
                                Recommended theme
                              </p>
                            </div>
                            <p className="mt-2 text-lg font-semibold text-card-foreground">Dawn</p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              Free, clean, and flexible enough for a first store.
                            </p>
                          </div>
                          <div className="rounded-lg border border-border bg-muted/60 p-4">
                            <div className="flex items-center gap-2 text-primary">
                              <Clock3 className="size-4" aria-hidden="true" />
                              <p className="text-xs font-semibold uppercase tracking-wide">
                                Time estimate
                              </p>
                            </div>
                            <p className="mt-2 text-lg font-semibold text-card-foreground">
                              45–90 minutes
                            </p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              Enough for setup—not a full brand redesign.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-primary/30 bg-primary/10 p-5 md:p-6 print:hidden">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                          Current Shopify offer
                        </p>
                        <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                          3 days free → then $1/month
                        </p>
                        <ul className="mt-5 grid gap-3">
                          {[
                            "Choose a short, easy-to-spell store name.",
                            "Open Shopify and select the Dawn theme.",
                            "Add your logo or store name, then move on.",
                          ].map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-muted-foreground"
                            >
                              <CheckCircle2
                                className="mt-0.5 size-4 shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <AffiliateCta
                          eventName="checklist_page_cta_click"
                          trackingPlacement="checklist_day2"
                          className="mt-6 w-full sm:w-auto"
                          large
                        >
                          {config.shopifyTrialCta}
                        </AffiliateCta>
                        <p className="mt-3 text-xs leading-5 text-muted-foreground">
                          Affiliate link. I may earn a commission at no extra cost to you. Shopify
                          controls its pricing and trial terms.
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  id={`day-${index + 1}`}
                  key={day.day}
                  className="break-inside-avoid scroll-mt-24 rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03] print:shadow-none"
                >
                  <div className="grid gap-4 md:grid-cols-[11rem_1fr]">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        {day.day}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-card-foreground">
                        {day.title}
                      </h2>
                    </div>
                    <div>
                      <p className="mb-4 text-sm leading-6 text-card-foreground">
                        <strong>Objective:</strong> {day.objective}
                      </p>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {day.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-14 sm:px-6 md:py-20 print:hidden">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Ready to build alongside the checklist?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              Open Shopify, choose a simple theme, and complete one checklist
              stage at a time. The platform does not guarantee a sale; the
              checklist helps you run a clearer first test.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AffiliateCta eventName="checklist_page_cta_click" large>
                {config.shopifyTrialCta}
              </AffiliateCta>
              <a
                href="/worksheets"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground hover:bg-muted"
              >
                Open free worksheets
              </a>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
              {config.affiliateDisclosureShort} Get Your First Sale is
              independent from Shopify.
            </p>
          </div>
        </section>
      </main>
      <div className="print:hidden">
        <SiteFooter />
      </div>
    </>
  );
}
