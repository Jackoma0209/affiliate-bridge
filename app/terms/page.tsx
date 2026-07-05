import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Terms | ${config.siteName}`,
  description: "Terms placeholder for Get Your First Sale.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      description="This editable placeholder sets basic expectations for using this independent affiliate guide."
    >
      <p>
        The content on this site is educational and informational. It is not
        financial, legal, tax, or business advice.
      </p>
      <p>
        No earnings, sales, traffic, or business results are guaranteed. Any
        examples are illustrative only, and results vary by product, offer,
        traffic source, pricing, execution, and market conditions.
      </p>
      <p>
        Shopify is a third-party platform. If you start a Shopify trial or
        account, Shopify terms, pricing, policies, and billing rules apply.
      </p>
      <p>
        Replace this placeholder with your final terms before relying on it in
        production.
      </p>
    </LegalPage>
  );
}
