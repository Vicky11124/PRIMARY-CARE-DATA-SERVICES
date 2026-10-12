"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useContactModal } from "@/context/ContactModalContext";

const links = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

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

  const isDark = variant === "dark" || (!scrolled && pathname === "/");

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
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  isDark || scrolled ? "text-slate-300" : "text-slate-600"
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
          <div className="flex flex-col gap-4">
            {links.map((link) => (
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
