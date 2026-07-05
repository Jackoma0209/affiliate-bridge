import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${config.siteName}`,
  description: "Privacy policy for Get Your First Sale.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="A plain-language summary of how this independent affiliate site handles visitor information."
    >
      <h2>Overview</h2>
      <p>
        Get Your First Sale is independent from Shopify and is not owned or
        operated by Shopify. This site provides educational content and may earn
        a commission if you start Shopify through an affiliate link, at no extra
        cost to you.
      </p>
      <h2>Information this site may process</h2>
      <p>
        This site may process basic technical and usage information, such as page
        views, browser type, approximate device information, referring pages, and
        affiliate link clicks. This helps understand whether the content is useful
        and whether important calls to action work correctly.
      </p>
      <p>
        The mini quiz runs in your browser and does not submit answers to a
        backend. The current checklist request section uses a mailto fallback,
        so no form details are stored by this website unless you choose to send
        an email.
      </p>
      <h2>Analytics and affiliate links</h2>
      <p>
        Analytics scripts are only loaded when measurement IDs are configured.
        Affiliate links may send you to Shopify or an affiliate tracking partner,
        where their own privacy policies and terms apply.
      </p>
      <h2>Your choices</h2>
      <p>
        You can use browser controls to limit cookies, block scripts, or clear
        local storage. Dark mode preference is stored locally in your browser so
        the site can remember your selected theme.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
