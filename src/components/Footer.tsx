"use client";

import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";
import { CONTACT_CONFIG } from "@/config/contactConfig";

export default function Footer() {
  const { openContactModal } = useContactModal();
  return (
    <footer className="bg-[#060B18] text-slate-400 py-16 md:py-20 border-t border-slate-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-850">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold tracking-[0.22em] text-sm uppercase text-white mb-4"
            >
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm inline-block shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
              <span>PRIMARY CARE DATA SERVICES</span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              One partner for business, technology, operations and growth. Delivering strategic UK advisory and managed execution.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 flex items-center justify-center transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links & Contact Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/services?tab=business" className="hover:text-blue-400 transition-colors">
                    Business Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services?tab=healthcare" className="hover:text-blue-400 transition-colors">
                    Healthcare Support
                  </Link>
                </li>
                <li>
                  <Link href="/services?tab=technology" className="hover:text-blue-400 transition-colors">
                    Technology & Software
                  </Link>
                </li>
                <li>
                  <Link href="/services?tab=growth" className="hover:text-blue-400 transition-colors">
                    Digital Growth
                  </Link>
                </li>
                <li>
                  <Link href="/services?tab=virtual" className="hover:text-blue-400 transition-colors">
                    Virtual Assistance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-blue-400 transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="hover:text-blue-400 transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-blue-400 transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Address (Replaced Resources) */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
                Contact & Office
              </h4>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Address
                  </div>
                  <p className="text-slate-200 font-semibold leading-relaxed">
                    13 Clarence Road <br />
                    CR0 2EN
                  </p>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Phone Number
                  </div>
                  <a
                    href={CONTACT_CONFIG.phoneTel}
                    className="text-white hover:text-[#00E5FF] font-bold text-sm transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{CONTACT_CONFIG.phoneNumber}</span>
                  </a>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_CONFIG.emailAddress}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-xs break-all block"
                  >
                    {CONTACT_CONFIG.emailAddress}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Primary Care Data Services. All rights reserved.</p>
          <p className="font-medium text-slate-400">Built for a smarter tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
