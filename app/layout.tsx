import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Your First Sale — Launch a Real Shopify Store This Weekend",
  description:
    "Stop failing at side hustles. Launch a professional Shopify store in one weekend — free trial, zero tech skills, first sale in as little as 12 days.",
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