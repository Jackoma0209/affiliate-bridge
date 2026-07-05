import type { Metadata } from "next";
import Script from "next/script";

import { AnalyticsScripts } from "@/components/analytics-scripts";
import { config } from "@/config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
  description:
    "Start your Shopify trial and follow a simple 7-day checklist to launch your first online store, choose a product, and start driving your first visitors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
    description:
      "Start your Shopify trial and follow a simple 7-day checklist to launch your first online store, choose a product, and start driving your first visitors.",
    url: config.siteUrl,
    siteName: "Get Your First Sale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
    description:
      "Start your Shopify trial and follow a simple 7-day checklist to launch your first online store, choose a product, and start driving your first visitors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full overflow-x-hidden font-sans">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored === 'light' || stored === 'dark' ? stored : (systemDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (error) {}
            })();
          `}
        </Script>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
