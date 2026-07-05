import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Terms | ${config.siteName}`,
  description: "Terms for using Get Your First Sale.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      description="Basic terms for using this independent beginner guide."
    >
      <h2>Using this site</h2>
      <p>
        By using this site, you agree to use the content for general educational
        and informational purposes. The content is not financial, legal, tax, or
        business advice.
      </p>
      <h2>Independent affiliate guide</h2>
      <p>
        Get Your First Sale is independent from Shopify and is not owned or
        operated by Shopify. Some links are affiliate links, which means this
        site may earn a commission if you start Shopify through those links, at
        no extra cost to you.
      </p>
      <h2>No guaranteed results</h2>
      <p>
        No earnings, sales, traffic, or business results are guaranteed. Any
        examples are illustrative only, and results vary by product, offer,
        traffic source, pricing, execution, and market conditions.
      </p>
      <h2>Third-party services</h2>
      <p>
        Shopify is a third-party platform. If you start a Shopify trial or
        account, Shopify terms, pricing, policies, and billing rules apply.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
