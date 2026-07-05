"use client";

import { AffiliateCta } from "@/components/affiliate-cta";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto max-w-sm">
        <AffiliateCta
          eventName="sticky_cta_click"
          className="min-h-11 w-full"
          showIcon={false}
        >
          Start Free
        </AffiliateCta>
        <p className="mt-1 text-center text-xs font-medium text-slate-500">
          Affiliate link · no extra cost
        </p>
      </div>
    </div>
  );
}
