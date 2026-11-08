// lib/analytics.ts
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "consent",
      targetId: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/**
 * Track custom event ke GA4. No-op kalau gtag belum ready
 * (mis. GA_ID kosong, atau user block analytics).
 */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

/** Event khusus untuk konversi WhatsApp */
export function trackWhatsApp(source: string) {
  trackEvent("whatsapp_click", { source });
}

/** Event untuk form submission */
export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", { form_name: formName });
}

/** Event untuk language switch */
export function trackLanguageChange(locale: string) {
  trackEvent("language_change", { locale });
}

/** Event untuk theme switch */
export function trackThemeChange(theme: string) {
  trackEvent("theme_change", { theme });
}