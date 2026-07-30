import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Why Is My Shopify Store Not Getting Sales? A Diagnostic Guide",
  description:
    "Diagnose a Shopify store with no sales by checking traffic, offer relevance, product page clarity, trust, checkout friction, and analytics in order.",
  path: "/why-my-shopify-store-isnt-getting-sales",
});

const related = [
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "Build the essential store foundation before trying to scale traffic.",
  },
  {
    href: "/what-to-sell-on-shopify",
    title: "What to Sell on Shopify",
    description: "Check whether the product and buyer are focused enough to test.",
  },
  {
    href: "/shopify-vs-etsy",
    title: "Shopify vs Etsy for Beginners",
    description: "Compare a standalone store with a marketplace that already has shopper demand.",
  },
];

export default function NoSalesGuidePage() {
  return (
    <GuidePage
      eyebrow="Store diagnosis"
      title="Why Is My Shopify Store Not Getting Sales? Check These Problems in Order"
      intro="No sales is not one diagnosis. A store can fail because too few relevant people visit, the offer is weak, the page creates doubt, or checkout introduces friction. Work from the top of the funnel down instead of redesigning everything at once."
      trackingPlacement="nosalesguide"
      related={related}
      sections={[
        {
          title: "1. Confirm you have enough relevant traffic to judge anything",
          paragraphs: [
            "If only a handful of people have seen the store, there may not be enough evidence to call the page a conversion problem. Start by checking visitor volume and where those visitors came from.",
            "Traffic quality matters as much as quantity. People arriving from a broad viral post can behave very differently from people actively looking for the problem your product solves.",
          ],
          bullets: [
            "Check how many visitors actually reached the product page.",
            "Separate relevant traffic sources from accidental or low-intent visits.",
            "If traffic is tiny, improve distribution before rewriting the whole store.",
          ],
        },
        {
          title: "2. Check whether the offer makes sense immediately",
          paragraphs: [
            "A visitor should quickly understand what the product is, who it is for, and why it is useful. If the first screen is mostly branding language, vague lifestyle copy, or generic supplier text, the buyer may leave before considering the offer.",
          ],
          bullets: [
            "State the main outcome or use case near the top of the page.",
            "Make the price and primary action easy to find.",
            "Remove claims you cannot support and clarify what the buyer receives.",
          ],
        },
        {
          title: "3. Look for trust gaps",
          paragraphs: [
            "A new store asks a stranger to trust an unfamiliar business with money, contact details, and delivery expectations. Missing basic information can be enough to stop a purchase even when the product is appealing.",
          ],
          bullets: [
            "Make contact information easy to find.",
            "Explain shipping, returns, and refunds in plain language.",
            "Use accurate product images and factual proof rather than fake testimonials.",
            "Check spelling, broken links, inconsistent prices, and unfinished placeholder content.",
          ],
        },
        {
          title: "4. Inspect the cart and checkout journey",
          paragraphs: [
            "If visitors interact with the product but disappear later, the problem may be downstream. Unexpected shipping costs, unavailable payment methods, confusing delivery times, or mobile issues can kill intent late in the process.",
          ],
          bullets: [
            "Run a full checkout test on a phone and desktop.",
            "Check shipping cost and delivery timing before the final payment step where possible.",
            "Verify payment methods and remove unnecessary distractions from the purchase path.",
          ],
        },
        {
          title: "5. Match the fix to the behaviour",
          paragraphs: [
            "Different behaviour points to different problems. Low visitor numbers call for better distribution. Visits with almost no product engagement call for offer or audience work. Add-to-cart activity with weak checkout progression points toward trust, delivery, price, or checkout friction.",
          ],
          bullets: [
            "No visitors: fix traffic.",
            "Visitors but little engagement: fix audience match or product-page clarity.",
            "Product engagement but no cart activity: revisit offer, price, proof, and objections.",
            "Cart activity but no purchase: inspect shipping, trust, payment, and checkout.",
          ],
        },
        {
          title: "6. Change one meaningful thing at a time",
          paragraphs: [
            "If you change the theme, price, product images, traffic source, and offer at the same time, you will not know what caused the result. Pick the most likely bottleneck, make one meaningful improvement, and send another relevant traffic sample through the store.",
            "A first sale is useful evidence, but one order does not prove a repeatable business. Keep learning from behaviour instead of treating any single result as a guarantee.",
          ],
        },
      ]}
    />
  );
}
