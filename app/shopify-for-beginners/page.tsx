import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "Shopify for Beginners: A Practical First-Store Guide";
const description =
  "A practical Shopify beginner guide covering product choice, store setup, product pages, checkout, trust, traffic, and what to measure first.";
const path = "/shopify-for-beginners";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/what-to-sell-on-shopify",
    title: "What to Sell on Shopify",
    description: "Narrow a broad idea into a product you can actually test.",
  },
  {
    href: "/shopify-product-page-template",
    title: "Product page template",
    description: "Turn the offer sentence into a first-screen, contents, and FAQ page.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Diagnose traffic, offer, trust, and checkout problems in the right order.",
  },
];

export default function ShopifyForBeginnersPage() {
  return (
    <GuidePage
      eyebrow="Shopify beginner guide"
      title="Shopify for Beginners: What to Do Before You Worry About Your First Sale"
      intro="A first store does not need dozens of apps, a perfect logo, or a complicated funnel. It needs one clear offer, a trustworthy buying path, and enough relevant visitors to learn what is working."
      description={description}
      path={path}
      trackingPlacement="beginnerguide"
      related={related}
      sections={[
        {
          title: "1. Start with one buyer and one problem",
          paragraphs: [
            "The easiest beginner mistake is trying to build a general store for everyone. A narrower first offer is easier to explain, easier to create content for, and easier to evaluate when people visit.",
            "Before opening Shopify, write one sentence describing who the product is for, the outcome they want, and the main reason they might hesitate. You can change the idea later; the goal is to begin with something testable.",
            "Example template: This product helps [specific buyer] achieve [clear outcome] without [main objection]. If you cannot finish that sentence, the store will feel vague no matter how good the theme looks.",
          ],
          bullets: [
            "Choose one audience instead of several unrelated customer types.",
            "Choose one problem, desire, or job the product helps with.",
            "Choose the simplest offer you can explain and fulfil.",
            "Write the offer sentence before you touch theme settings.",
          ],
        },
        {
          title: "2. Build the minimum trustworthy store",
          paragraphs: [
            "A beginner store should be complete enough to buy from, not endlessly polished. Use a clean theme, readable navigation, accurate product information, and obvious contact details.",
            "Day 2 of a practical launch week is usually when you open Shopify, pick a simple theme, and create the shell of the store. Do not spend the entire day renaming the brand or comparing logo fonts.",
          ],
          bullets: [
            "Create a focused home page and product page.",
            "Add contact, delivery, returns, privacy, and terms information.",
            "Check every important page on a phone before launch.",
            "Avoid installing apps unless they solve a problem you already have.",
            "Use a temporary working store name if branding is blocking progress.",
          ],
        },
        {
          title: "3. Make the product page answer buying questions",
          paragraphs: [
            "A product page should help someone decide, not simply repeat supplier specifications. Explain what the product is, who it is for, what changes for the buyer, what they receive, how delivery works, and what happens if they need to return it.",
            "Lead with the outcome, then support it with details. Visitors scan first. If the top of the page only shows a brand slogan, they may leave before reading the useful information below.",
          ],
          bullets: [
            "Lead with the buyer benefit, then support it with details.",
            "Use accurate images and avoid fake reviews or invented scarcity.",
            "State the price, delivery expectation, and return position clearly.",
            "Give the page one obvious primary action.",
            "Answer the three questions buyers almost always have: what is it, who is it for, and why trust this store.",
          ],
        },
        {
          title: "4. Test checkout before sending traffic",
          paragraphs: [
            "A store can look good and still lose a buyer because shipping, payment, mobile layout, or policy information is confusing. Run through the complete buyer journey before asking people to visit.",
            "Do this on a real phone, not only a desktop browser resize. Many first stores lose intended customers on mobile friction that the owner never saw.",
          ],
          bullets: [
            "Add a product to cart and move through checkout on desktop and mobile.",
            "Verify shipping zones, rates, payment methods, and confirmation steps.",
            "Check that important policy and contact links are easy to find.",
            "Fix broken placeholders, dummy text, and incomplete product options.",
          ],
        },
        {
          title: "5. Get relevant visitors, not just more visitors",
          paragraphs: [
            "Your first traffic test is about learning. Pick one channel where the intended buyer already spends time and create useful content or conversations there. A small number of relevant visitors can teach you more than a large burst of unrelated traffic.",
            "Warm audiences (people who already know you) are useful for early feedback. Public channels are useful when you need people who match the buyer description more closely.",
          ],
          bullets: [
            "Choose one channel for the first test instead of posting everywhere.",
            "Create useful content around the problem, not just the product link.",
            "Ask early visitors what was unclear or made them hesitate.",
            "Aim for relevance first: 25 targeted people often beat 250 random clicks.",
          ],
        },
        {
          title: "6. Measure the stage that is actually failing",
          paragraphs: [
            "If nobody visits, you have a traffic problem. If people visit but never interact with the offer, investigate relevance and the product page. If people add to cart but do not continue, inspect checkout friction, delivery cost, trust, and payment options.",
            "Change one meaningful thing at a time so you can learn from the result. A beginner does not need perfect analytics; you need enough evidence to choose the next sensible action.",
          ],
          bullets: [
            "Visitors: do the right people arrive?",
            "Engagement: do they understand the offer?",
            "Cart: do they want it enough to take a next step?",
            "Checkout: can they finish without avoidable friction?",
          ],
        },
        {
          title: "7. A simple first-week sequence",
          paragraphs: [
            "If you want a structured path, use a day-by-day plan: one product idea, open the store, product page, payments and policies, trust and checkout test, first visitors, then review. That sequence is more useful than watching another general course without publishing anything.",
            "Open the free checklist when you want the full task list. Open a Shopify trial when you are ready to build the store—usually after you can describe the buyer and the offer clearly.",
          ],
          bullets: [
            "Day 1: one buyer, one problem, one offer sentence.",
            "Day 2: open Shopify and set up the store shell.",
            "Days 3–5: product page, policies, trust, checkout test.",
            "Days 6–7: targeted traffic and one evidence-based improvement.",
          ],
        },
      ]}
    />
  );
}
