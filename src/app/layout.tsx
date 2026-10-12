import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primary Care Data Services | Healthcare, Technology, Business & Growth",
  description: "One partner for healthcare support, technology, business management, digital growth, and virtual assistance across the UK.",
  icons: { icon: "/favicon.webp", apple: "/favicon.webp" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

import { Suspense } from "react";
import { ContactModalProvider } from "@/context/ContactModalContext";
import WhatsAppCTC from "@/components/WhatsAppCTC";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ContactModalProvider>
          {children}
          <WhatsAppCTC />
          <CookieConsent />
        </ContactModalProvider>
      </body>
    </html>
  );
}
