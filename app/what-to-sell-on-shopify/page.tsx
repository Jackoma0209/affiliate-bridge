import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "What to Sell on Shopify: A Beginner Product Filter";
const description =
  "Use a practical product filter to choose what to sell on Shopify without relying on hype, fake winning-product lists, or endless research.";
const path = "/what-to-sell-on-shopify";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "Build the minimum store you need to start learning from real visitors.",
  },
  {
    href: "/shopify-product-page-template",
    title: "Product page template",
    description: "After you pick one product, write the page a first buyer can scan.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Shopify Store Is Not Getting Sales",
    description: "Use evidence to find the bottleneck after you launch.",
  },
];

export default function WhatToSellPage() {
  return (
    <GuidePage
      eyebrow="Product validation"
      title="What to Sell on Shopify: Choose a Product You Can Actually Test"
      intro="You do not need a secret winning product. You need an offer with a clear buyer, understandable value, workable fulfilment, and a realistic way to reach people who might care."
      description={description}
      path={path}
      trackingPlacement="productguide"
      related={related}
      sections={[
        {
          title: "Start with a buyer, not a catalogue",
          paragraphs: [
            "A product becomes easier to market when you can describe the person it is for. Instead of asking what is trending in general, ask what a specific group repeatedly buys, struggles with, replaces, upgrades, gifts, or uses to express identity.",
            "Broad ideas like “home goods” or “fitness” are usually too wide for a first test. Narrow until you can name a person, a situation, and a reason to buy now.",
          ],
          bullets: [
            "Pick one audience you can describe in a sentence.",
            "List three problems, desires, routines, or occasions that create buying intent.",
            "Choose a product category that fits one of those motivations.",
            "Write: This product helps [buyer] achieve [outcome] without [objection].",
          ],
        },
        {
          title: "Use a five-part product filter",
          paragraphs: [
            "A first product does not have to score perfectly on every dimension, but serious weaknesses should be visible before you spend money building around it. Score each factor honestly from weak to strong.",
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
          title: "Physical, digital, service, POD, or dropshipping?",
          paragraphs: [
            "The store model matters less than whether you can explain, fulfil, and test the offer. Each model has a different first-week bottleneck.",
          ],
          bullets: [
            "Physical: strongest when you control quality and shipping expectations are clear.",
            "Digital: fastest to deliver, but the offer and proof still need to be sharp.",
            "Services: often needs a clear package, scope, and booking or checkout path.",
            "Print-on-demand: useful for design-led tests if mockups and niches are focused.",
            "Dropshipping: possible for testing, but supplier reliability and delivery honesty matter early.",
          ],
        },
        {
          title: "Prefer simple first tests",
          paragraphs: [
            "Beginners often make the test harder by launching too many products, variants, bundles, and audiences at once. A smaller test makes the signal clearer: you can see whether the idea, page, or traffic is the problem.",
            "One hero product with a clear page beats a catalogue of half-finished items. You can expand after you learn.",
          ],
          bullets: [
            "Start with one hero product or a tightly related small range.",
            "Avoid complicated customisation unless it is central to the value.",
            "Write the offer before spending hours on branding.",
            "If two ideas feel equal, pick the one you can fulfil more reliably this month.",
          ],
        },
        {
          title: "Validate the message before chasing scale",
          paragraphs: [
            "Validation does not mean asking friends whether an idea sounds nice. Put a clear offer in front of relevant people and look for stronger signals: questions about price, delivery, use cases, comparisons, and whether someone takes a buying action.",
            "Weak signals include polite compliments with no questions. Stronger signals include repeated objections you can answer, comparison shopping, and checkout starts.",
          ],
          bullets: [
            "Show the offer to a small relevant audience.",
            "Record objections and repeated questions.",
            "Improve the message before increasing traffic volume.",
            "Do not treat one polite comment as market proof.",
          ],
        },
        {
          title: "Avoid product research traps",
          paragraphs: [
            "Lists of supposedly guaranteed winners can create false confidence. A product that worked for one seller, audience, price, market, or ad account may behave very differently for you.",
            "Research is useful. Endless research is often a way to delay publishing a testable store.",
          ],
          bullets: [
            "Do not treat social-media virality as proof of profitable demand.",
            "Do not copy supplier descriptions and assume the offer is finished.",
            "Do not order large quantities before you have a reason to believe the offer resonates.",
            "Do not chase every trend that appears in a screenshot thread.",
          ],
        },
        {
          title: "Your next action",
          paragraphs: [
            "Choose the simplest product idea that survives the filter, write one clear offer, and move into a small launch test. The goal of the first store is not to prove that you picked perfectly; it is to learn cheaply and clearly enough to make the next decision better.",
            "When the offer sentence is clear, open the free 7-day checklist. On Day 2, open Shopify and build the minimum trustworthy store around that one idea.",
          ],
        },
      ]}
    />
  );
}
