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
  Megaphone,
  PackageCheck,
  PackageSearch,
  ShieldCheck,
  Store,
  Target,
  Users,
} from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { AuthorProfile } from "@/components/author-profile";
import { DisclosureLine } from "@/components/disclosure-line";
import { FirstSaleQuiz } from "@/components/first-sale-quiz";
import { HeroChecklistLink } from "@/components/hero-checklist-link";
import { JsonLd } from "@/components/json-ld";
import { LeadCapture } from "@/components/lead-capture";
import { LoopVideo } from "@/components/loop-video";
import { MediaFigure } from "@/components/media-figure";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";
import { content } from "@/content";
import { copy, media, showHeroPlanVideo } from "@/lib/media";
import {
  faqPageJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  authors: [{ name: config.authorName, url: `${config.siteUrl}/contact` }],
  creator: config.authorName,
  alternates: { canonical: "/" },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: config.siteUrl,
    siteName: config.siteName,
    type: "website",
    images: [
      {
        url: media.og.src,
        width: media.og.width,
        height: media.og.height,
        alt: media.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [media.og.src],
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
      "Start with the simplest offer you can explain, fulfil, and test. The quiz on this page gives you a practical starting path based on your situation.",
  },
  {
    question: "When should I open a Shopify trial?",
    answer:
      "If you already have a product and a few hours this week, open it today. If you still cannot describe one buyer and one offer, do Day 1 of the checklist first, then open the trial on Day 2. You do not need a perfect brand first.",
  },
  {
    question: "Can you set up the store for me?",
    answer:
      "Yes, as a paid setup. Email getyourfirstsale@gmail.com with the subject SETUP and include your product, audience, and deadline. This is independent from Shopify and separate from the free checklist.",
  },
] as const;

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.authorName,
  description: config.authorBio,
  url: `${config.siteUrl}/contact`,
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
  return (
    <figure className="ml-auto max-w-md rounded-xl border border-border bg-card p-3 shadow-[0_24px_80px_var(--card-glow)]">
      <div className="overflow-hidden rounded-lg bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element -- The project explicitly requires semantic img elements for editorial images. */}
        <img
          src="/images/7-day-checklist-preview.webp"
          width={1024}
          height={1536}
          alt="Printed 7-day ecommerce checklist with steps for product, store, product page, checkout, trust, traffic, and review"
          className="h-[29rem] w-full object-cover object-center xl:h-[31rem]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <figcaption className="px-1 pt-3 text-xs leading-5 text-muted-foreground">
        A practical preview of the seven steps—no revenue promises or hidden course pitch.
      </figcaption>
    </figure>
  );
}

