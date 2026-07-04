// Paste your Impact affiliate link from the Shopify Affiliate Program dashboard
export const config = {
  affiliateUrl: "https://shopify.pxf.io/5kqbaL",
  productName: "Shopify",
  price: "Start free — plans from $39/mo",
} as const;

export type SiteConfig = typeof config;