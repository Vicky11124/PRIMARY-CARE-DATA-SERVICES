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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080E1E]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/20"
            : isDark
            ? "bg-transparent border-b border-white/10 py-5"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold tracking-[0.22em] text-sm md:text-base uppercase group"
          >
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm inline-block group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
            <span className={isDark || scrolled ? "text-white" : "text-slate-900"}>
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
        <div className="fixed inset-0 z-40 bg-[#080E1E] text-white pt-24 px-6 pb-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
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
