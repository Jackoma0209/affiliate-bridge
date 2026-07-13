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
  | "checklist_request_email_open"
  | "theme_toggle_click";

type TrackingParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: TrackingEventName,
  parameters: TrackingParameters = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...parameters,
  });
}
