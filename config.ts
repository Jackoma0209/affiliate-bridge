export const config = {
  siteName: "Get Your First Sale",
  siteUrl: "https://www.getyourfirstsale.com",
  authorName: "Jack",
  authorBio:
    "Independent Shopify guide for beginners. No courses, no fake income claims.",
  authorImagePath: null as string | null,
  lastUpdated: "29 Aug 2026",
  affiliateUrl: "https://shopify.pxf.io/5kqbaL",
  productName: "Shopify",
  shopifyTrialOffer: "3 days free, then $1/month",
  shopifyTrialCta: "Start my Shopify trial (3 days free → $1/month)",
  gaMeasurementId: "G-Y50H3R0QVQ",
  // Paste your Microsoft Clarity project ID (clarity.microsoft.com) to enable heatmaps.
  clarityProjectId: "",
  affiliateDisclosure:
    "Disclosure: I'm a Shopify affiliate and may earn a commission if you start Shopify through my link, at no extra cost to you.",
  affiliateDisclosureShort:
    "Affiliate link — commission at no extra cost to you.",
  contactEmail: "getyourfirstsale@gmail.com",
  xHandle: "getyour1stsale",
  xUrl: "https://x.com/getyour1stsale",
  reviewedLabel: "Updated 29 Aug 2026 by Jack",
  contentDateIso: "2026-08-29",
  aboutBlurb:
    "Get Your First Sale is an independent beginner resource built to replace vague Shopify advice with a practical launch sequence: one offer, a trustworthy store, a tested checkout, and a small traffic experiment. No fake testimonials, no income promises—just a clearer next step each day.",
} as const;

export type SiteConfig = typeof config;
