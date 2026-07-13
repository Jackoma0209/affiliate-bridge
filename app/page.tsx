import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  Lightbulb,
  ListChecks,
  Megaphone,
  PackageCheck,
  PackageSearch,
  ShieldCheck,
  Store,
  Target,
  Users,
} from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { FirstSaleQuiz } from "@/components/first-sale-quiz";
import { LeadCapture } from "@/components/lead-capture";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: config.siteUrl,
    siteName: config.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
  },
};

const problems = [
  {
    title: "The offer is too broad",
    body: "Define one buyer, one problem, and one clear reason to choose the product.",
    fix: "Write: This product helps [buyer] achieve [outcome] without [objection].",
    icon: Lightbulb,
  },
  {
    title: "The store remains a draft",
    body: "Theme tweaks feel productive, but they do not create customer feedback.",
    fix: "Publish when the offer, delivery details, contact page, and checkout work.",
    icon: Store,
  },
  {
    title: "There is no traffic source",
    body: "A functioning store cannot convert visitors who never arrive.",
    fix: "Choose one channel and identify your first 25 relevant people or searches.",
    icon: Megaphone,
  },
  {
    title: "Learning has replaced launching",
    body: "Another course only helps when it produces a visible store improvement.",
    fix: "For every 30 minutes of learning, complete one practical store task.",
    icon: BookOpen,
  },
  {
    title: "There is no diagnostic next step",
    body: "Without an order of operations, every problem feels equally urgent.",
    fix: "Work in order: offer, product page, checkout, trust, traffic, analytics.",
    icon: ClipboardCheck,
  },
] as const;

const planIcons = [
  PackageSearch,
  Store,
  PackageCheck,
  CreditCard,
  ShieldCheck,
  Users,
  BarChart3,
] as const;

const faqItems = [
  {
    question: "Is this page run by Shopify?",
    answer:
      "No. Get Your First Sale is an independent beginner guide. I may earn a commission if you start Shopify through an affiliate link, at no extra cost to you.",
  },
  {
    question: "Does the checklist guarantee a first sale?",
    answer:
      "No. It gives you a practical sequence, but sales depend on your product, offer, pricing, trust, traffic, and follow-through.",
  },
  {
    question: "Do I need coding skills?",
    answer:
      "No coding is required for the beginner path. Shopify lets you choose a theme, add products, configure payments, and publish core pages through its interface.",
  },
  {
    question: "What should I sell first?",
    answer:
      "Start with the simplest offer you can explain, fulfil, and test. The quiz below gives you a practical starting path based on your situation.",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pb-24 text-foreground md:pb-0">
        <section className="bg-[image:var(--hero-gradient)] px-4 py-10 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-[2.25rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
                {content.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {content.hero.subhead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/checklist"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition-colors hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
                >
                  Get the Free 7-Day Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <AffiliateCta eventName="hero_cta_click" large variant="light">
                  Start My Shopify Trial
                </AffiliateCta>
              </div>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
                The checklist opens instantly. Affiliate disclosure: {config.affiliateDisclosure.replace("Disclosure: ", "")} Results vary.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-[0_24px_80px_var(--card-glow)]">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Checklist preview
                  </p>
                  <p className="mt-1 text-lg font-semibold">Your first-week path</p>
                </div>
                <ListChecks className="size-6 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  "Choose one focused product idea",
                  "Publish a simple trustworthy store",
                  "Test checkout on mobile",
                  "Send your first targeted visitors",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-muted/65 p-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-card text-xs font-semibold ring-1 ring-border">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                    <CheckCircle2 className="ml-auto size-4 text-primary" aria-hidden="true" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Seven practical stages covering product, store setup, trust, checkout, traffic, and analytics.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-6 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-3 text-sm sm:grid-cols-3">
            <p><strong className="text-foreground">Independent guide.</strong> Not owned by Shopify.</p>
            <p><strong className="text-foreground">No fake proof.</strong> No guaranteed-income claims.</p>
            <p><strong className="text-foreground">Reviewed July 2026.</strong> Clear disclosures beside affiliate links.</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Why beginner Shopify stores stall before the first sale
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Most stores do not stall because the owner lacks motivation. They stall because one essential part of the launch sequence is missing.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {problems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    <p className="mt-4 border-t border-border pt-4 text-sm leading-6">
                      <strong>Today&apos;s fix:</strong> {item.fix}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="launch-plan" className="scroll-mt-24 border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Main checklist</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">The 7-Day Shopify Launch Plan</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Complete one focused job each day. Publish before the store feels perfect, then use real visitor behaviour to decide what to improve.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {content.solution.steps.map((step, index) => {
                const Icon = planIcons[index];
                return (
                  <article key={step.title} className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">Day {index + 1}</span>
                      <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-semibold leading-6">{step.title.replace(/^Day \d+ — /, "")}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/checklist" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] hover:brightness-95">
                Open the Complete Checklist
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <LeadCapture />

        <section id="quiz" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Free mini quiz</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">What should I sell first?</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Answer four questions and get a practical starting path. The result is shown immediately without an email gate.
              </p>
            </div>
            <div className="mt-10"><FirstSaleQuiz /></div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">How this guide works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">Practical guidance without invented testimonials</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Get Your First Sale is an independent beginner resource. Recommendations are organised around a complete launch sequence and are updated when the site or checklist changes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "The checklist is visible before any affiliate click.",
                "Every Shopify link is labelled as an affiliate link.",
                "The page does not promise sales, revenue, or a winning product.",
                "You can compare Shopify with simpler selling options before deciding.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Fair comparison</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">When Shopify is the useful next step</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Social messages and marketplaces can validate an idea quickly. Shopify becomes useful when you want products, checkout, customer records, and orders in one commerce-focused system.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Social messages", "Fast for early conversations, but payments, orders, and customer details remain manual."],
                ["Marketplaces", "Useful when demand already exists, although the marketplace controls more of the customer relationship."],
                ["Shopify", "A stronger fit when you are ready for a branded store, hosted checkout, product management, and room to grow."],
              ].map(([title, body], index) => (
                <article key={title} className={`rounded-lg border p-5 ${index === 2 ? "border-primary bg-primary/10" : "border-border bg-card"}`}>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Questions</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Beginner FAQ</h2>
            </div>
            <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.question}
                    <span className="flex size-6 items-center justify-center rounded-lg border border-border transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-16 text-background sm:px-6 md:py-24 dark:bg-card dark:text-card-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-5xl">Ready to build alongside the checklist?</h2>
            <p className="mt-5 text-base leading-7 text-background/75 md:text-lg dark:text-muted-foreground">
              Open your Shopify trial, choose a simple theme, and complete one focused checklist stage each day.
            </p>
            <div className="mt-8 flex justify-center">
              <AffiliateCta eventName="final_cta_click" variant="light" large>Start My Shopify Trial</AffiliateCta>
            </div>
            <p className="mt-4 text-xs leading-5 text-background/65 dark:text-muted-foreground">{config.affiliateDisclosure} Results vary.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
