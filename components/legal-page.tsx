import Link from "next/link";
import type { ReactNode } from "react";

import { config } from "@/config";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-slate-950 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Back to {config.siteName}
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-10 space-y-7 text-base leading-7 text-slate-700">
          {children}
        </div>
      </article>
    </main>
  );
}
