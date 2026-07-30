import type { MetadataRoute } from "next";

import { config } from "@/config";

const routes = [
  "",
  "/checklist",
  "/shopify-for-beginners",
  "/what-to-sell-on-shopify",
  "/why-my-shopify-store-isnt-getting-sales",
  "/shopify-vs-etsy",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/terms",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30T00:00:00.000Z");

  return routes.map((route) => ({
    url: `${config.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/checklist"
          ? 0.9
          : route.startsWith("/shopify") || route.includes("shopify")
            ? 0.8
            : 0.6,
  }));
}
