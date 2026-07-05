import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getyourfirstsale.com"),
  title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
  description:
    "Start your Shopify trial and follow a simple 7-day checklist to launch your first online store, choose a product, and start driving your first visitors.",
  openGraph: {
    title: "Get Your First Sale with Shopify | Beginner Store Launch Checklist",
    description:
      "Start your Shopify trial and follow a simple 7-day checklist to launch your first online store, choose a product, and start driving your first visitors.",
    url: "https://getyourfirstsale.com",
    siteName: "Get Your First Sale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
