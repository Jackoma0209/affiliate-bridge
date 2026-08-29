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

        <h2 id="setup">Paid first-store setup</h2>
        <p>
          If you already have a product and want the store shell, product page,
          policies, and a working checkout path set up for you, email with the
          subject line <strong>SETUP</strong>. Include the product, who it is
          for, and your deadline. This is paid work, independent from Shopify,
          and separate from the free checklist.
        </p>
        <p>
          <a
            href={`mailto:${config.contactEmail}?subject=SETUP%20%E2%80%94%20first%20store&body=Product%3A%0AAudience%3A%0ADeadline%3A%0AWhat%20you%20need%20built%3A%0A`}
          >
            Email a SETUP request
          </a>
        </p>

        <h2>Shopify account problems</h2>
        <p>
          Get Your First Sale is not owned or operated by Shopify. If your
          question is about a Shopify account, billing, an app, an order, or
          technical support, contact Shopify through its official support
          channels.
        </p>
        <p>
          This site may earn a commission if visitors start Shopify through
          affiliate links, at no extra cost to them.
        </p>
      </LegalPage>
    </>
  );
}
