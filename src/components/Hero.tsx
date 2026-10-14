"use client";

import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-36 bg-[#080E1E] text-white overflow-hidden isolate" id="top">
      {/* 1. Full-Bleed Cinematic Background Video (Trimmed by 1s to remove ending words/logo) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="/videos/primary-care-hero-trimmed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Controlled Dark Navy Gradient Overlay: Balanced contrast for centered text while preserving video clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1E]/75 via-[#080E1E]/40 to-[#080E1E]/80 -z-10 pointer-events-none" />

      {/* 3. Centered Hero Content Layer (Positioned Above Video & Overlay) */}
      <div className="container-custom relative z-10 flex flex-col items-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Tag / Category Badge (Entrance 1) - Hidden on mobile viewports */}
          <div className="animate-hero-fade-1 hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md shadow-[0_0_18px_rgba(0,229,255,0.18)] mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
            <span>BUSINESS • HEALTHCARE • TECH • DIGITAL • VA • PROFESSIONAL</span>
          </div>

          {/* Editorial Heading (Entrance 2) - Balanced 68-72px at 1440px desktop */}
          <h1 className="animate-hero-fade-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.5rem] font-extrabold tracking-tight leading-[1.08] mb-8 text-center max-w-4xl mx-auto">
            Better Business Starts With <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.45)]">
              Better Solutions.
            </span>
          </h1>

          {/* Subtitle (Entrance 3) - 720px readable width with comfortable line height */}
          <p className="animate-hero-fade-3 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-[740px] font-normal leading-relaxed mb-10 drop-shadow-sm text-center mx-auto">
            We bring together Business Support, Healthcare Support, Technology, Digital Growth, Virtual Assistance and Professional Services to help organisations work smarter and grow faster.
          </p>

          {/* Action Buttons with Specular Beam Design (Entrance 4) */}
          <div className="animate-hero-fade-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 w-full sm:w-auto">
            <Link
              href="/healthcare-services"
              className="specular-button w-full sm:w-auto group text-sm sm:text-base"
            >
              <span className="specular-beam animate-beam-spin" />
              <span className="specular-inner w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                <span className="specular-shimmer-highlight animate-beam-shimmer" />
                <span>Healthcare Services</span>
                <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/technology-services"
              className="specular-button-secondary w-full sm:w-auto group text-sm sm:text-base"
            >
              <span className="specular-beam-secondary animate-beam-spin" />
              <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                <span>Technology Services →</span>
              </span>
            </Link>
          </div>

          {/* Social Proof / Avatars (Entrance 5) - Proportional presence and spacing */}
          <div className="animate-hero-fade-5 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-6 border-t border-slate-700/60 w-full max-w-lg mx-auto text-center">
            <div className="flex -space-x-2.5 overflow-hidden shrink-0">
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#080E1E] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client portrait"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#080E1E] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client portrait"
              />
              <img
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#080E1E] object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client portrait"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-medium text-center">
              Supporting ambitious organisations across the UK and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Natural Brand Logo Emblem directly covering the video watermark (Hidden on mobile viewport) */}
      <div className="hidden md:block absolute md:bottom-[5.2rem] lg:bottom-[5.8rem] md:right-[1.4rem] lg:right-[1.8rem] xl:right-[2.2rem] z-10 pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Soft dark radial backdrop to completely mask all tips of the watermark */}
          <div className="absolute inset-[-30px] bg-[#080E1E] rounded-full blur-[14px]" />
          <img
            src="/images/logo-emblem.webp"
            alt="Primary Care Data Services"
            className="relative z-10 md:w-[94px] md:h-[94px] lg:w-[102px] lg:h-[102px] object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
