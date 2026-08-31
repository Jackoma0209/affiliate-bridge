import type { Metadata } from "next";

import { config } from "@/config";
import { media } from "@/lib/media";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

const socialImage = {
  url: media.og.src,
  width: media.og.width,
  height: media.og.height,
  alt: media.og.alt,
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
      site: `@${config.xHandle}`,
      creator: `@${config.xHandle}`,
      title,
      description,
      images: [media.og.src],
    },
  };
}
