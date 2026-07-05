import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { config } from "@/config";

export function LegalPage({
  title,
  description,
  lastUpdated = "July 5, 2026",
  children,
}: {
  title: string;
  description: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background px-4 py-12 text-foreground sm:px-6 md:py-16">
        <article className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-6 shadow-[0_24px_80px_var(--card-glow)] sm:p-8">
          <Link
            href="/"
            className="text-sm font-semibold text-primary hover:brightness-90 focus-visible:ring-4 focus-visible:ring-primary/25 focus-visible:outline-none"
          >
            Back to {config.siteName}
          </Link>
          <p className="mt-8 text-sm font-medium text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          <div className="mt-10 space-y-7 text-base leading-7 text-card-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:hover:brightness-90 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
