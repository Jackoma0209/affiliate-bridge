import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "What to Sell on Shopify: A Beginner Product Filter",
  description:
    "Use a practical product filter to choose what to sell on Shopify without relying on hype, fake winning-product lists, or endless research.",
  path: "/what-to-sell-on-shopify",
});

const related = [
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "Build the minimum store you need to start learning from real visitors.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Use evidence to find the bottleneck after you launch.",
  },
  {
    href: "/shopify-vs-etsy",
    title: "Shopify vs Etsy for Beginners",
    description: "Decide whether a standalone store or marketplace is the better first test.",
  },
];

export default function WhatToSellPage() {
  return (
    <GuidePage
      eyebrow="Product validation"
      title="What to Sell on Shopify: Choose a Product You Can Actually Test"
      intro="You do not need a secret winning product. You need an offer with a clear buyer, understandable value, workable fulfilment, and a realistic way to reach people who might care."
      trackingPlacement="productguide"
      related={related}
      sections={[
        {
          title: "Start with a buyer, not a catalogue",
          paragraphs: [
            "A product becomes easier to market when you can describe the person it is for. Instead of asking what is trending in general, ask what a specific group repeatedly buys, struggles with, replaces, upgrades, gifts, or uses to express identity.",
          ],
          bullets: [
            "Pick one audience you can describe in a sentence.",
            "List three problems, desires, routines, or occasions that create buying intent.",
            "Choose a product category that fits one of those motivations.",
          ],
        },
        {
          title: "Use a five-part product filter",
          paragraphs: [
            "A first product does not have to score perfectly on every dimension, but serious weaknesses should be visible before you spend money building around it.",
          ],
          bullets: [
            "Clarity: can a visitor understand what it is and why it matters quickly?",
            "Margin: is there room for product cost, delivery, refunds, payment fees, and marketing?",
            "Fulfilment: can you reliably source, make, deliver, or support it?",
            "Trust: can you prove the product accurately without fake reviews or exaggerated claims?",
            "Reach: can you name at least one realistic channel where likely buyers already exist?",
          ],
        },
        {
          title: "Prefer simple first tests",
          paragraphs: [
            "Beginners often make the test harder by launching too many products, variants, bundles, and audiences at once. A smaller test makes the signal clearer: you can see whether the idea, page, or traffic is the problem.",
          ],
          bullets: [
            "Start with one hero product or a tightly related small range.",
            "Avoid complicated customisation unless it is central to the value.",
            "Write the offer before spending hours on branding.",
          ],
        },
        {
          title: "Validate the message before chasing scale",
          paragraphs: [
            "Validation does not mean asking friends whether an idea sounds nice. Put a clear offer in front of relevant people and look for stronger signals: questions about price, delivery, use cases, comparisons, and whether someone takes a buying action.",
          ],
          bullets: [
            "Show the offer to a small relevant audience.",
            "Record objections and repeated questions.",
            "Improve the message before increasing traffic volume.",
          ],
        },
        {
          title: "Avoid product research traps",
          paragraphs: [
            "Lists of supposedly guaranteed winners can create false confidence. A product that worked for one seller, audience, price, market, or ad account may behave very differently for you.",
          ],
          bullets: [
            "Do not treat social-media virality as proof of profitable demand.",
            "Do not copy supplier descriptions and assume the offer is finished.",
            "Do not order large quantities before you have a reason to believe the offer resonates.",
          ],
        },
        {
          title: "Your next action",
          paragraphs: [
            "Choose the simplest product idea that survives the filter, write one clear offer, and move into a small launch test. The goal of the first store is not to prove that you picked perfectly; it is to learn cheaply and clearly enough to make the next decision better.",
          ],
        },
      ]}
    />
  );
}
