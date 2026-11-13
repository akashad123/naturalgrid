/**
 * Google Analytics 4 (GA4) Tracking Utility
 * Provides typed event tracking for conversions, lead forms, phone calls,
 * WhatsApp chats, and solar savings calculator interactions.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID: string =
  (typeof import.meta !== "undefined" && import.meta.env
    ? (import.meta.env.VITE_GA_MEASUREMENT_ID as string)
    : "") || "";

export const isAnalyticsEnabled = (): boolean => {
  return (
    typeof window !== "undefined" &&
    Boolean(GA_MEASUREMENT_ID) &&
    typeof window.gtag === "function"
  );
};

/**
 * Track a page view on client-side route changes
 */
export function trackPageView(url: string, title?: string): void {
  if (!isAnalyticsEnabled() || !GA_MEASUREMENT_ID) return;
  window.gtag!("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  });
}

/**
 * Send a custom GA4 event
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, unknown> = {}
): void {
  if (!isAnalyticsEnabled()) return;
  window.gtag!("event", eventName, eventParams);
}

/**
 * Track phone call click (high-intent conversion)
 */
export function trackPhoneClick(location: string = "floating_action"): void {
  trackEvent("contact_phone_click", {
    event_category: "Engagement",
    event_label: "+919072634443",
    trigger_location: location,
  });
}

/**
 * Track WhatsApp enquiry click (high-intent conversion)
 */
export function trackWhatsAppClick(location: string = "floating_action"): void {
  trackEvent("contact_whatsapp_click", {
    event_category: "Engagement",
    event_label: "+919072634443",
    trigger_location: location,
  });
}

/**
 * Track contact / quote form submission
 */
export function trackFormSubmission(
  serviceType: string = "general_enquiry",
  district?: string
): void {
  trackEvent("generate_lead", {
    event_category: "Leads",
    event_label: serviceType,
    service_type: serviceType,
    district: district || "Not specified",
    value: 1,
  });
}

/**
 * Track solar calculator usage
 */
export function trackCalculatorUsed(
  units: number,
  propertyType: string,
  recommendedKw: number
): void {
  trackEvent("solar_calculator_used", {
    event_category: "Calculator",
    units_consumed: units,
    property_type: propertyType,
    recommended_kw: recommendedKw,
  });
}

/**
 * Track primary CTA button clicks (e.g. "Get a Free Quote", "Talk to Us")
 */
export function trackCtaClick(label: string, destination: string): void {
  trackEvent("cta_click", {
    event_category: "Conversion",
    event_label: label,
    destination: destination,
  });
}
