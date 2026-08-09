import { config } from "@/config";

type FaqItem = {
  question: string;
  answer: string;
};

type HowToStep = {
  name: string;
  text: string;
};

type ArticleInput = {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.siteName,
    url: config.siteUrl,
    email: config.contactEmail,
    description:
      "Independent beginner resource for launching a first Shopify store with a practical checklist.",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.siteName,
    url: config.siteUrl,
    description:
      "Practical Shopify launch checklist, guides, and first-store advice for beginners.",
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      url: config.siteUrl,
    },
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToJsonLd({
  name,
  description,
  path,
  steps,
}: {
  name: string;
  description: string;
  path: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${config.siteUrl}${path}`,
    totalTime: "P7D",
    supply: [
      {
        "@type": "HowToSupply",
        name: "A product or service idea",
      },
      {
        "@type": "HowToSupply",
        name: "Shopify free trial (optional until Day 2)",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Shopify store admin",
      },
    ],
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${config.siteUrl}${path}#day-${index + 1}`,
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished = "2026-07-30",
  dateModified = "2026-08-09",
}: ArticleInput) {
  const url = `${config.siteUrl}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: config.siteName,
      url: config.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: config.siteName,
      url: config.siteUrl,
    },
    isAccessibleForFree: true,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${config.siteUrl}${item.path}`,
    })),
  };
}
