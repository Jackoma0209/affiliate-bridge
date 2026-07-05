import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { config } from "@/config";

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${config.siteName}`,
  description:
    "Affiliate disclosure for Get Your First Sale, an independent Shopify affiliate guide.",
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      description="This page explains how affiliate links work on Get Your First Sale."
    >
      <p>{config.affiliateDisclosure}</p>
      <p>
        Some links on this site may be affiliate links. If you click one of
        those links and start Shopify, I may receive a commission. This does not
        increase your cost.
      </p>
      <p>
        Get Your First Sale is independent from Shopify. I do not work for
        Shopify, and this site is not owned, operated, or endorsed by Shopify.
      </p>
      <p>
        Results vary. The checklist and educational content on this site are not
        earnings guarantees. Your results depend on your product, offer, traffic,
        pricing, execution, and other factors.
      </p>
    </LegalPage>
  );
}
