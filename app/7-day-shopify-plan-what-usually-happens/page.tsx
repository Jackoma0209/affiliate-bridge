import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "What Usually Happens on the 7-Day Shopify First-Sale Plan";
const description =
  "Realistic outcomes after a 7-day Shopify launch plan: common stalls, useful evidence, and what to change on Day 7. No income promises.";
const path = "/7-day-shopify-plan-what-usually-happens";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/checklist",
    title: "7-Day Launch Checklist",
    description: "The sequence this article is about.",
  },
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why the store is not getting sales",
    description: "Use evidence to find the bottleneck after the week.",
  },
  {
    href: "/get-first-shopify-visitors",
    title: "First visitors without ads",
    description: "Day 6 is usually where the plan is abandoned.",
  },
];

export default function SevenDayOutcomesPage() {
  return (
    <GuidePage
      eyebrow="Day 7 companion"
      title="What usually happens when you follow the 7-day first-sale plan"
      intro="The checklist is a sequence, not a guarantee. Most people do not finish all seven days cleanly. The useful result is evidence: a clearer offer, a live checkout, and a short list of what actually blocked a purchase. Treat that as the point of the week."
      description={description}
      path={path}
      trackingPlacement="sevendayoutcomes"
      dateModified="2026-09-04"
      ctaTitle="Run the week for evidence, not a headline"
      ctaText="Open the checklist, keep the store narrow, and use Day 7 to decide the next single change."
      related={related}
      sections={[
        {
          title: "This is not a results page",
          paragraphs: [
            "There are no student screenshots here. A first sale depends on the product, the offer, the price, trust, traffic, and whether the work was actually done. Shopify has published that many new businesses make a first sale within about 35 days of signing up. That is an average across many stores, not a promise for this checklist.",
            "What follows are the patterns that show up when beginners try to go from idea to a tested page in a week.",
          ],
        },
        {
          title: "Three honest outcomes",
          paragraphs: [
            "After seven days you will usually land in one of three places. All three are usable if you write down what happened.",
          ],
          bullets: [
            "A first sale, often from someone who already knows you. That is evidence the checkout works. It is not proof of a repeatable channel.",
            "No sale, but specific objections: price, delivery, photos, ‘not for me’. That is a product-page or offer problem you can edit.",
            "No visitors, because Day 6 was skipped. That is a distribution problem. The theme is not the issue.",
          ],
        },
        {
          title: "Stall 1: the offer stays broad",
          paragraphs: [
            "Day 1 is one buyer, one outcome, one objection. People replace that with a catalogue ‘for everyone who likes fitness’. The store then feels vague on every later day.",
            "Fix: rewrite the offer sentence until a stranger can repeat it. Use the worksheets. Do not add a second product to hide the first unclear one.",
          ],
        },
        {
          title: "Stall 2: the redesign loop",
          paragraphs: [
            "Day 2 is Dawn, a contact page, and stop. The stall is comparing premium themes and colour systems before anyone has used the page.",
            "Fix: publish the shell. Change the theme only after a visitor has failed to understand the current one.",
          ],
        },
        {
          title: "Stall 3: checkout never tested",
          paragraphs: [
            "Days 4–5 exist because a broken phone checkout wastes every message you send on Day 6. People skip the test order because it feels administrative.",
            "Fix: place a test order on your phone. Complete it. Then send traffic.",
          ],
        },
        {
          title: "Stall 4: empty policies",
          paragraphs: [
            "Warm traffic will open Shipping and Returns. Placeholder text is a reason not to buy, even from people who like you.",
            "Fix: four short pages in your own words. Repeat delivery and returns on the product page.",
          ],
        },
        {
          title: "Stall 5: no traffic experiment",
          paragraphs: [
            "Day 6 is ten to twenty-five relevant humans and one clear question: what is unclear on this page? The stall is posting ‘I launched’ once, or waiting for Google.",
            "Fix: send the outreach scripts. Count replies. Change one thing.",
          ],
        },
        {
          title: "How to use Day 7",
          paragraphs: [
            "Write four numbers: visitors, product-page views, checkouts started, orders. Then write the most common objection. Change one of those, not five.",
          ],
          bullets: [
            "Zero visitors: do Day 6 again before you touch the theme.",
            "Visitors, no checkout: the offer, photos, price, or trust copy.",
            "Checkout, no order: delivery, returns, payment, or a surprise fee.",
            "An order from someone you know: thank them, ask what almost stopped them, then try one stranger next.",
          ],
        },
        {
          title: "Do this today",
          paragraphs: [
            "If you have not started, open the checklist and do Day 1 only. If you are mid-week, do not restart the theme. Finish the missing step. If the week is over, pick the stall above that matches your notes and run that fix once.",
          ],
        },
      ]}
    />
  );
}
