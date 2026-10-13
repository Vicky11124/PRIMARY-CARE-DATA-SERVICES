"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useContactModal } from "@/context/ContactModalContext";

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close dropdown on pathname change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isDark = variant === "dark" || (!scrolled && pathname === "/");

  const otherLinks = [
    { label: "Technology", href: "/technology" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#080E1E] border-b border-white/10 py-3.5 shadow-lg shadow-black/20"
              : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm"
            : isDark
            ? "bg-[#080E1E] border-b border-white/10 py-5"
            : "bg-white border-b border-slate-200 py-5 shadow-sm"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 font-bold tracking-[0.08em] sm:tracking-[0.16em] text-xs sm:text-sm md:text-base uppercase group min-w-0 shrink"
          >
            <img
              src="/images/logo-emblem.webp"
              alt="Primary Care Data Services"
              className="h-7 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(0,229,255,0.35)] shrink-0"
            />
            <span className={`truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none ${isDark || scrolled ? "text-white" : "text-slate-900"}`}>
              PRIMARY CARE DATA SERVICES
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
            {/* Services Dropdown Trigger & Menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 py-1.5 transition-colors duration-200 hover:text-blue-500 cursor-pointer ${
                  pathname.startsWith("/services") ||
                  pathname === "/healthcare-services" ||
                  pathname === "/technology-services"
                    ? "text-blue-400 font-semibold"
                    : isDark || scrolled
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu (2-Column Desktop Grid) */}
              {servicesDropdownOpen && (
                <div
                  role="menu"
                  aria-orientation="vertical"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-[#0B132B]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/60 p-4 text-white overflow-hidden">
                    <div className="grid grid-cols-2 gap-3.5">
                      {/* Option 1: Healthcare Services */}
                      <Link
                        href="/healthcare-services"
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex flex-col p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                            Healthcare Services
                          </h4>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-3 flex-1">
                          Healthcare administration and operational support.
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors pt-1">
                          <span>Explore Healthcare Services</span>
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>

                      {/* Option 2: Technology Services */}
                      <Link
                        href="/technology-services"
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex flex-col p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                            Technology Services
                          </h4>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-3 flex-1">
                          Software, technology, and digital solutions for growing organisations.
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors pt-1">
                          <span>Explore Technology Services</span>
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom quick link to full catalogue */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between px-2 text-xs text-slate-400">
                      <span>Looking for our combined matrix?</span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-blue-400 hover:text-white font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>View All Services Overview</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  pathname === link.href
                    ? "text-blue-400 font-semibold"
                    : isDark || scrolled
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal()}
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                isDark && !scrolled
                  ? "bg-white text-slate-900 hover:bg-blue-600 hover:text-white shadow-md shadow-white/10"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/30"
              }`}
            >
              Let&apos;s Talk
            </button>

            <button
              type="button"
              className={`md:hidden p-2 rounded-lg border transition-colors ${
                isDark || scrolled
                  ? "border-slate-700 text-white hover:bg-slate-800"
                  : "border-slate-300 text-slate-900 hover:bg-slate-100"
              }`}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080E1E] text-white pt-24 px-6 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {/* Services Expandable Item */}
            <div className="border-b border-slate-800 py-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-2xl font-medium tracking-tight py-2 hover:text-blue-400 text-left"
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-2 py-2 space-y-3 bg-slate-900/40 rounded-xl my-2 border border-slate-800/80 animate-in fade-in duration-150">
                  <Link
                    href="/healthcare-services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="text-sm font-bold text-white">
                      Healthcare Services
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Healthcare administration and operational support.
                    </p>
                  </Link>

                  <Link
                    href="/technology-services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="text-sm font-bold text-white">
                      Technology Services
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Software, technology, and digital solutions for growing organisations.
                    </p>
                  </Link>

                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 text-xs text-slate-400 hover:text-white font-medium"
                  >
                    View All Services Overview →
                  </Link>
                </div>
              )}
            </div>

            {/* Other Mobile Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium tracking-tight py-3 border-b border-slate-800 hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal();
              }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg text-center cursor-pointer"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
