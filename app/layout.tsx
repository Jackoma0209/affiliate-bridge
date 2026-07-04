import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Your First Sale — Launch Your Shopify Store This Weekend",
  description:
    "Get Your First Sale helps beginners launch a real Shopify store in one weekend — free trial, no tech skills, cancel anytime.",
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