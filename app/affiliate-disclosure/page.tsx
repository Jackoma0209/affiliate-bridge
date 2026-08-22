import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

const title = `Affiliate Disclosure | ${config.siteName}`;
const description =
  "Affiliate disclosure for Get Your First Sale, an independent Shopify affiliate guide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/affiliate-disclosure",
  },
  openGraph: {
    title,
    description,
    url: `${config.siteUrl}/affiliate-disclosure`,
    siteName: config.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      description="This page explains how affiliate links work on Get Your First Sale."
    >
      <p>
        I am a Shopify affiliate. That means some Shopify links on Get Your First
        Sale are affiliate tracking links and I may earn a commission if you start
        Shopify through one of those links, at no extra cost to you.
      </p>
      <p>
        Get Your First Sale is an independent website. It is not owned by Shopify,
        operated by Shopify, or presented as an official Shopify resource. Shopify
        is a third-party platform with its own terms, pricing, billing, and policies.
      </p>
      <p>
        Affiliate compensation does not change the price you pay. Links are
        selected for relevance to the beginner store-launch topic, not because
        they guarantee any specific sales, profit, or business outcome. Results
        depend on factors including your product, offer, traffic, pricing, execution,
        and market.
      </p>
      <p>
        The checklist and educational content on this site are for general
        information only. They are not financial, legal, tax, or business advice.
        For questions about this disclosure, contact{" "}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
