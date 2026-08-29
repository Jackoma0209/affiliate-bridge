import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { DisclosureLine } from "@/components/disclosure-line";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { PrintChecklistButton } from "@/components/print-checklist-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "First Sale Worksheets: Offer, Product Page, Outreach",
  description:
    "Free printable Shopify launch worksheets: offer sentence, product-page template, policy starters, and Day 6 outreach scripts. No email wall.",
  alternates: { canonical: "/worksheets" },
};

const worksheets = [
  {
    id: "offer",
    title: "1. Offer sentence",
    prompt: "Finish this in one line. If a stranger cannot understand it, the store will feel vague.",
    template:
      "This product helps [specific buyer] achieve [clear outcome] without [main objection].",
    example:
      "This product helps first-time marathon walkers keep water on the route without carrying a bulky backpack.",
    checks: [
      "Name a person, not “everyone who likes fitness”.",
      "Name an outcome they already want.",
      "Name the hesitation (price, hassle, trust, time).",
    ],
  },
  {
    id: "product-page",
    title: "2. Product-page outline",
    prompt: "Write these blocks in this order. Lead with the buyer, not the brand slogan.",
    template: "",
    example: "",
    checks: [
      "Title: what it is + who it is for.",
      "First screen: outcome, price, primary button.",
      "What they receive, in plain language.",
      "Delivery estimate and returns in one short paragraph.",
      "Three FAQs that answer real objections, not marketing fluff.",
    ],
  },
  {
    id: "policies",
    title: "3. Trust copy starters",
    prompt: "Publish these in your own words. Incomplete policy pages are a common reason new stores feel unsafe.",
    template: "",
    example: "",
    checks: [
      "Contact: a real email people can reach, linked in the footer and contact page.",
      "Shipping: where you ship, typical timing, and what happens after the order.",
      "Returns: how many days, who pays return postage, and how a refund is issued.",
      "Privacy: what you collect at checkout and that you do not sell the list.",
    ],
  },
  {
    id: "outreach",
    title: "4. Day 6 outreach scripts",
    prompt: "Send these to people who already know you or already talk about the problem. Ask what is unclear, not only whether they would buy.",
    template: "",
    example: "",
    checks: [
      "Warm DM: “I put a first version live for [buyer]. Would you tell me what is unclear on the product page? Link: [store]”",
      "Community comment: answer the question first. Link the store only if someone asks how you would sell it.",
      "Short post: “Day 6 of a 7-day launch. One product, one page. What would stop you buying this?”",
      "Follow-up: thank them, change one thing, do not argue with the feedback.",
    ],
  },
] as const;

export default function WorksheetsPage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: "First Sale Worksheets",
            description:
              "Free printable worksheets for a first Shopify launch: offer sentence, product page, policies, and outreach.",
            path: "/worksheets",
            dateModified: config.contentDateIso,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Worksheets", path: "/worksheets" },
          ]),
        ]}
      />
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 py-14 sm:px-6 md:py-20 print:bg-none print:py-6">
          <div className="mx-auto max-w-5xl">
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground print:hidden">
              <ClipboardList className="size-5" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary print:mt-0">
              Free printable toolkit
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              First Sale worksheets
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Fill these in before you redesign the theme. They are the same
              jobs as Days 1, 3, 4, and 6 of the checklist, laid out so you can
              write on paper or in a notes app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
              <PrintChecklistButton />
              <Link
                href="/checklist"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground hover:bg-muted"
              >
                Open the 7-day checklist
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 print:px-0 print:py-4">
          <div className="mx-auto grid max-w-5xl gap-6">
            {worksheets.map((sheet) => (
              <article
                key={sheet.id}
                id={sheet.id}
                className="break-inside-avoid rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {sheet.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {sheet.prompt}
                </p>
                {sheet.template ? (
                  <p className="mt-4 rounded-lg bg-muted/70 p-4 font-medium leading-7">
                    {sheet.template}
                  </p>
                ) : null}
                {sheet.example ? (
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    <strong className="text-foreground">Example: </strong>
                    {sheet.example}
                  </p>
                ) : null}
                <ul className="mt-5 grid gap-3">
                  {sheet.checks.map((item) => (
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
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-14 sm:px-6 print:hidden">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                After the offer sentence, open the store
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Day 2 of the checklist is the usual moment to start Shopify.
                Need the first store built for you instead? Email with the
                subject SETUP.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <AffiliateCta
                  eventName="worksheets_cta_click"
                  trackingPlacement="worksheets_bottom"
                  large
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
                <Link
                  href="/contact#setup"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground hover:bg-muted"
                >
                  Paid setup details
                </Link>
              </div>
              <DisclosureLine className="mt-4" />
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-sm font-semibold">Optional Day 2 reminder</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Worksheets stay free either way.
              </p>
              <div className="mt-4">
                <LeadForm
                  source="worksheets"
                  compact
                  submitLabel="Send me Day 2"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="print:hidden">
        <SiteFooter />
      </div>
    </>
  );
}
