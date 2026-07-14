import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Compass,
  CreditCard,
  FileCheck2,
  Lightbulb,
  MessageCircle,
  PackageCheck,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
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

const heroBenefits = [
  "Choose one focused product and offer",
  "Build trust and test checkout on mobile",
  "Send your first targeted visitors",
] as const;

const trustItems = [
  { icon: ShieldCheck, title: "Independent guide", body: "Not owned by Shopify" },
  { icon: FileCheck2, title: "Reviewed July 2026", body: "Clear, current guidance" },
  { icon: ClipboardCheck, title: "Printable plan", body: "Seven focused days" },
  { icon: Sparkles, title: "No fake proof", body: "No income guarantees" },
] as const;

const problems = [
  {
    title: "The offer is unclear",
    body: "A broad product idea makes the product page, audience, and marketing harder to explain.",
    fix: "Choose one buyer, one problem, and one simple reason to choose the offer.",
    icon: Lightbulb,
  },
  {
    title: "The store never feels finished",
    body: "Theme changes feel productive, but they delay feedback from real visitors and buyers.",
    fix: "Publish when the offer, delivery, contact details, policies, and checkout work.",
    icon: Store,
  },
  {
    title: "No targeted visitors arrive",
    body: "A functioning store cannot convert if there is no clear first traffic source or outreach plan.",
    fix: "Choose one channel and prepare a small, relevant traffic experiment.",
    icon: Users,
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

const planMeta = [
  { time: "30–45 min", outcome: "One buyer, problem, and offer" },
  { time: "45–60 min", outcome: "A simple store foundation" },
  { time: "60–90 min", outcome: "A clear product page" },
  { time: "45–60 min", outcome: "Payments and policies ready" },
  { time: "30–45 min", outcome: "A tested mobile checkout" },
  { time: "30–60 min", outcome: "Your first relevant visitors" },
  { time: "20–30 min", outcome: "One evidence-based improvement" },
] as const;

const comparisonRows = [
  ["Fast idea validation", "Strong", "Strong", "Moderate"],
  ["Branded experience", "Limited", "Limited", "Strong"],
  ["Built-in checkout", "Manual", "Strong", "Strong"],
  ["Customer relationship", "Manual", "Platform-controlled", "Merchant-controlled"],
  ["Best when", "Starting conversations", "Demand already exists", "Building a standalone store"],
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
      "No. It gives you a practical sequence, but sales depend on your product, offer, pricing, trust, traffic, market, and follow-through.",
  },
  {
    question: "What happens after I enter my email?",
    answer:
      "The complete checklist becomes available immediately. Your request is also sent to Get Your First Sale so useful checklist updates can be shared. You can ask to be removed from future updates at any time.",
  },
  {
    question: "Do I need coding skills?",
    answer:
      "No coding is required for the beginner path. Shopify lets you choose a theme, add products, configure payments, and publish core pages through its interface.",
  },
  {
    question: "What should I sell first?",
    answer:
      "Start with the simplest offer you can explain, fulfil, and test. The free quiz gives you a practical starting route based on your situation.",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background pb-24 text-foreground md:pb-0">
        <section className="relative overflow-hidden bg-[image:var(--hero-gradient)] px-4 py-12 sm:px-6 md:py-20">
          <div className="pointer-events-none absolute -right-24 top-12 size-72 rounded-full border border-primary/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-6 top-36 size-40 rounded-full border border-primary/10" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.13em] text-primary">
                <Target className="size-3.5" aria-hidden="true" />
                Free Shopify launch checklist for beginners
              </div>
              <h1 className="mt-5 max-w-4xl text-[2.55rem] leading-[1.03] font-bold tracking-[-0.04em] text-balance sm:text-5xl lg:text-[4rem]">
                Build a sale-ready Shopify store in 7 days.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                Get the practical beginner checklist for choosing one product, creating trust, testing checkout, and attracting your first targeted visitors—without coding, hype, or endless theme tweaking.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {heroBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#launch-plan"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-bold text-card-foreground shadow-sm transition hover:border-primary/40 hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none"
                >
                  Preview the 7-Day Plan
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <AffiliateCta
                  eventName="hero_cta_click"
                  variant="light"
                  className="min-h-0 w-auto bg-transparent px-0 py-2 text-sm text-muted-foreground shadow-none ring-0 hover:bg-transparent hover:text-foreground"
                >
                  Already ready? Start Shopify trial
                </AffiliateCta>
              </div>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
                The Shopify link is an affiliate link. The checklist does not guarantee sales or income. Results vary.
              </p>
            </div>

            <LeadCapture variant="hero" source="hero" />
          </div>
        </section>

        <section className="border-y border-border bg-card px-4 py-5 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-5">
                    <strong className="block text-foreground">{item.title}</strong>
                    <span className="text-muted-foreground">{item.body}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="paper-grid rounded-3xl border border-border bg-card p-5 shadow-[0_24px_80px_var(--card-glow)] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Checklist preview</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">Your first three launch days</h2>
                </div>
                <ClipboardCheck className="size-7 text-primary" aria-hidden="true" />
              </div>
              <div className="mt-5 grid gap-3">
                {content.solution.steps.slice(0, 3).map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl border border-border bg-background/90 p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/25 text-sm font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-bold">{step.title.replace(/^Day \d+ — /, "")}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-foreground p-4 text-background">
                <p className="text-sm font-semibold">Four more days cover operations, trust, traffic, and analytics.</p>
                <ArrowRight className="size-5 shrink-0 text-primary" aria-hidden="true" />
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">A real resource, not a teaser</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                See what you will do before you enter your email.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Each day has one objective, a short task list, and a clear outcome. The plan is designed to move you from an idea to a store that is ready for genuine visitor feedback.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock3, title: "Manageable pace", body: "Roughly 20–90 minutes per day" },
                  { icon: ShoppingBag, title: "Commerce focused", body: "Product, checkout, trust, and traffic" },
                  { icon: FileCheck2, title: "Printable", body: "Save the full page as a PDF" },
                  { icon: Compass, title: "Evidence led", body: "Improve based on real behaviour" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-border bg-card p-4">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      <p className="mt-3 font-bold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Why new stores stall</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Fix the three blockers that matter before adding more tools.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Most first stores do not need more apps or another redesign. They need a clearer offer, a finished buying journey, and a small source of relevant traffic.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <span className="absolute right-5 top-5 text-5xl font-bold text-primary/7">0{index + 1}</span>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    <div className="mt-5 border-t border-border pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">Your next move</p>
                      <p className="mt-2 text-sm leading-6 text-foreground">{item.fix}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="launch-plan" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">The complete sequence</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-5xl">
                The 7-Day Shopify Launch Plan
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Complete one focused job each day. Publish before the store feels perfect, then use visitor behaviour to decide what to improve.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 lg:grid-cols-2">
              <div className="pointer-events-none absolute bottom-10 left-1/2 top-10 hidden w-px bg-border lg:block" aria-hidden="true" />
              {content.solution.steps.map((step, index) => {
                const Icon = planIcons[index];
                const meta = planMeta[index];
                return (
                  <article key={step.title} className="relative rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground shadow-[0_12px_28px_var(--card-glow)]">
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Day {index + 1}</p>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                            <Clock3 className="size-3.5" aria-hidden="true" />
                            {meta.time}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-bold tracking-tight">{step.title.replace(/^Day \d+ — /, "")}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                        <div className="mt-4 flex items-start gap-2 rounded-2xl bg-muted/65 p-3.5">
                          <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <p className="text-sm leading-6"><strong>End-of-day outcome:</strong> {meta.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-9 flex justify-center">
              <Link
                href="#lead-capture"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] transition hover:brightness-95 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none"
              >
                Send Me the 7-Day Launch Plan
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <LeadCapture source="mid_page" />

        <section id="quiz" className="scroll-mt-24 border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Free four-question quiz</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                What should you sell first?
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Answer one question at a time and get a practical store model, first validation task, traffic action, and realistic pace.
              </p>
            </div>
            <div className="mt-10">
              <FirstSaleQuiz />
            </div>
          </div>
        </section>

        <section id="comparison" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">A fair decision guide</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                When Shopify is the useful next step
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Shopify is not automatically the right first tool. Use the simplest selling method that matches what you are trying to validate.
              </p>
            </div>

            <div className="mt-10 hidden overflow-hidden rounded-3xl border border-border bg-card md:block">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-foreground text-background">
                  <tr>
                    <th className="px-5 py-4 font-bold">Factor</th>
                    <th className="px-5 py-4 font-bold">Social messages</th>
                    <th className="px-5 py-4 font-bold">Marketplace</th>
                    <th className="bg-primary px-5 py-4 font-bold text-primary-foreground">Shopify</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map(([factor, social, marketplace, shopify]) => (
                    <tr key={factor}>
                      <th className="px-5 py-4 font-bold text-foreground">{factor}</th>
                      <td className="px-5 py-4 text-muted-foreground">{social}</td>
                      <td className="px-5 py-4 text-muted-foreground">{marketplace}</td>
                      <td className="bg-primary/6 px-5 py-4 font-semibold text-foreground">{shopify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:hidden">
              {[
                { icon: MessageCircle, title: "Social messages", body: "Best for early conversations and fast feedback before you need a full store." },
                { icon: ShoppingBag, title: "Marketplace", body: "Best when buyers already search on the platform and you accept less control." },
                { icon: Store, title: "Shopify", body: "Best when you are ready for a branded store, hosted checkout, customer records, and room to grow." },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className={`rounded-2xl border p-5 ${index === 2 ? "border-primary bg-primary/8" : "border-border bg-card"}`}>
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <AffiliateCta eventName="comparison_cta_click" large>
                Start Building on Shopify
              </AffiliateCta>
              <p className="max-w-2xl text-xs leading-5 text-muted-foreground">
                Affiliate link. Shopify is optional and does not guarantee traffic, customers, sales, or revenue.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Trust without invented testimonials</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Judge the guide by what it shows you.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Get Your First Sale is an independent beginner resource. The checklist is visible before any affiliate click, recommendations explain when Shopify is useful, and the page makes no sales or income promises.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "The checklist can be previewed without giving an email.",
                "Every Shopify action is clearly labelled as an affiliate link.",
                "The guide does not promise a winning product, sale, or income.",
                "The advice follows a complete launch sequence, not a collection of random tips.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Questions</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Beginner FAQ</h2>
            </div>
            <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                    {item.question}
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-16 text-background sm:px-6 md:py-24 dark:bg-card dark:text-card-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_18px_44px_var(--card-glow)]">
              <Target className="size-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance md:text-5xl">
              Ready to build alongside the checklist?
            </h2>
            <p className="mt-5 text-base leading-7 text-background/75 md:text-lg dark:text-muted-foreground">
              Open Shopify, choose a simple theme, and complete one focused checklist stage each day. Start small enough to finish and test.
            </p>
            <div className="mt-8 flex justify-center">
              <AffiliateCta eventName="final_cta_click" variant="light" large>
                Start My Shopify Trial
              </AffiliateCta>
            </div>
            <p className="mt-4 text-xs leading-5 text-background/65 dark:text-muted-foreground">
              {config.affiliateDisclosure} Shopify is optional. Results vary.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
