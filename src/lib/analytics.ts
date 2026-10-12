/**
 * Google Analytics 4 & Consent Management Library
 * Measurement ID: G-559E08ZG7E
 * Primary Care Data Services Ltd
 */

export const GA_MEASUREMENT_ID = "G-559E08ZG7E";
export const CONSENT_STORAGE_KEY = "pcds_cookie_consent_v1";
export const CONSENT_COOKIE_NAME = "pcds_cookie_consent";

export interface CookieConsentSettings {
  necessary: boolean; // Always true for essential functionality
  analytics: boolean; // Explicit user choice
  timestamp: string;
  version: number;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    pcdsOpenCookieModal?: () => void;
  }
}

/**
 * Read stored cookie consent from localStorage or document.cookie
 */
export function getStoredConsent(): CookieConsentSettings | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed.analytics === "boolean") {
        return parsed;
      }
    }
  } catch (e) {
    // localStorage might be unavailable or disabled
  }

  // Fallback check document.cookie
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`));
    if (match && match[1]) {
      const parsed = JSON.parse(decodeURIComponent(match[1]));
      if (parsed && typeof parsed.analytics === "boolean") {
        return parsed;
      }
    }
  } catch (e) {
    // ignore
  }

  return null;
}

/**
 * Save cookie consent choices to both localStorage and cookie
 */
export function saveConsent(analyticsGranted: boolean): CookieConsentSettings {
  const settings: CookieConsentSettings = {
    necessary: true,
    analytics: analyticsGranted,
    timestamp: new Date().toISOString(),
    version: 1,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      // ignore
    }

    // Set cookie valid for 1 year (365 days)
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
      JSON.stringify(settings)
    )}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;

    // Apply consent update to Google Consent Mode
    updateGoogleConsent(analyticsGranted);

    // If consent revoked, remove existing analytics cookies
    if (!analyticsGranted) {
      deleteAnalyticsCookies();
    }
  }

  return settings;
}

/**
 * Apply Google Consent Mode v2 update
 */
export function updateGoogleConsent(granted: boolean) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  const consentState = granted ? "granted" : "denied";

  window.gtag("consent", "update", {
    analytics_storage: consentState,
  });

  if (granted) {
    loadGoogleAnalyticsScript();
    // Dispatch page_view now that consent is granted
    window.gtag("event", "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

/**
 * Dynamically inject gtag.js script ONLY after consent is granted
 */
export function loadGoogleAnalyticsScript() {
  if (typeof window === "undefined") return;

  const scriptId = "google-analytics-gtag";
  if (document.getElementById(scriptId)) return; // already loaded

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // We control page_view manually to avoid duplicates
    anonymize_ip: true,
  });
}

/**
 * Remove any _ga and _ga_* cookies from document when consent is denied/withdrawn
 */
export function deleteAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const cookies = document.cookie.split(";");
  const host = window.location.hostname;
  const domainParts = host.split(".");

  for (let c of cookies) {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      // Clear for exact host
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `${name}=; path=/; domain=${host}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

      // Clear for root domain if applicable
      if (domainParts.length >= 2) {
        const rootDomain = "." + domainParts.slice(-2).join(".");
        document.cookie = `${name}=; path=/; domain=${rootDomain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    }
  }
}

/**
 * Open the cookie preferences modal programmatically
 */
export function openCookiePreferencesModal() {
  if (typeof window !== "undefined") {
    if (typeof window.pcdsOpenCookieModal === "function") {
      window.pcdsOpenCookieModal();
    } else {
      window.dispatchEvent(new CustomEvent("pcds-open-cookie-modal"));
    }
  }
}
