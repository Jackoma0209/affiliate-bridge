import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Contact | ${config.siteName}`,
  description: "Contact Get Your First Sale.",
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      description="Questions about the site, checklist, affiliate disclosure, or privacy policy can be sent by email."
    >
      <p>
        Email:{" "}
        <a
          href={`mailto:${config.contactEmail}`}
          className="font-semibold text-emerald-700 hover:text-emerald-800"
        >
          {config.contactEmail}
        </a>
      </p>
      <p>
        Get Your First Sale is an independent website and is not owned or
        operated by Shopify. If your question is about a Shopify account, billing
        issue, app, order, or technical support request, contact Shopify directly
        through its official support channels.
      </p>
      <p>
        This site may earn a commission if visitors start Shopify through
        affiliate links, at no extra cost to them. Results vary, and this site
        does not guarantee sales, traffic, revenue, or business outcomes.
      </p>
    </LegalPage>
  );
}
