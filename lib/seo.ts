import type { Metadata } from "next";

import { config } from "@/config";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

const socialImage = {
  url: `${config.siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Get Your First Sale — practical Shopify launch guidance for beginners",
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${config.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: config.siteName,
      type: "article",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${config.siteUrl}/twitter-image`],
    },
  };
}
