// Paste your affiliate values here — everything else pulls from content.ts
export const config = {
  affiliateUrl: "https://your-affiliate-link.com",
  productName: "[PRODUCT NAME]",
  price: "[PRICE]",
} as const;

export type SiteConfig = typeof config;