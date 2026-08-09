import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { AffiliateCta } from "@/components/affiliate-cta";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

type GuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type RelatedGuide = {
  href: string;
  title: string;
  description: string;
};

type GuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  path: string;
  trackingPlacement: string;
  sections: GuideSection[];
  related: RelatedGuide[];
  ctaTitle?: string;
  ctaText?: string;
  dateModified?: string;
};

export function GuidePage({
  eyebrow,
  title,
  intro,
  description,
  path,
  trackingPlacement,
  sections,
  related,
  ctaTitle = "Ready to put this into practice?",
  ctaText = "Use the free checklist first, then open Shopify when you are ready to build.",
  dateModified = "2026-08-09",
}: GuidePageProps) {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title,
            description,
            path,
            dateModified,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: title, path },
          ]),
        ]}
      />
      <SiteHeader />
      <main className="bg-background pb-24 text-foreground md:pb-0">
        <article>
          <header className="bg-[image:var(--hero-gradient)] px-4 py-14 sm:px-6 md:py-20">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                {intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/checklist"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_16px_38px_var(--card-glow)] hover:brightness-95"
                >
                  Get the Free 7-Day Checklist
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <AffiliateCta
                  eventName="guide_cta_click"
                  trackingPlacement={`${trackingPlacement}top`}
                  large
                  variant="dark"
                >
                  Start My Shopify Trial
                </AffiliateCta>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                {config.reviewedLabel}. {config.affiliateDisclosure} Results
                vary; this guide does not guarantee sales or income.
              </p>
            </div>
          </header>

          <div className="px-4 py-14 sm:px-6 md:py-20">
            <div className="mx-auto max-w-3xl space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-8 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base leading-7 text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-1 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </article>

        <section className="border-y border-border bg-muted/55 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Related beginner guides
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <h3 className="font-semibold text-card-foreground">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read guide{" "}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-foreground px-4 py-14 text-background sm:px-6 md:py-20 dark:bg-card dark:text-card-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-background/75 dark:text-muted-foreground">
              {ctaText}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/checklist"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-semibold text-primary-foreground hover:brightness-95"
              >
                Open the Free Checklist
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <AffiliateCta
                eventName="guide_cta_click"
                trackingPlacement={`${trackingPlacement}bottom`}
                large
                variant="light"
              >
                Start My Shopify Trial
              </AffiliateCta>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
