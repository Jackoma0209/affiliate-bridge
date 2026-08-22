import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

const title = `Privacy Policy | ${config.siteName}`;
const description = "Privacy policy for Get Your First Sale.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title,
    description,
    url: `${config.siteUrl}/privacy-policy`,
    siteName: config.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
        views, browser type, approximate device information, referring pages,
        campaign parameters, and affiliate link clicks. This helps understand
        which content and traffic sources are useful and whether important calls
        to action work correctly.
      </p>
      <p>
        Campaign attribution such as a UTM source may be stored in your browser
        so that a later checklist or Shopify click can be attributed to the visit
        that introduced you to the site. This value is used for aggregate
        performance reporting and is not intended to identify you personally.
      </p>

      <h2>Email checklist and launch tips</h2>
      <p>
        If you choose to join the email list, the site sends your email address
        and optional first name to MailerLite, the email service used to manage
        the 7-Day Shopify Checklist list and follow-up launch tips. The signup
        also records an opt-in timestamp and may record the IP address associated
        with the signup for consent and abuse-prevention records.
      </p>
      <p>
        Email signup is optional. The checklist can be opened without providing
        an email address. You can unsubscribe from marketing emails using the
        unsubscribe option included in those messages.
      </p>

      <h2>Quiz, analytics, and affiliate links</h2>
      <p>
        The mini quiz runs in your browser and does not submit your answers to a
        backend. Analytics scripts are only loaded when measurement IDs are
        configured. Affiliate links may send you to Shopify through impact.com,
        where their own privacy policies and terms apply.
      </p>

      <h2>Your choices</h2>
      <p>
        You can use browser controls to limit cookies, block scripts, or clear
        local storage. Dark mode preference and basic campaign attribution may be
        stored locally in your browser. You can clear these values through your
        browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact{" "}
        <a href={`mailto:${config.contactEmail}`}>{config.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
