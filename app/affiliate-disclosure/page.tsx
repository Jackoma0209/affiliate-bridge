import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${config.siteName}`,
  description:
    "Affiliate disclosure for Get Your First Sale, an independent Shopify affiliate guide.",
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      description="This page explains how affiliate links work on Get Your First Sale."
    >
      <p>
        Get Your First Sale is an independent website. Some links on this site
        are affiliate links, which means I may earn a commission if you start
        Shopify through my link, at no extra cost to you. I only recommend tools
        that may be useful for beginners, but results vary and your outcome
        depends on your product, offer, traffic, effort, and market.
      </p>
      <p>
        Get Your First Sale is not owned by Shopify, operated by Shopify, or
        presented as an official Shopify resource. Shopify is a third-party
        platform with its own terms, pricing, billing, and policies.
      </p>
      <p>
        Affiliate compensation does not change the price you pay. Links are
        selected for relevance to the beginner store-launch topic, not because
        they guarantee any specific sales, profit, or business outcome.
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
