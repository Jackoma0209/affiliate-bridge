import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "Shopify vs Etsy for Beginners: Which Should You Start With?";
const description =
  "Compare Shopify and Etsy for beginners across audience ownership, built-in demand, setup, branding, fees, testing, and when each option makes sense.";
const path = "/shopify-vs-etsy";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "See the minimum setup needed for a useful first Shopify test.",
  },
  {
    href: "/what-to-sell-on-shopify",
    title: "What to Sell on Shopify",
    description: "Choose a focused product idea before building the storefront.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Diagnose what is failing after traffic starts arriving.",
  },
];

export default function ShopifyVsEtsyPage() {
  return (
    <GuidePage
      eyebrow="Platform comparison"
      title="Shopify vs Etsy for Beginners: Start Where Your First Test Is Easiest"
      intro="Shopify and Etsy solve different problems. Etsy can put an offer inside an established marketplace, while Shopify gives you more control over a standalone store and customer journey. The better first choice depends on what you sell and how you plan to reach buyers."
      description={description}
      path={path}
      trackingPlacement="shopifyetsy"
      related={related}
      sections={[
        {
          title: "The simplest difference",
          paragraphs: [
            "Etsy is a marketplace: shoppers are already on the platform looking across many sellers. Shopify is a commerce platform for running your own store: you control more of the storefront, brand, navigation, and customer journey, but you are also more responsible for bringing people to it.",
            "Neither option removes the need for a clear offer. A weak product page fails on both platforms. The difference is where discovery happens and how much of the customer relationship you own.",
          ],
        },
        {
          title: "Side-by-side comparison for beginners",
          paragraphs: [
            "Use this as a decision aid, not a ranking of which platform is universally better. Fees, policies, and features change—verify current details before you commit.",
          ],
          bullets: [
            "Discovery: Etsy has built-in marketplace browsing; Shopify relies more on your traffic sources.",
            "Branding: Shopify gives a dedicated branded storefront; Etsy listings sit inside the marketplace experience.",
            "Customer relationship: Shopify keeps more of the journey on your site; marketplaces often own more of the shopping habit.",
            "Setup speed: Etsy can be faster if your product already fits marketplace norms; Shopify needs a store shell, policies, and traffic plan.",
            "Control: Shopify usually offers more control over presentation, content, and checkout experience.",
            "Competition: Etsy places you beside many similar listings; Shopify competition is more about winning attention off-platform.",
          ],
        },
        {
          title: "When Etsy can be the easier first validation test",
          paragraphs: [
            "If the product naturally fits marketplace shopping behaviour and you want to test whether people respond to the offer before building a standalone acquisition system, a marketplace can reduce some of the early distribution burden.",
          ],
          bullets: [
            "You sell products that fit the marketplace audience and rules.",
            "You want to learn from existing shopper demand.",
            "You are comfortable competing beside other listings and operating within marketplace policies.",
            "Your first unknown is demand, not branded store ownership.",
          ],
        },
        {
          title: "When Shopify becomes more useful",
          paragraphs: [
            "Shopify is a stronger fit when you want a dedicated branded storefront, control over navigation and product presentation, a hosted checkout, and a commerce system you can build your own traffic strategy around.",
            "It is also useful when you already have an audience, a content plan, partnerships, or another way to send relevant people to a store you control.",
          ],
          bullets: [
            "You want customers to interact with your own store rather than a shared marketplace.",
            "You want more control over product presentation, content, and the purchase journey.",
            "You are prepared to create or acquire your own traffic instead of relying mainly on marketplace discovery.",
            "You need products, orders, and customer records in one commerce-focused system.",
          ],
        },
        {
          title: "Do not choose on fees alone",
          paragraphs: [
            "Platform costs matter, but they are only one part of the decision. A cheaper platform that gives you no useful path to customers can be more expensive in practice, while a higher-cost setup is not automatically better if you have not validated the offer.",
            "Compare current platform pricing and policies directly before committing, because fees and plan structures can change. Then weigh those costs against the type of traffic, control, and workflow you actually need.",
          ],
        },
        {
          title: "A practical beginner decision rule",
          paragraphs: [
            "If your main uncertainty is whether marketplace shoppers want the product, a marketplace test may be useful. If you already know how you want to reach customers and you need a dedicated branded buying experience, Shopify may be the clearer next step.",
          ],
          bullets: [
            "Choose the platform that makes the biggest unknown easier to test.",
            "Do not build two complicated stores at once just to avoid making a decision.",
            "Keep product, message, and audience consistent enough that you can learn from the result.",
            "If Shopify is the path, open a simple trial only when you are ready to build—then follow a focused checklist.",
          ],
        },
        {
          title: "You can use the platforms for different stages",
          paragraphs: [
            "The choice does not have to be permanent. Some sellers validate an offer in a marketplace and later add a standalone store. Others start with Shopify because they already have an audience or traffic plan. The useful question is not which platform wins universally; it is which one gives your current business test the clearest path to evidence.",
            "If you choose Shopify next, use the free 7-day launch checklist so setup, trust, checkout, and traffic happen in a sensible order.",
          ],
        },
      ]}
    />
  );
}
