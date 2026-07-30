export type TrackingEventName =
  | "hero_checklist_click"
  | "hero_cta_click"
  | "sticky_checklist_click"
  | "quiz_start"
  | "quiz_complete"
  | "quiz_result_cta_click"
  | "comparison_cta_click"
  | "final_cta_click"
  | "plan_cta_click"
  | "checklist_page_cta_click"
  | "checklist_print_click"
  | "checklist_request_submit"
  | "checklist_request_success"
  | "checklist_request_error"
  | "checklist_request_email_open"
  | "affiliate_click"
  | "guide_cta_click"
  | "theme_toggle_click";

type TrackingParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: TrackingEventName,
  parameters: TrackingParameters = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined)
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...cleanParameters,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, cleanParameters);
  }
}
