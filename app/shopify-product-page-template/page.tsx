import { GuidePage } from "@/components/guide-page";
import { buildPageMetadata } from "@/lib/seo";

const title = "Shopify Product Page Template for a First Sale";
const description =
  "A beginner product-page structure for Shopify: title, first screen, what they receive, delivery and returns, and three useful FAQs.";
const path = "/shopify-product-page-template";

export const metadata = buildPageMetadata({ title, description, path });

const related = [
  {
    href: "/worksheets",
    title: "Product-page worksheet",
    description: "Write the blocks on paper before you open the theme editor.",
  },
  {
    href: "/shopify-trust-policies",
    title: "Trust copy and policies",
    description: "The product page still fails if shipping and returns are missing.",
  },
  {
    href: "/checklist",
    title: "7-Day Launch Checklist",
    description: "Day 3 is when the product page should become specific.",
  },
];

export default function ProductPageTemplatePage() {
  return (
    <GuidePage
      eyebrow="Day 3 companion"
      title="A Shopify product page that can actually sell a first item"
      intro="A first product page does not need a brand story. It needs a buyer, an outcome, a price, a clear button, and honest answers about delivery and returns. Write those blocks before you spend an evening on the theme."
      description={description}
      path={path}
      trackingPlacement="productpage"
      dateModified="2026-09-04"
      ctaTitle="Write the page, then open the store"
      ctaText="Use the worksheet first. When the sentence and the first screen are clear, start the Shopify trial and put them on Dawn."
      related={related}
      sections={[
        {
          title: "Do this today",
          paragraphs: [
            "Pick one product. Fill the five blocks below in a notes app. Do not open the theme customiser until the first screen can be read aloud in one breath.",
          ],
          bullets: [
            "Time: 25–40 minutes.",
            "Output: a title, a first screen, a contents list, a delivery paragraph, and three FAQs.",
            "Example product used below: a fold-flat water bottle for first-time marathon walkers.",
          ],
        },
        {
          title: "1. Title: what it is and who it is for",
          paragraphs: [
            "Lead with the object and the buyer. A slogan in the title forces the visitor to decode the page. If a stranger cannot tell what they would receive, they will not scroll for the answer.",
            "Weak: Hydration Reimagined. Stronger: Fold-flat water bottle for first-time marathon walkers.",
          ],
          bullets: [
            "Name the product in plain language.",
            "Name the person or situation in the same title if it still reads cleanly.",
            "Save clever brand lines for later, after the page is understood.",
          ],
        },
        {
          title: "2. First screen: outcome, price, primary button",
          paragraphs: [
            "The first screen on a phone has to answer three questions: what happens for me, what it costs, and what I press. If the price is hidden or the button says Learn more, you added friction before the visitor has a reason to trust you.",
          ],
          bullets: [
            "Outcome: keep water on the route without a bulky backpack.",
            "Price: show it next to the button, not only after a gallery.",
            "Button: Add to cart or Buy now. Not Discover the collection.",
            "One honest photo of the actual item beats three stock gym scenes.",
          ],
        },
        {
          title: "3. What they receive, in plain language",
          paragraphs: [
            "List the physical or digital contents. Beginners often write about lifestyle and skip the box. Buyers decide with the box.",
          ],
          bullets: [
            "One fold-flat 500ml bottle.",
            "Cap and carry loop attached.",
            "Care note: rinse after use, do not boil.",
            "If a size, colour, or file format matters, say it here, not in a buried spec tab.",
          ],
        },
        {
          title: "4. Delivery and returns in one short paragraph",
          paragraphs: [
            "New stores lose first sales when shipping is a mystery. Put the estimate on the product page, not only in a policy document. A visitor should not have to hunt for when it arrives or how a return works.",
            "Example: Ships from the UK within 2 working days. Typical delivery 3–5 working days. Returns accepted within 14 days; buyer pays return postage unless the item is faulty.",
          ],
          bullets: [
            "Where it ships from.",
            "Typical timing, even if it is a range.",
            "Who pays return postage.",
            "If you cannot yet ship everywhere, say so instead of implying you can.",
          ],
        },
        {
          title: "5. Three FAQs that answer real objections",
          paragraphs: [
            "Write the questions a cautious buyer would ask a friend. Do not use the FAQ to repeat the slogan.",
          ],
          bullets: [
            "Will this stay closed in a pocket? Yes — test the cap before you list it, then describe what you tested.",
            "Is it enough for a full marathon? Say the volume and who it is for. Do not invent endurance claims.",
            "What if it leaks? Point to the returns line you already published.",
          ],
        },
        {
          title: "Common stall",
          paragraphs: [
            "The stall is decorating the page before the offer is a sentence. Colour blocks and app badges will not fix a title written for everyone.",
            "If you are stuck, open the worksheets, fill the offer sentence, then copy the five blocks onto Dawn. That is Day 3. Days 4–5 cover policies and a real checkout test.",
          ],
        },
      ]}
    />
  );
}
