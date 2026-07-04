import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch Your Shopify Store This Weekend — Start Free",
  description:
    "Stop failing at side hustles. Launch a real Shopify store in one weekend — free trial, no tech skills, cancel anytime.",
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