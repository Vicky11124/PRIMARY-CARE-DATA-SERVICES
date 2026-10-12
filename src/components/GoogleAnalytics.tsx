"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  getStoredConsent,
  loadGoogleAnalyticsScript,
  updateGoogleConsent,
} from "@/lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPathRef = useRef<string | null>(null);

  // Initialize consent on mount
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored && stored.analytics) {
      updateGoogleConsent(true);
      loadGoogleAnalyticsScript();
    }
  }, []);

  // Track route changes when analytics consent is granted
  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored || !stored.analytics) return;

    const queryString = searchParams?.toString();
    const fullUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Prevent duplicate page_view events on the exact same URL
    if (lastTrackedPathRef.current === fullUrl) return;
    lastTrackedPathRef.current = fullUrl;

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Consent Mode v2 Default Settings (Must execute immediately before any tracking) */}
      <Script
        id="google-consent-mode-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // Default to denied for non-essential storage under UK PECR / GDPR
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `,
        }}
      />
    </>
  );
}
