export const config = {
  siteName: "Get Your First Sale",
  siteUrl: "https://www.getyourfirstsale.com",
  affiliateUrl: "https://shopify.pxf.io/5kqbaL",
  productName: "Shopify",
  price: "Shopify's free trial",
  gaMeasurementId: "G-Y50H3R0QVQ",
  clarityProjectId: "",
  affiliateDisclosure:
    "Disclosure: I may earn a commission if you start Shopify through my link, at no extra cost to you.",
  contactEmail: "hello@getyourfirstsale.com",
} as const;

export type SiteConfig = typeof config;
