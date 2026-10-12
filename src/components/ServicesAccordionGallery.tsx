"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface AccordionItem {
  id: string;
  verticalTitle: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: "business",
    verticalTitle: "BUSINESS SUPPORT",
    title: "BUSINESS SUPPORT",
    description: "Business management, HR & recruitment, finance & payroll, compliance and project management.",
    image: "/images/business-support.webp",
    slug: "business-management",
  },
  {
    id: "healthcare",
    verticalTitle: "HEALTHCARE SUPPORT",
    title: "HEALTHCARE SUPPORT",
    description: "Practice management, summarising & digitisation of records, clinical governance, CQC compliance and clinical coding.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    slug: "healthcare-support",
  },
  {
    id: "technology",
    verticalTitle: "TECHNOLOGY & SOFTWARE",
    title: "TECHNOLOGY & SOFTWARE",
    description: "Website development, custom software, CRM systems, business automation and UI/UX.",
    image: "/images/technology-software.webp",
    slug: "website-development",
  },
  {
    id: "growth",
    verticalTitle: "DIGITAL GROWTH",
    title: "DIGITAL GROWTH",
    description: "Digital marketing, SEO, Meta Ads, Google Ads, social media and lead generation.",
    image: "/images/digital-marketing.webp",
    slug: "digital-marketing",
  },
  {
    id: "virtual",
    verticalTitle: "VIRTUAL ASSISTANCE",
    title: "VIRTUAL ASSISTANCE",
    description: "Administrative support, customer support, scheduling, email management and data management.",
    image: "/images/virtual-assistance.webp",
    slug: "virtual-assistance",
  },
  {
    id: "professional",
    verticalTitle: "PROFESSIONAL SERVICES",
    title: "PROFESSIONAL SERVICES",
    description: "Recruitment, training & development, policies & procedures, professional vetting and specialist support.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    slug: "compliance",
  },
];

const SLIDE_DURATION = 2800; // 2.8 seconds per slide for faster, dynamic showcase

export default function ServicesAccordionGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timerKey, setTimerKey] = useState(0);

  // Direct select handler
  const selectSlide = (idx: number) => {
    setActiveIndex(idx);
    setTimerKey((k) => k + 1);
  };

  // Auto-play Interval (pauses when hovering the gallery)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % accordionItems.length);
      setTimerKey((k) => k + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, timerKey]);

  return (
    <section className="py-20 md:py-28 bg-[#050B17] text-white relative overflow-hidden" id="services-gallery">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00E5FF] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Interactive Service Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Explore Our Core Capabilities.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Hover or click any pillar to explore how our specialized solutions accelerate your business operations and digital reach.
          </p>
        </div>

        {/* 60FPS Jitter-Free Accordion Gallery */}
        <div
          className="flex flex-col lg:flex-row gap-2.5 sm:gap-4 h-[520px] sm:h-[560px] md:h-[600px] w-full items-stretch"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {accordionItems.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => selectSlide(idx)}
                onMouseEnter={() => selectSlide(idx)}
                style={{
                  flex: isActive ? "5.5 1 0%" : "1 1 0%",
                  transition: "flex 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
                  willChange: "flex",
                }}
                className={`relative rounded-[22px] sm:rounded-[28px] overflow-hidden cursor-pointer select-none border transform-gpu group transition-all ${
                  isActive
                    ? "border-[#00E5FF]/40 shadow-2xl shadow-blue-950/80"
                    : "border-slate-800/80 hover:border-slate-700 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Background Image with Smooth Zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out transform-gpu ${
                    isActive ? "scale-105 filter brightness-95" : "scale-100 filter brightness-[0.35]"
                  }`}
                  loading="lazy"
                />

                {/* Smooth Vignette Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isActive
                      ? "bg-gradient-to-t from-[#050B17] via-[#050B17]/40 to-transparent"
                      : "bg-[#050B17]/70 group-hover:bg-[#050B17]/50"
                  }`}
                />

                {/* Top Subtle Progress Bar on Active Card (Hidden on mobile) */}
                {isActive && (
                  <div className="hidden sm:block absolute top-0 left-0 right-0 h-1 bg-slate-800/40 z-20 overflow-hidden">
                    <div
                      key={`card-progress-${timerKey}`}
                      className={`h-full bg-gradient-to-r from-[#00E5FF] to-cyan-300 shadow-[0_0_12px_rgba(0,229,255,1)] animate-progress-fill ${
                        !isPlaying ? "paused-animation" : ""
                      }`}
                    />
                  </div>
                )}

                {/* Expanded Card Content */}
                <div
                  className={`absolute inset-0 p-4 sm:p-10 flex flex-col justify-end z-10 overflow-hidden transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto delay-200"
                      : "opacity-0 translate-y-4 pointer-events-none duration-200"
                  }`}
                >
                  <div className="w-full max-w-[480px] shrink-0">
                    <div className="w-6 sm:w-8 h-[2px] sm:h-[3px] bg-[#00E5FF] mb-2.5 sm:mb-4 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />

                    <h3 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white mb-1.5 sm:mb-2.5 line-clamp-1 font-sans">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-base text-slate-300 leading-relaxed mb-3 sm:mb-6 font-medium line-clamp-2 sm:line-clamp-none">
                      {item.description}
                    </p>

                    <div>
                      <Link
                        href={`/services/${item.slug}`}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#00E5FF] hover:bg-[#38bdf8] text-[#050B17] text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#00E5FF]/30"
                      >
                        <span>Explore Capability</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Collapsed Inactive Column Label */}
                <div
                  className={`absolute inset-0 flex items-center justify-center p-3 sm:p-4 z-10 transition-opacity duration-300 ${
                    !isActive
                      ? "opacity-100 pointer-events-auto delay-150"
                      : "opacity-0 pointer-events-none duration-100"
                  }`}
                >
                  <span
                    className="text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-slate-300 uppercase whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180 select-none group-hover:text-[#00E5FF] transition-colors drop-shadow"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    {item.verticalTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
