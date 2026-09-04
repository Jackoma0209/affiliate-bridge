import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "Shopify Trust Copy and Policies Before Your First Visitor";
const description =
  "Write contact, shipping, returns, and privacy copy for a first Shopify store before you send traffic. Empty policy pages make new stores feel unsafe.";
const path = "/shopify-trust-policies";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/worksheets",
    title: "Trust copy starters",
    description: "The same policy blocks as a printable worksheet.",
  },
  {
    href: "/test-shopify-checkout-on-mobile",
    title: "Test checkout on mobile",
    description: "Policies do not help if the phone checkout is broken.",
  },
  {
    href: "/shopify-product-page-template",
    title: "Product page template",
    description: "Repeat delivery and returns on the product page, not only here.",
  },
];

export default function TrustPoliciesPage() {
  return (
    <GuidePage
      eyebrow="Days 4–5 companion"
      title="Trust copy and policies before your first visitor"
      intro="A stranger is being asked to type a card number into a store they found this week. Missing contact details, blank shipping pages, and ‘insert policy here’ returns copy are enough to stop the first sale. Write the four pages in your own words, then test checkout on your phone."
      description={description}
      path={path}
      trackingPlacement="trustpolicies"
      dateModified="2026-09-04"
      ctaTitle="Policies first, then a real checkout test"
      ctaText="Publish contact, shipping, returns, and privacy. Then run the mobile checkout path before you message anyone."
      related={related}
      sections={[
        {
          title: "Do this today",
          paragraphs: [
            "Create or finish four pages and link all four in the footer. Use an email you actually read. Do not paste a generic generator and leave the brackets in.",
          ],
          bullets: [
            "Time: 30–45 minutes.",
            "Pages: Contact, Shipping, Returns, Privacy.",
            "Then complete one test order on your phone.",
          ],
        },
        {
          title: "1. Contact",
          paragraphs: [
            "Put a real email in the footer and on a dedicated contact page. If you have a phone number you will answer, add it. If you will not answer it, omit it.",
            "A contact form with no inbox behind it is worse than a visible email address.",
          ],
          bullets: [
            "Use get-in-touch language only if you will reply within a working day.",
            "Link the same email on the contact page and in the footer.",
            "If you are a sole trader, say that plainly. It is more trustworthy than a fake department name.",
          ],
        },
        {
          title: "2. Shipping",
          paragraphs: [
            "Say where you ship, how long it usually takes, and what happens after the order. Ranges are honest. ‘Fast worldwide shipping’ with no origin is not.",
          ],
          bullets: [
            "Origin: where the parcel starts.",
            "Timing: a range you can keep.",
            "After the order: confirmation email, then a dispatch note when it leaves.",
            "If a product is made to order, say the extra days before it ships.",
          ],
        },
        {
          title: "3. Returns",
          paragraphs: [
            "First-time buyers look for the way out before they look for the brand story. State the window, who pays return postage, and how a refund is issued.",
            "Example: 14 days from delivery. Buyer pays return postage unless the item is faulty. Refunds go back to the original payment method after the item arrives.",
          ],
          bullets: [
            "Digital products need a different line — say whether a file can be refunded.",
            "Do not copy another store’s 30-day free-return policy if you cannot afford it.",
            "Repeat the short version on the product page.",
          ],
        },
        {
          title: "4. Privacy",
          paragraphs: [
            "Checkout collects a name, address, email, and payment details through Shopify. Say that. Say you do not sell the list. Link to Shopify’s customer privacy terms if you use their checkout, and describe anything extra you collect (email list, quiz, support inbox).",
          ],
          bullets: [
            "What you collect at checkout.",
            "What you collect if someone joins the optional tips list.",
            "That you do not sell the list.",
            "How to ask for deletion: the same contact email.",
          ],
        },
        {
          title: "Common stall",
          paragraphs: [
            "The stall is leaving Shopify’s placeholder policy text live, then sending warm traffic. People notice. Write four short pages, link them, test checkout, then do Day 6.",
            "If you want the store shell built for you, email with the subject SETUP. The policies still have to be true for your product.",
          ],
        },
      ]}
    />
  );
}