export default function Home() {
  const heroPlanVideo = showHeroPlanVideo();

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          faqPageJsonLd([...faqItems]),
          authorSchema,
        ]}
      />
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 pt-7 pb-8 sm:px-6 md:py-10 xl:py-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {content.hero.eyebrow}
              </p>
              <h1 className="mt-3 max-w-3xl text-[2rem] leading-[1.02] font-semibold tracking-[-0.035em] text-foreground text-balance sm:text-[2.75rem] lg:text-5xl lg:leading-[0.98]">
                {content.hero.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground text-pretty xl:text-lg xl:leading-8">
                {content.hero.subhead}
              </p>

              <div className="mt-6 flex flex-col items-start gap-3 xl:flex-row">
                <AffiliateCta
                  eventName="hero_cta_click"
                  trackingPlacement="hero_primary"
                  className="max-w-full text-sm"
                  large
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
                <HeroChecklistLink className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground shadow-sm transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none">
                  Get the Free 7-Day Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </HeroChecklistLink>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                {content.hero.trialHint}
              </p>
              <p className="mt-2 max-w-3xl text-xs leading-5 text-muted-foreground">
                {config.affiliateDisclosureShort}{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Full disclosure
                </Link>
                .
              </p>
            </div>

            <LaunchChecklistPreview />
          </div>

          {heroPlanVideo ? (
            <div className="mx-auto mt-8 max-w-3xl print:hidden">
              <LoopVideo
                src={media.videoPlan.src}
                poster={media.videoPlan.poster}
                captions={media.videoPlan.captions}
                title={media.videoPlan.title}
                caption={media.videoPlan.caption}
                eager
              />
              <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row">
                <Link
                  href="/checklist"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-95"
                >
                  Get the Free 7-Day Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <AffiliateCta
                  eventName="hero_cta_click"
                  trackingPlacement="hero_video"
                  variant="light"
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
              </div>
              <DisclosureLine className="mt-3" />
            </div>
          ) : null}
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-6 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-3 text-sm sm:grid-cols-3">
            <p>
              <strong className="text-foreground">Independent guide.</strong>{" "}
              Not owned by Shopify.
            </p>
            <p>
              <strong className="text-foreground">Checklist is free.</strong>{" "}
              No email wall to read it.
            </p>
            <p>
              <strong className="text-foreground">
                {config.reviewedLabel}.
              </strong>{" "}
              Clear disclosures beside affiliate links.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <AuthorProfile className="max-w-2xl" />
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 px-4 py-14 sm:px-6 md:py-16"
        >
          <div className="mx-auto max-w-6xl rounded-lg border border-border bg-card p-6 shadow-sm shadow-black/[0.03] md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  About this site
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Built for beginners who want a clear next step
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                <p>{config.aboutBlurb}</p>
                <p>
                  Questions:{" "}
                  <a
                    href={`mailto:${config.contactEmail}`}
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {config.contactEmail}
                  </a>
                  . Need the store built for you?{" "}
                  <Link
                    href="/contact#setup"
                    className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    Paid setup details
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Why beginner Shopify stores stall before the first sale
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                {copy.stall}
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-foreground">
                {copy.stallLine}
              </p>
            </div>
            <div className="mt-10">
              <LoopVideo
                src={media.videoStall.src}
                poster={media.videoStall.poster}
                captions={media.videoStall.captions}
                title={media.videoStall.title}
                caption={media.videoStall.caption}
              />
              <div className="mt-5 flex justify-center">
                <Link
                  href="/checklist"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-95"
                >
                  Open the 7-day plan
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {problems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]"
                  >
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                    <p className="mt-4 border-t border-border pt-4 text-sm leading-6">
                      <strong>Today&apos;s fix:</strong> {item.fix}
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
            <MediaFigure
              src={media.launchPlan.src}
              mobileSrc={media.launchPlan.mobileSrc}
              alt={media.launchPlan.alt}
              caption={media.launchPlan.caption}
              contain
              className="mx-auto mt-10 max-w-5xl"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {content.solution.steps.map((step, index) => {
                const Icon = planIcons[index];
                return (
                  <article
                    key={step.title}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm shadow-black/[0.03]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Day {index + 1}
                      </span>
                      <Icon
                        className="size-5 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 font-semibold leading-6">
                      {step.title.replace(/^Day \d+ — /, "")}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
            <article className="mt-8 grid gap-6 overflow-hidden rounded-xl border-2 border-primary/40 bg-card p-5 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-7">
              <MediaFigure
                src={media.day2.src}
                alt={media.day2.alt}
                caption={media.day2.caption}
                className="max-w-none"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Day 2 · highest-intent step
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Open Shopify and choose a simple theme
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  {copy.day2}
                </p>
                <div className="mt-5">
                  <AffiliateCta
                    eventName="plan_cta_click"
                    trackingPlacement="home_day2"
                    large
                  >
                    {config.shopifyTrialCta}
                  </AffiliateCta>
                </div>
                <DisclosureLine className="mt-3" />
                <Link
                  href="/checklist"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Open the complete checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/start"
                  className="mt-2 block text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  Prefer a one-screen version? Open /start
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Product page example"
              title="Show the product clearly. Make the next action obvious."
              body="A first product page does not need tricks. It needs a useful image, a clear title, an honest price, and one main action."
            />
            <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-card p-3 shadow-[0_24px_80px_var(--card-glow)]">
              {/* eslint-disable-next-line @next/next/no-img-element -- The project explicitly requires semantic img elements for editorial images. */}
              <img
                src="/images/shopify-product-page-example.webp"
                width={1536}
                height={1024}
                alt="Annotated ecommerce product page example highlighting a clear title, honest price, useful product photo, and one main add-to-cart action"
                className="h-auto w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="px-2 pt-3 text-xs leading-5 text-muted-foreground">
                Original illustrative mockup—not a real merchant page, testimonial, or sales result.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-foreground px-4 py-16 text-background sm:px-6 md:py-20 dark:bg-card dark:text-card-foreground">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MediaFigure
              src={media.celebration.src}
              alt={media.celebration.alt}
              caption={media.celebration.caption}
              className="max-w-none [&_figcaption]:text-background/70 dark:[&_figcaption]:text-muted-foreground"
            />
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Ready to turn the checklist into a real store?
              </h2>
              <p className="mt-4 text-base leading-7 text-background/75 dark:text-muted-foreground">
                Open the trial, choose a clean theme, and use the 7-day plan to
                keep the first version moving.
              </p>
              <div className="mt-6">
                <AffiliateCta
                  eventName="plan_cta_click"
                  trackingPlacement="home_ready_to_build"
                  large
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
              </div>
              <p className="mt-3 text-xs leading-5 text-background/65 dark:text-muted-foreground">
                {config.affiliateDisclosureShort}{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="underline-offset-4 hover:underline"
                >
                  Full disclosure
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-lg border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Free worksheets
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                Offer sentence, product-page template, and Day 6 outreach scripts
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Printable templates that sit next to the 7-day plan. No email
                required.
              </p>
            </div>
            <Link
              href="/worksheets"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:brightness-95"
            >
              Open the worksheets
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <LeadCapture />

        <section id="quiz" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Free mini quiz
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                What should I sell first?
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Answer four questions and get a practical starting path. The
                result is shown immediately without an email gate.
              </p>
            </div>
            <div className="mt-10">
              <FirstSaleQuiz />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                How this guide works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Practical guidance without invented testimonials
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Get Your First Sale is an independent beginner resource.
                Recommendations are organised around a complete launch sequence
                and are updated when the site or checklist changes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "The checklist is visible before any affiliate click.",
                "Every Shopify link is labelled as an affiliate link.",
                "The page does not promise sales, revenue, or a winning product.",
                "You can compare Shopify with simpler selling options before deciding.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="comparison"
          className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Fair comparison
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                When Shopify is the useful next step
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Social messages and marketplaces can validate an idea quickly.
                Shopify becomes useful when you want products, checkout,
                customer records, and orders in one commerce-focused system.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                [
                  "Social messages",
                  "Fast for early conversations, but payments, orders, and customer details remain manual.",
                ],
                [
                  "Marketplaces",
                  "Useful when demand already exists, although the marketplace controls more of the customer relationship.",
                ],
                [
                  "Shopify",
                  "A stronger fit when you are ready for a branded store, hosted checkout, product management, and room to grow.",
                ],
              ].map(([title, body], index) => (
                <article
                  key={title}
                  className={`rounded-lg border p-5 ${
                    index === 2
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {body}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <AffiliateCta
                eventName="comparison_cta_click"
                large
              >
                {config.shopifyTrialCta}
              </AffiliateCta>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/55 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Questions
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Beginner FAQ
              </h2>
            </div>
            <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-card">
              {faqItems.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    {item.question}
                    <span className="flex size-6 items-center justify-center rounded-lg border border-border transition-transform group-open:rotate-45">
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
              Ready to build alongside the checklist?
            </h2>
            <p className="mt-5 text-base leading-7 text-background/75 md:text-lg dark:text-muted-foreground">
              Open your Shopify trial, choose a simple theme, and complete one
              focused checklist stage each day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AffiliateCta
                eventName="final_cta_click"
                trackingPlacement="final_primary_trial"
                large
              >
                {config.shopifyTrialCta}
              </AffiliateCta>
              <Link
                href="/checklist"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-card px-6 text-base font-semibold text-card-foreground ring-1 ring-border hover:bg-muted"
              >
                Open the Free Checklist
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-background/65 dark:text-muted-foreground">
              {config.affiliateDisclosureShort}{" "}
              <Link
                href="/affiliate-disclosure"
                className="underline-offset-4 hover:underline"
              >
                Full disclosure
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
