import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { DisclosureLine } from "@/components/disclosure-line";
import { JsonLd } from "@/components/json-ld";
import { MediaFigure } from "@/components/media-figure";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StartChecklistLink } from "@/components/start-checklist-link";
import { config } from "@/config";
import { media } from "@/lib/media";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/structured-data";

const title = "Open Shopify and start Day 2 | Get Your First Sale";
const description =
  "Practical Day 2 for beginners who already have a product: open the trial, pick Dawn, skip the redesign loop. No income promises.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/start" },
  openGraph: {
    title,
    description,
    url: `${config.siteUrl}/start`,
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
    title,
    description,
    images: [media.og.src],
  },
};

const faq = [
  {
    question: "Does this guarantee a sale?",
    answer:
      "No. It gives you a practical Day 2: open Shopify, pick Dawn, and publish a shell. Sales still depend on your product, offer, traffic, and follow-through.",
  },
] as const;

const steps = [
  {
    title: "Write one-sentence offer",
    body: "This product helps [buyer] achieve [outcome] without [objection]. If you cannot finish it, use the checklist Day 1 first.",
  },
  {
    title: "Open the trial and pick Dawn",
    body: "Start Shopify, choose Dawn or another clean free theme, and ignore logos until someone has seen the store.",
  },
  {
    title: "Add a contact page, then stop redesigning",
    body: "Publish contact details and a product page shell. Day 2 ends when a stranger could buy, not when the brand looks finished.",
  },
] as const;

export default function StartPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageJsonLd([...faq]),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Start Day 2", path: "/start" },
          ]),
        ]}
      />
      <SiteHeader />
      <main className="bg-background text-foreground">
        <section className="bg-[image:var(--hero-gradient)] px-4 pt-8 pb-10 sm:px-6 md:py-14">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Free 7-day launch plan · independent guide
              </p>
              <h1 className="mt-3 text-[2rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Have a product and a few hours this week?
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Open Shopify, pick Dawn, publish a shell. Still deciding what to
                sell? Use the checklist first.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <AffiliateCta
                  eventName="start_cta_click"
                  trackingPlacement="start_ready"
                  large
                  className="w-full sm:w-auto"
                >
                  {config.shopifyTrialCta}
                </AffiliateCta>
                <StartChecklistLink className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 text-base font-semibold text-card-foreground shadow-sm transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none sm:w-auto">
                  Get the Free 7-Day Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </StartChecklistLink>
              </div>
              <DisclosureLine className="mt-4" />
            </div>
            <MediaFigure
              src={media.day2.src}
              alt={media.day2.alt}
              caption={media.day2.caption}
              priority
              className="max-w-none"
            />
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Three steps, then stop
            </h2>
            <ol className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Full Day 2 notes:{" "}
              <Link
                href="/checklist#day-2"
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                /checklist#day-2
              </Link>
              . Theme walkthrough:{" "}
              <Link
                href="/shopify-dawn-theme-setup"
                className="font-semibold text-foreground underline-offset-4 hover:underline"
              >
                Dawn setup
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-border bg-muted/55 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">One question</h2>
            {faq.map((item) => (
              <details
                key={item.question}
                className="mt-5 rounded-lg border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {item.question}
                  <CheckCircle2
                    className="size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
