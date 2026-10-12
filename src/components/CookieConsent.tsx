"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GA_MEASUREMENT_ID,
  getStoredConsent,
  saveConsent,
  CookieConsentSettings,
} from "@/lib/analytics";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = getStoredConsent();
    if (!existing) {
      // First visit: show cookie banner
      setShowBanner(true);
    } else {
      setAnalyticsEnabled(existing.analytics);
    }

    // Expose open modal globally for the footer link and custom events
    const handleOpen = () => {
      const current = getStoredConsent();
      setAnalyticsEnabled(current?.analytics ?? false);
      setShowModal(true);
    };

    window.pcdsOpenCookieModal = handleOpen;
    window.addEventListener("pcds-open-cookie-modal", handleOpen);

    return () => {
      window.removeEventListener("pcds-open-cookie-modal", handleOpen);
      delete window.pcdsOpenCookieModal;
    };
  }, []);

  if (!mounted) return null;

  const handleAcceptAll = () => {
    saveConsent(true);
    setAnalyticsEnabled(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    saveConsent(false);
    setAnalyticsEnabled(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    saveConsent(analyticsEnabled);
    setShowBanner(false);
    setShowModal(false);
  };

  return (
    <>
      {/* ==================================================
          01. BOTTOM COOKIE BANNER (Simplified Friendly)
          ================================================== */}
      {showBanner && !showModal && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-5 bg-[#080E1E]/95 backdrop-blur-md border-t border-slate-800 shadow-2xl text-white transition-all duration-300"
        >
          <div className="container-custom max-w-6xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
              {/* Text Description */}
              <div className="max-w-2xl">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  Your Privacy Matters
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                  We use essential cookies to keep our website working. With your permission, we also use Google Analytics to understand how people use our website and improve it.
                </p>
                <div>
                  <Link
                    href="/privacy-notice#section-11"
                    className="text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium inline-flex items-center gap-1"
                  >
                    <span>Read our Cookie Policy</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all duration-200 text-center"
                >
                  Accept All
                </button>

                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all duration-200 text-center"
                >
                  Reject Optional Cookies
                </button>

                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 font-semibold text-xs sm:text-sm transition-all duration-200 text-center"
                >
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          02. PREFERENCES MODAL (Detailed Controls)
          ================================================== */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
        >
          <div
            className="relative w-full max-w-2xl bg-[#0B132B] border border-slate-700/80 text-white rounded-2xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#080E1E] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  Privacy Settings
                </span>
                <h3 id="cookie-modal-title" className="text-lg sm:text-xl font-bold text-white">
                  Manage Cookie Preferences
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close preferences"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              <p className="text-xs sm:text-sm leading-relaxed">
                When you visit our website, information may be stored in your browser in the form of cookies. You can choose which categories of cookies you wish to allow. Strictly necessary cookies are required for basic site operations.
              </p>

              {/* Category 1: Strictly Necessary */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <h4 className="font-bold text-white text-sm">Strictly Necessary Cookies</h4>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  These cookies are required for core functionality such as session security, page navigation, and remembering your privacy choices (<code className="text-slate-300">pcds_cookie_consent</code>). They do not store personally identifiable data and cannot be switched off.
                </p>
                <div className="text-[11px] text-slate-500 pt-1">
                  <span>Lifespan: Up to 1 year</span> • <span>Provider: Primary Care Data Services Ltd</span>
                </div>
              </div>

              {/* Category 2: Google Analytics 4 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Analytics & Measurement Cookies</h4>
                      <span className="text-[11px] text-slate-400">Google Analytics 4 ({GA_MEASUREMENT_ID})</span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most and least popular and see how visitors move around the site. All information collected is aggregated and anonymised.
                </p>

                <div className="text-xs bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Cookie: <strong className="text-white">_ga</strong></span>
                    <span className="text-slate-400">Lifespan: 2 years (730 days)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Cookie: <strong className="text-white">_ga_{GA_MEASUREMENT_ID.replace("G-", "")}</strong></span>
                    <span className="text-slate-400">Lifespan: 2 years (730 days)</span>
                  </div>
                  <div className="text-slate-400 text-[10px] font-sans pt-1">
                    Provider: Google LLC • IP Anonymisation Enabled • Data processing terms aligned with UK GDPR.
                  </div>
                </div>
              </div>

              {/* Direct Link to Policy */}
              <div className="text-xs text-slate-400 p-3 bg-blue-950/30 rounded-xl border border-blue-900/40">
                For detailed disclosures on data protection and regulatory compliance, review our full{" "}
                <Link
                  href="/privacy-notice#section-11"
                  onClick={() => setShowModal(false)}
                  className="text-blue-400 font-bold hover:underline"
                >
                  Privacy Notice & Cookie Policy
                </Link>
                .
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#080E1E] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors text-center"
              >
                Reject Optional Cookies
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors text-center"
                >
                  Save Choices
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/30 text-center"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
