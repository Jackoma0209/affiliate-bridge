const targetUrl = process.env.CHECK_URL || "http://localhost:3000";

const unsafePhrases = [
  "first sale by day 12–21",
  "$1,084",
  "Handed in my notice",
  "Start 100% free",
  "Claim Everything Free",
  "live in under 2 hours",
  "$0 to start",
  "Day 4–21 typical",
  "First $500 week by day 18",
  "Now $2–3K/month part-time",
  "Start Shopify Free + Get the Checklist",
  "Email capture coming soon",
];

const requiredPhrases = [
  "Launch your Shopify store in 7 days",
  "Get the Free 7-Day Checklist",
  "affiliate disclosure",
  "results vary",
  "Start My Shopify Trial",
];

function normalize(value) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

async function main() {
  const response = await fetch(targetUrl, {
    headers: {
      "user-agent": "getyourfirstsale-copy-regression/2.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Expected ${targetUrl} to return 2xx, got ${response.status}`);
  }

  const html = await response.text();
  const normalizedHtml = normalize(html);
  const unsafeFound = unsafePhrases.filter((phrase) =>
    normalizedHtml.includes(normalize(phrase))
  );
  const requiredMissing = requiredPhrases.filter(
    (phrase) => !normalizedHtml.includes(normalize(phrase))
  );

  if (unsafeFound.length || requiredMissing.length) {
    if (unsafeFound.length) {
      console.error("Unsafe or misleading phrases found:");
      unsafeFound.forEach((phrase) => console.error(`- ${phrase}`));
    }

    if (requiredMissing.length) {
      console.error("Required phrases missing:");
      requiredMissing.forEach((phrase) => console.error(`- ${phrase}`));
    }

    process.exit(1);
  }

  console.log(`Landing copy regression passed for ${targetUrl}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
