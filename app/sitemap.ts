import type { MetadataRoute } from "next";

import { config } from "@/config";

const routes = [
  "",
  "/checklist",
  "/start",
  "/worksheets",
  "/guides",
  "/shopify-for-beginners",
  "/what-to-sell-on-shopify",
  "/why-my-shopify-store-isnt-getting-sales",
  "/shopify-vs-etsy",
  "/shopify-dawn-theme-setup",
  "/shopify-product-page-template",
  "/shopify-trust-policies",
  "/7-day-shopify-plan-what-usually-happens",
  "/get-first-shopify-visitors",
  "/test-shopify-checkout-on-mobile",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/terms",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${config.contentDateIso}T00:00:00.000Z`);

  return routes.map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/checklist"
          ? 0.9
          : route === "/start"
            ? 0.88
            : route === "/worksheets" || route === "/guides"
            ? 0.85
            : route.startsWith("/shopify") ||
                route.includes("shopify") ||
                route.includes("visitors") ||
                route.includes("checkout") ||
                route.includes("7-day")
              ? 0.8
              : 0.6,
  }));
}
