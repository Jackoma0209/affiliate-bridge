import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { AnalyticsScripts } from "@/components/analytics-scripts";
import { config } from "@/config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
  description:
    "Build a sale-ready Shopify store with a practical 7-day checklist covering product choice, trust, checkout, and your first targeted visitors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
    description:
      "Build a sale-ready Shopify store with a practical 7-day checklist covering product choice, trust, checkout, and your first targeted visitors.",
    url: config.siteUrl,
    siteName: "Get Your First Sale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
    description:
      "Build a sale-ready Shopify store with a practical 7-day checklist covering product choice, trust, checkout, and your first targeted visitors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
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
