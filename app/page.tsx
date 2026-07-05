import type { Metadata } from "next";
import Link from "next/link";
import {
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
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/",
  },
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

const beginnerBlocks = [
  {
    title: "No clear product idea",
    description:
      "A vague niche makes every later decision harder. Start with one buyer, one problem, and one offer.",
    icon: Lightbulb,
  },
  {
    title: "Store never actually launches",
    description:
      "Beginners often redesign for weeks. A simple first version can teach you more than a perfect draft.",
    icon: Store,
  },
  {
    title: "No traffic plan",
    description:
      "A store needs visitors. Decide who you will invite, where they already gather, and what you will test.",
    icon: Megaphone,
  },
  {
    title: "Too much time spent watching courses",
    description:
      "Learning helps, but only after it turns into a published product page, checkout, and traffic test.",
    icon: BookOpen,
  },
  {
    title: "No simple next step",
    description:
      "Momentum comes from a short list you can finish today, not a huge business plan you never use.",
    icon: ClipboardCheck,
  },
] as const;

const launchPlanIcons = [
  PackageSearch,
  Store,
  PackageCheck,
  CreditCard,
  ShieldCheck,
  Users,
  BarChart3,
] as const;

const realisticWins = [
  "Your first win might be publishing your store.",
  "Your second win might be getting your first visitor.",
  "Your third win might be your first add-to-cart.",
  "Your first sale comes from testing your offer and traffic, not luck.",
] as const;

const comparisonRows = [
  {
    label: "Own your customer list",
    values: [
      "Limited unless you collect details manually",
      "Often limited by marketplace rules",
      "Usually possible with extra setup",
      "Built around customers, orders, and email tools",
    ],
  },
  {
    label: "Real checkout",
    values: [
      "Manual payments and back-and-forth messages",
      "Marketplace checkout, not your branded flow",
      "Possible, but commerce features vary",
      "Hosted checkout designed for online stores",
    ],
  },
  {
    label: "Product/order management",
    values: [
      "Spreadsheets and message threads",
      "Useful, but tied to that marketplace",
      "May require plugins or separate tools",
      "Products, inventory, orders, and fulfillment together",
    ],
  },
  {
    label: "Scales beyond first sale",
    values: [
      "Works for early validation, then gets manual",
      "Can scale, but you build on rented demand",
      "Depends on commerce depth and integrations",
      "Can start simple and grow into more channels",
    ],
  },
  {
    label: "Beginner setup",
    values: [
      "Fast to test, but easy to lose track",
      "Fast if the marketplace fits your product",
      "Simple pages, more decisions for selling",
      "Guided commerce setup with themes and checkout",
    ],
  },
] as const;

