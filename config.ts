export const config = {
  siteName: "Get Your First Sale",
  siteUrl: "https://www.getyourfirstsale.com",
  affiliateUrl: "https://shopify.pxf.io/5kqbaL",
  productName: "Shopify",
  price: "Shopify's free trial",
  gaMeasurementId: "G-Y50H3R0QVQ",
  // Paste your Microsoft Clarity project ID (clarity.microsoft.com) to enable heatmaps.
  clarityProjectId: "",
  affiliateDisclosure:
    "Disclosure: I'm a Shopify affiliate and may earn a commission if you start Shopify through my link, at no extra cost to you.",
  contactEmail: "getyourfirstsale@gmail.com",
  reviewedLabel: "Reviewed August 2026",
  aboutBlurb:
    "Get Your First Sale is an independent beginner resource built to replace vague Shopify advice with a practical launch sequence: one offer, a trustworthy store, a tested checkout, and a small traffic experiment. No fake testimonials, no income promises—just a clearer next step each day.",
} as const;

export type SiteConfig = typeof config;
