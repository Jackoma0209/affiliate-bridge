import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "How to Get Your First Shopify Visitors Without Ads";
const description =
  "Get your first 25 Shopify visitors without ads: warm messages, one community, and a short count of what happened. Scripts included.";
const path = "/get-first-shopify-visitors";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/7-day-shopify-plan-what-usually-happens",
    title: "What usually happens in 7 days",
    description: "After the first 25 people, use Day 7 to read the stall honestly.",
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
      dateModified="2026-09-04"
      ctaTitle="Traffic only helps a store that can take an order"
      ctaText="If checkout is not tested yet, finish Days 2–5 first. If the shell is live, send the first 25 people today."
      related={related}
      sections={[
        {
          title: "Do this today",
          paragraphs: [
            "Do not open an ads manager. Write a list of 15 people who already know you or already talk about the problem. Send ten messages using the script below. Then make one public comment in a place that buyer already uses.",
          ],
          bullets: [
            "Time: 45–90 minutes.",
            "Goal: 25 relevant visits over a few days, not 2,000 strangers tonight.",
            "Question to ask: what is unclear on this page — not would you buy this.",
          ],
        },
        {
          title: "Why ads are the wrong first test",
          paragraphs: [
            "Paid traffic is a valid later test. It is a poor first test when the offer, photos, or checkout are still guesses. You will spend money to learn things a warm conversation would have told you for free.",
            "The first 25 visitors should be able to tell you what is unclear. Random clicks from a broad interest audience usually cannot.",
          ],
          bullets: [
            "Warm messages beat a cold ad account on week one.",
            "Relevance matters more than volume.",
            "If you cannot name 25 relevant people or searches, the offer is still too broad. Go back to Day 1.",
          ],
        },
        {
          title: "Where the 25 people come from",
          paragraphs: [
            "You do not need an audience. You need a list. Write names before you write a caption.",
          ],
          bullets: [
            "Friends and family who have the problem, not everyone in your phone.",
            "People who already asked you about this topic.",
            "A group, forum, or search thread where that buyer complains in public.",
            "One short post on the platform you already use, aimed at that buyer only.",
          ],
        },
        {
          title: "Messages that get a useful reply",
          paragraphs: [
            "This is the step most beginners skip because it feels awkward. It is also the fastest way to get a real reaction. Send a specific message, not a broadcast “I launched a store” story with a link buried at the end.",
            "Ask what is unclear on the product page. That question produces better feedback than “would you buy this?” which people answer politely.",
          ],
          bullets: [
            "Warm DM: I put a first version live for [buyer]. Would you tell me what is unclear on the product page? Link: [store]",
            "Follow-up a day later: thanks — I changed [one thing]. Anything else stop you.",
            "Include who the product is for in the first sentence.",
            "Ten personal messages beat one public post that nobody clicks.",
          ],
        },
        {
          title: "One public channel, not seven",
          paragraphs: [
            "Choose a community, search thread, or short-form platform where the buyer already spends time. Contribute something useful about the problem. Link the store only when it is a genuine next step, not as spam.",
            "One useful post or comment is enough for the first experiment. Posting everywhere dilutes the lesson: you will not know which channel produced the visit.",
          ],
          bullets: [
            "Name the channel before you write the post.",
            "Talk about the problem first, the product second.",
            "If the room bans promotion, obey the rules. The diagnostic still works from conversation.",
            "Short public line: Day 6 of a 7-day launch. One product, one page. What would stop you buying this?",
          ],
        },
        {
          title: "What not to do",
          paragraphs: [
            "Fake traffic teaches you nothing and can get a store flagged. Follow-for-follow and engagement pods send the wrong people. A theme redesign in the middle of Day 6 hides whether the messages worked.",
          ],
          bullets: [
            "No purchased visits or bots.",
            "No blasting a Facebook group with only a link.",
            "No changing theme, price, and channel on the same afternoon.",
            "No arguing with the first objection you hear.",
          ],
        },
        {
          title: "Count what happened",
          paragraphs: [
            "After the 25 people have had a chance to visit, look at Shopify analytics or your traffic source list. Separate “someone arrived” from “someone understood the offer” from “someone reached checkout”.",
            "No visitors means a distribution problem. Visitors with no product engagement means the page or the audience is wrong. Cart activity with no purchase means trust, delivery, or checkout. Change one thing, then send another small sample.",
          ],
          bullets: [
            "Write down the source of the first 25 visits.",
            "A first sale from someone you know is useful evidence, not proof of a repeatable business.",
            "Then open the Day 7 guide and pick the stall that matches the numbers.",
          ],
        },
        {
          title: "Common stall",
          paragraphs: [
            "The stall is waiting for Google or TikTok while the store sits passworded. Search takes months. Day 6 takes an evening. If you cannot send ten messages, the offer is probably still “for everyone” and feels embarrassing to explain. Fix the sentence, then send the messages.",
          ],
        },
      ]}
    />
  );
}
