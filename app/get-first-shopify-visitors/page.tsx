import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "How to Get Your First Shopify Visitors Without Ads";
const description =
  "A practical plan for your first 25 Shopify visitors: warm messages, one community, and one useful post. No ads required for the first test.";
const path = "/get-first-shopify-visitors";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/why-my-shopify-store-isnt-getting-sales",
    title: "Why Your Store Is Not Getting Sales",
    description: "If people arrive and do not buy, diagnose offer, trust, and checkout next.",
  },
  {
    href: "/checklist",
    title: "7-Day Launch Checklist",
    description: "Day 6 is the first targeted traffic test.",
  },
  {
    href: "/worksheets",
    title: "Outreach scripts",
    description: "Copy-ready Day 6 messages you can send today.",
  },
];

export default function FirstVisitorsPage() {
  return (
    <GuidePage
      eyebrow="Day 6 companion"
      title="How to get your first Shopify visitors without ads"
      intro="A new store cannot convert people who never arrive. Your first traffic test is 25 relevant humans, not a viral post and not a paid campaign. Use people who already know you, then one place where the buyer already talks."
      description={description}
      path={path}
      trackingPlacement="firstvisitors"
      dateModified="2026-08-29"
      ctaTitle="Traffic only helps a store that can take an order"
      ctaText="If checkout is not tested yet, finish Days 2–5 first. If the shell is live, send the first 25 people today."
      related={related}
      sections={[
        {
          title: "1. Do not start with ads",
          paragraphs: [
            "Paid traffic is a valid later test. It is a poor first test when the offer, photos, or checkout are still guesses. You will spend money to learn things a warm conversation would have told you for free.",
            "The first 25 visitors should be able to tell you what is unclear. Random clicks from a broad interest audience usually cannot.",
          ],
          bullets: [
            "Warm messages beat a cold ad account on week one.",
            "Relevance matters more than volume.",
            "If you cannot name 25 relevant people or searches, the offer is still too broad.",
          ],
        },
        {
          title: "2. Text people who already know you",
          paragraphs: [
            "This is the step most beginners skip because it feels awkward. It is also the fastest way to get a real reaction. Send a specific message, not a broadcast “I launched a store” story with a link buried at the end.",
            "Ask what is unclear on the product page. That question produces better feedback than “would you buy this?” which people answer politely.",
          ],
          bullets: [
            "Ten personal messages beat one public post that nobody clicks.",
            "Include who the product is for in the first sentence.",
            "Use the outreach scripts on the worksheets page if you are stuck on wording.",
          ],
        },
        {
          title: "3. Pick one public channel",
          paragraphs: [
            "Choose a community, search thread, or short-form platform where the buyer already spends time. Contribute something useful about the problem. Link the store only when it is a genuine next step, not as spam.",
            "One useful post or comment is enough for the first experiment. Posting everywhere dilutes the lesson: you will not know which channel produced the visit.",
          ],
          bullets: [
            "Name the channel before you write the post.",
            "Talk about the problem first, the product second.",
            "If the room bans promotion, obey the rules. The diagnostic still works from conversation.",
          ],
        },
        {
          title: "4. Count what happened",
          paragraphs: [
            "After the 25 people have had a chance to visit, look at Shopify analytics or your traffic source list. Separate “someone arrived” from “someone understood the offer” from “someone reached checkout”.",
            "No visitors means a distribution problem. Visitors with no product engagement means the page or the audience is wrong. Cart activity with no purchase means trust, delivery, or checkout. Change one thing, then send another small sample.",
          ],
          bullets: [
            "Write down the source of the first 25 visits.",
            "Do not change theme, price, and traffic source on the same afternoon.",
            "A first sale from someone you know is useful evidence, not proof of a repeatable business.",
          ],
        },
      ]}
    />
  );
}
