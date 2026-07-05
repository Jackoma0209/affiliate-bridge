export type TrackingEventName =
  | "hero_cta_click"
  | "sticky_cta_click"
  | "quiz_result_cta_click"
  | "comparison_cta_click"
  | "final_cta_click"
  | "plan_cta_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: TrackingEventName) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}
