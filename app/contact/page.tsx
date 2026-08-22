import type { Metadata } from "next";

import { AuthorProfile } from "@/components/author-profile";
import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

const title = `Contact ${config.siteName}`;
const description = `Contact ${config.authorName}, author of Get Your First Sale.`;

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: config.authorName,
  description: config.authorBio,
  url: `${config.siteUrl}/contact`,
};

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: config.authorName, url: `${config.siteUrl}/contact` }],
  creator: config.authorName,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: `${config.siteUrl}/contact`,
    siteName: config.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorSchema).replace(/</g, "\\u003c"),
        }}
      />
      <LegalPage
        title={`Contact ${config.authorName}`}
        description="Questions about the site, checklist, affiliate disclosure, or privacy policy can be sent by email."
      >
        <AuthorProfile label="About the author" linkName={false} />
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
    </>
  );
}
