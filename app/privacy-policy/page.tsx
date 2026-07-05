import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${config.siteName}`,
  description: "Privacy policy placeholder for Get Your First Sale.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This editable placeholder should be reviewed and updated for your final tracking, forms, and data practices."
    >
      <p>
        This site may collect basic analytics information, such as page views and
        affiliate link clicks, to understand how visitors use the page. If you add
        analytics, pixels, email forms, cookies, or downloads later, update this
        policy before publishing those changes.
      </p>
      <p>
        The current mini quiz runs in the browser and does not submit answers to
        a backend. Affiliate links send visitors to Shopify or its affiliate
        tracking partners.
      </p>
      <p>
        For privacy questions, contact {config.contactEmail}. Replace this text
        with your full legal privacy policy before relying on it in production.
      </p>
    </LegalPage>
  );
}
