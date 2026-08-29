import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "Shopify Dawn Theme Setup for a First Store";
const description =
  "A practical Dawn setup for beginners: pick the theme, set the home page, add a product, and stop before a week of redesign.";
const path = "/shopify-dawn-theme-setup";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/checklist",
    title: "7-Day Launch Checklist",
    description: "Day 2 is when most people should open Shopify and pick a theme.",
  },
  {
    href: "/shopify-for-beginners",
    title: "Shopify for Beginners",
    description: "The full first-store sequence around the theme choice.",
  },
  {
    href: "/test-shopify-checkout-on-mobile",
    title: "Test Checkout on Mobile",
    description: "A pretty theme still fails if checkout is broken on a phone.",
  },
];

export default function DawnSetupPage() {
  return (
    <GuidePage
      eyebrow="Day 2 companion"
      title="Shopify Dawn setup for a first store"
      intro="Dawn is free, readable, and enough for a first test. The job on Day 2 is a working store shell, not a brand identity. Use this sequence, then leave the theme alone until real visitors have used it."
      description={description}
      path={path}
      trackingPlacement="dawnsetup"
      dateModified="2026-08-29"
      ctaTitle="Open the trial and pick Dawn"
      ctaText="Start Shopify, choose Dawn, add a contact page, then continue the checklist. Do not spend the afternoon on logos."
      related={related}
      sections={[
        {
          title: "1. Open Shopify before you name the brand forever",
          paragraphs: [
            "A working store name can be short and easy to spell. You can change it later. People stall Day 2 by comparing names, domains, and colour palettes instead of publishing a shell that can take an order.",
            "If you already finished the offer sentence (one buyer, one outcome, one objection), you are ready to open the trial. If you have not, do that first — a theme will not fix a vague offer.",
          ],
          bullets: [
            "Use a temporary name if the perfect one is blocking you.",
            "Skip paid themes until you have visitor behaviour to react to.",
            "Do not install apps during setup unless checkout or payments require them.",
          ],
        },
        {
          title: "2. Choose Dawn and keep the defaults",
          paragraphs: [
            "In the Shopify admin, open Online Store → Themes and select Dawn, or another clean free theme if you already know it. Change the store name in the header, set a readable font size, and stop.",
            "Avoid custom CSS, homepage video backgrounds, and popup apps on day one. They slow the page and hide the product.",
          ],
          bullets: [
            "Header: store name + Home, Catalog or Shop, Contact.",
            "Footer: contact email, shipping, returns, privacy, terms.",
            "Homepage: one product or a short explanation of who it is for, then the product.",
            "Leave announcement bars empty unless you have a real delivery or returns fact to state.",
          ],
        },
        {
          title: "3. Add one product before decorating",
          paragraphs: [
            "A theme with no product is a brochure. Add the hero product with a clear title, a real price, at least one accurate photo, and a short description that uses the offer sentence.",
            "If photos are not ready, use the most honest image you have and a note about specifications. Do not invent lifestyle shots that misrepresent the item.",
          ],
          bullets: [
            "One hero product beats a half-finished catalogue.",
            "Write delivery and returns on the product page, not only in policy pages.",
            "Check the product on your phone before you add a second item.",
          ],
        },
        {
          title: "4. Publish the contact page, then stop",
          paragraphs: [
            "New stores ask strangers to trust an unknown business. A visible contact method is a basic trust signal. Add a contact page with an email you actually read.",
            "That is enough for Day 2. Days 3–5 cover product copy, payments, policies, and checkout tests. If you are still in the theme editor at dinner, you missed the point of the day.",
          ],
          bullets: [
            "Contact email in the footer and on a dedicated page.",
            "Password page off when you are ready for the first visitors — not while checkout is broken.",
            "Continue to Day 3 of the checklist once the shell exists.",
          ],
        },
      ]}
    />
  );
}
