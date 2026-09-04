import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "How to Test Shopify Checkout on Mobile";
const description =
  "A beginner checkout test you can run on your phone today: product, cart, shipping, payment methods, and confirmation. Fix friction before you send traffic.";
const path = "/test-shopify-checkout-on-mobile";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/shopify-dawn-theme-setup",
    title: "Dawn Theme Setup",
    description: "Get a simple store shell live before you test checkout.",
  },
  {
    href: "/shopify-trust-policies",
    title: "Trust copy and policies",
    description: "Checkout tests fail for strangers if shipping and returns are still placeholders.",
  },
  {
    href: "/checklist",
    title: "7-Day Launch Checklist",
    description: "Day 5 is the checkout and trust test.",
  },
];

export default function CheckoutTestPage() {
  return (
    <GuidePage
      eyebrow="Day 5 companion"
      title="How to test Shopify checkout on mobile"
      intro="Most first-store visitors will try to buy on a phone. A desktop-only test misses broken buttons, surprise shipping, and payment methods that never appear. Run this path on a real device before you ask anyone to visit."
      description={description}
      path={path}
      trackingPlacement="checkouttest"
      dateModified="2026-08-29"
      ctaTitle="Test checkout, then send people"
      ctaText="If you do not have a store shell yet, open Shopify, pick a clean theme, and come back to this list the same day."
      related={related}
      sections={[
        {
          title: "1. Use a real phone, not a resized browser",
          paragraphs: [
            "Resizing a desktop window is not a mobile test. Thumb reach, autofill, and payment sheets behave differently. Open the product page on your own phone, on your actual network.",
            "If you only have one device, that is enough. Repeat later on a second phone if you can.",
          ],
          bullets: [
            "Turn off Wi-Fi once to see how the page feels on mobile data.",
            "Use a private window so saved passwords do not hide a broken guest checkout.",
            "Do this after payments and shipping rates exist. A theme preview is not a checkout test.",
          ],
        },
        {
          title: "2. Walk the full path",
          paragraphs: [
            "Product → add to cart → cart → checkout → shipping option → payment method → confirmation (or the last step you can reach without charging a real card). Shopify’s Bogus Gateway can be used for a test order while you are still in development.",
            "Watch for anything that makes you hesitate. If you hesitate, a stranger will leave.",
          ],
          bullets: [
            "Can you find the price without scrolling through a brand story?",
            "Does add-to-cart stay visible as you scroll?",
            "Are shipping costs visible before the final payment step?",
            "Do the payment methods you promised actually appear?",
            "Does the confirmation page or email look finished, not like placeholder theme text?",
          ],
        },
        {
          title: "3. Fix the boring blockers first",
          paragraphs: [
            "Unexpected shipping, missing payment methods, and absent return information stop more first purchases than a plain theme. Write delivery estimates in language a tired person can understand.",
            "If you cannot fulfil the timeline you published, change the copy. Honest slower shipping converts better than an optimistic date you will miss.",
          ],
          bullets: [
            "Publish returns, shipping, and contact links in the footer.",
            "Remove extra checkout fields you do not need.",
            "Check that the store currency and the price on the product page match.",
          ],
        },
        {
          title: "4. Only then invite visitors",
          paragraphs: [
            "Sending warm traffic into a broken checkout teaches you nothing about the offer. Finish this test, then use Day 6 of the checklist or the first-visitors guide.",
            "If something fails, fix that one thing and run the phone path again. Do not start a theme swap at the same time.",
          ],
          bullets: [
            "Write down the first friction you hit.",
            "Retest after the fix, on the same phone.",
            "Then send a small, relevant audience — not a paid blast.",
          ],
        },
      ]}
    />
  );
}