const faqItems = [
  {
    question: "Is this page run by Shopify?",
    answer:
      "No. Get Your First Sale is an independent affiliate guide. I may earn a commission if you start Shopify through my link, at no extra cost to you.",
  },
  {
    question: "Does the checklist guarantee my first sale?",
    answer:
      "No. The checklist gives you practical steps, but results vary. Sales depend on your product, offer, traffic, pricing, trust signals, and effort.",
  },
  {
    question: "Do I need coding skills to start?",
    answer:
      "No coding is required for the beginner setup path. You can choose a theme, add products, set up payments, and publish core pages from Shopify.",
  },
  {
    question: "What should I sell first?",
    answer:
      "Start with the simplest offer you can explain, fulfill, and test. Use the quiz on this page to choose a practical starting path.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function LaunchChecklistPreview() {
  const previewItems = [
    "Choose one product idea",
    "Publish a simple store",
    "Test checkout on mobile",
    "Send first visitors",
  ];

  return (
    <div className="relative rounded-lg border border-border bg-card p-4 shadow-[0_24px_80px_var(--card-glow)]">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Weekend launch board
          </p>
          <p className="mt-1 text-lg font-semibold text-card-foreground">
            7-day first sale plan
          </p>
        </div>
        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          <ListChecks className="size-5" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {previewItems.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg border border-border bg-muted/70 p-3"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-card text-xs font-semibold text-muted-foreground ring-1 ring-border">
              {index + 1}
            </span>
            <span className="text-sm font-medium text-card-foreground">{item}</span>
            <CheckCircle2 className="ml-auto size-4 text-primary" aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
        {[
          ["Focus", "1 product"],
          ["Setup", "No code"],
          ["Traffic", "Small test"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-background/70 p-3 ring-1 ring-border">
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaBand({
  title,
  body,
  eventName,
  variant = "light",
}: {
  title: string;
  body: string;
  eventName: "hero_cta_click" | "plan_cta_click" | "comparison_cta_click";
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "px-4 py-5 sm:px-6 md:py-8",
        isDark
          ? "bg-foreground text-background dark:bg-card dark:text-card-foreground"
          : "border-y border-border bg-muted/65"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <p
            className={cn(
              "mt-1 max-w-2xl text-sm leading-6",
              isDark ? "text-background/75 dark:text-muted-foreground" : "text-muted-foreground"
            )}
          >
            {body}
          </p>
        </div>
        <AffiliateCta
          eventName={eventName}
          variant={isDark ? "light" : "primary"}
          className="md:w-auto"
        >
          Open Shopify Trial
        </AffiliateCta>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="bg-background pb-24 text-foreground md:pb-0">
        <section className="bg-[image:var(--hero-gradient)] px-4 pt-8 pb-8 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.03fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-[2.1rem] leading-[1.05] font-semibold tracking-tight text-foreground text-balance sm:text-5xl lg:text-[3.4rem]">
                Launch your Shopify store this weekend with a simple{" "}
                <span className="whitespace-nowrap">7-day plan</span> to chase
                your first sale
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground text-pretty md:text-lg md:leading-8">
                {content.hero.subhead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AffiliateCta eventName="hero_cta_click" large>
                  {content.hero.cta}
                </AffiliateCta>
                <Link
                  href="/checklist"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
                >
                  Use the 7-Day Checklist
                </Link>
              </div>

              <p className="mt-4 max-w-2xl text-xs leading-5 text-muted-foreground">
                Affiliate disclosure: {config.affiliateDisclosure.replace("Disclosure: ", "")}{" "}
                Results vary. Your sales depend on your product, offer, traffic,
                and effort.
              </p>
            </div>

            <div className="hidden md:block">
              <LaunchChecklistPreview />
            </div>
          </div>
        </section>

        <CtaBand
          title="Start with the platform, then follow the checklist."
          body="Shopify gives you the store tools. This page gives you a practical first-week path so you are not staring at a blank dashboard."
          eventName="hero_cta_click"
        />

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              title="Why most beginners do not get their first sale"
              body="This is not about fear or pressure. These are the common places new founders get stuck before they have enough real feedback to improve."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {beginnerBlocks.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]"
                  >
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="launch-plan"
          className="scroll-mt-24 border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Main checklist"
              title="7-Day First Sale Launch Plan"
              body="Each day has one job. Keep the first version narrow, publish before you feel completely ready, and let real visitors show you what to improve."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {content.solution.steps.map((step, index) => {
                const Icon = launchPlanIcons[index];

                return (
                  <article
                    key={step.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03] lg:col-span-1"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Day {index + 1}
                      </span>
                      <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold leading-6 text-card-foreground">
                      {step.title.replace(/^Day \d+ — /, "")}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to turn the checklist into a real store?"
          body="Open the trial, choose a clean theme, and use the 7-day plan to keep the first version moving."
          eventName="plan_cta_click"
          variant="dark"
        />

        <LeadCapture />

        <section id="quiz" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Mini quiz"
              title="What should I sell first?"
              body="Answer four quick questions and get a practical starting path. No backend, no email gate, no inflated promise."
            />
            <div className="mt-10">
              <FirstSaleQuiz />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <SectionHeader
              align="left"
              eyebrow="Realistic progress"
              title="What a realistic first win looks like"
              body="Replacing fake testimonials with honest milestones keeps the page useful and compliant. A first sale is earned through testing, not guaranteed by any platform."
            />
            <div className="grid gap-3">
              {realisticWins.map((win, index) => (
                <div
                  key={win}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-sm shadow-black/[0.03]"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-card-foreground">{win}</p>
                </div>
              ))}
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Results vary. Your sales depend on your product, offer, traffic,
                pricing, trust signals, and follow-through.
              </p>
            </div>
          </div>
        </section>

        <section
          id="comparison"
          className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Fair comparison"
              title="Shopify vs alternatives for a first sale"
              body="There are valid ways to validate an offer. The question is which option gives a beginner enough structure to sell, learn, and keep going."
            />

            <div className="mt-10 overflow-x-auto rounded-lg border border-border bg-card shadow-sm shadow-black/[0.03]">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of beginner selling options and Shopify
                </caption>
                <thead>
                  <tr className="border-b border-border bg-muted/80 text-foreground">
                    <th scope="col" className="w-[18%] px-4 py-4 font-semibold">
                      Criteria
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Selling on Instagram DMs
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Selling on marketplaces
                    </th>
                    <th scope="col" className="px-4 py-4 font-semibold">
                      Generic website builder
                    </th>
                    <th scope="col" className="bg-primary/10 px-4 py-4 font-semibold text-foreground">
                      Shopify
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="align-top">
                      <th scope="row" className="px-4 py-4 font-semibold text-card-foreground">
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={value}
                          className={cn(
                            "px-4 py-4 leading-6 text-muted-foreground",
                            index === 3 ? "bg-primary/10 text-card-foreground" : ""
                          )}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CtaBand
          title="Choose the setup that helps you actually launch."
          body="For many beginners, Shopify is useful because checkout, products, orders, and store pages live in one commerce-focused platform."
          eventName="comparison_cta_click"
        />

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="Questions"
              title="Beginner FAQ"
              body="Short answers, no smoke and mirrors."
            />
            <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-card-foreground">
                    {item.question}
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-16 text-background sm:px-6 md:py-24 dark:bg-card dark:text-card-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Start the trial. Follow the plan. Learn from real visitors.
            </h2>
            <p className="mt-5 text-base leading-7 text-background/75 md:text-lg dark:text-muted-foreground">
              The goal today is not a fantasy revenue number. It is a real store,
              a clear offer, and your first practical traffic test.
            </p>
            <div className="mt-8 flex justify-center">
              <AffiliateCta eventName="final_cta_click" variant="light" large>
                Start Shopify Free + Get the Checklist
              </AffiliateCta>
            </div>
            <p className="mt-4 text-xs leading-5 text-background/65 dark:text-muted-foreground">
              {config.affiliateDisclosure} Results vary.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileStickyCta />
    </>
  );
}
