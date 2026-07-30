const STORAGE_KEY = "gyfs_attribution";

export type AttributionData = {
  source: string;
  medium?: string;
  campaign?: string;
  referrer?: string;
  landingPage?: string;
};

function clean(value: string | null | undefined, fallback = "") {
  return (value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 80);
}

export function captureAttribution() {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const existing = readAttribution();
    const source = clean(params.get("utm_source")) || existing?.source || clean(document.referrer ? new URL(document.referrer).hostname : "") || "website";
    const medium = clean(params.get("utm_medium")) || existing?.medium;
    const campaign = clean(params.get("utm_campaign")) || existing?.campaign;
    const referrer = existing?.referrer || clean(document.referrer ? new URL(document.referrer).hostname : "");
    const landingPage = existing?.landingPage || window.location.pathname;

    const payload: AttributionData = {
      source,
      medium,
      campaign,
      referrer,
      landingPage,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Attribution must never interrupt the page experience.
  }
}

export function readAttribution(): AttributionData | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as AttributionData) : null;
  } catch {
    return null;
  }
}

export function buildImpactAffiliateUrl(baseUrl: string, placement: string) {
  if (typeof window === "undefined") return baseUrl;

  const attribution = readAttribution();
  const url = new URL(baseUrl);
  const page = clean(window.location.pathname.replace(/\//g, ""), "homepage") || "homepage";

  url.searchParams.set("subId1", clean(attribution?.source, "website") || "website");
  url.searchParams.set("subId2", clean(placement, "cta") || "cta");
  url.searchParams.set("subId3", page);

  return url.toString();
}
