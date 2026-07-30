import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Shopify for Beginners: A Practical First-Store Guide",
  description:
    "A practical Shopify beginner guide covering product choice, store setup, product pages, checkout, trust, traffic, and what to measure first.",
  path: "/shopify-for-beginners",
});

const related = [
  {
    href: "/what-to-sell-on-shopify",
    title: "What to Sell on Shopify",
    description: "Narrow a broad idea into a product you can actually test.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Diagnose traffic, offer, trust, and checkout problems in the right order.",
  },
  {
    href: "/shopify-vs-etsy",
    title: "Shopify vs Etsy for Beginners",
    description: "Compare ownership, demand, setup, and where each option fits.",
  },
];

export default function ShopifyForBeginnersPage() {
  return (
    <GuidePage
      eyebrow="Shopify beginner guide"
      title="Shopify for Beginners: What to Do Before You Worry About Your First Sale"
      intro="A first store does not need dozens of apps, a perfect logo, or a complicated funnel. It needs one clear offer, a trustworthy buying path, and enough relevant visitors to learn what is working."
      trackingPlacement="beginnerguide"
      related={related}
      sections={[
        {
          title: "1. Start with one buyer and one problem",
          paragraphs: [
            "The easiest beginner mistake is trying to build a general store for everyone. A narrower first offer is easier to explain, easier to create content for, and easier to evaluate when people visit.",
            "Before opening Shopify, write one sentence describing who the product is for, the outcome they want, and the main reason they might hesitate. You can change the idea later; the goal is to begin with something testable.",
          ],
          bullets: [
            "Choose one audience instead of several unrelated customer types.",
            "Choose one problem, desire, or job the product helps with.",
            "Choose the simplest offer you can explain and fulfil.",
          ],
        },
        {
          title: "2. Build the minimum trustworthy store",
          paragraphs: [
            "A beginner store should be complete enough to buy from, not endlessly polished. Use a clean theme, readable navigation, accurate product information, and obvious contact details.",
          ],
          bullets: [
            "Create a focused home page and product page.",
            "Add contact, delivery, returns, privacy, and terms information.",
            "Check every important page on a phone before launch.",
            "Avoid installing apps unless they solve a problem you already have.",
          ],
        },
        {
          title: "3. Make the product page answer buying questions",
          paragraphs: [
            "A product page should help someone decide, not simply repeat supplier specifications. Explain what the product is, who it is for, what changes for the buyer, what they receive, how delivery works, and what happens if they need to return it.",
          ],
          bullets: [
            "Lead with the buyer benefit, then support it with details.",
            "Use accurate images and avoid fake reviews or invented scarcity.",
            "State the price, delivery expectation, and return position clearly.",
            "Give the page one obvious primary action.",
          ],
        },
        {
          title: "4. Test checkout before sending traffic",
          paragraphs: [
            "A store can look good and still lose a buyer because shipping, payment, mobile layout, or policy information is confusing. Run through the complete buyer journey before asking people to visit.",
          ],
          bullets: [
            "Add a product to cart and move through checkout on desktop and mobile.",
            "Verify shipping zones, rates, payment methods, and confirmation steps.",
            "Check that important policy and contact links are easy to find.",
          ],
        },
        {
          title: "5. Get relevant visitors, not just more visitors",
          paragraphs: [
            "Your first traffic test is about learning. Pick one channel where the intended buyer already spends time and create useful content or conversations there. A small number of relevant visitors can teach you more than a large burst of unrelated traffic.",
          ],
          bullets: [
            "Choose one channel for the first test instead of posting everywhere.",
            "Create useful content around the problem, not just the product link.",
            "Ask early visitors what was unclear or made them hesitate.",
          ],
        },
        {
          title: "6. Measure the stage that is actually failing",
          paragraphs: [
            "If nobody visits, you have a traffic problem. If people visit but never interact with the offer, investigate relevance and the product page. If people add to cart but do not continue, inspect checkout friction, delivery cost, trust, and payment options.",
            "Change one meaningful thing at a time so you can learn from the result. A beginner does not need perfect analytics; you need enough evidence to choose the next sensible action.",
          ],
        },
      ]}
    />
  );
}
