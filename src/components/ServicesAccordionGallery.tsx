"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
    description: "Streamlined operations, documentation, scheduling and process improvement handled end-to-end.",
    image: "/images/business-support.jpg",
    slug: "business-management",
  },
  {
    id: "technology",
    verticalTitle: "TECHNOLOGY & SOFTWARE",
    title: "TECHNOLOGY & SOFTWARE",
    description: "High-performance websites, custom software, CRM systems and scalable digital platforms.",
    image: "/images/technology-software.jpg",
    slug: "website-development",
  },
  {
    id: "marketing",
    verticalTitle: "DIGITAL MARKETING",
    title: "DIGITAL MARKETING",
    description: "Data-driven marketing strategies to increase visibility, generate qualified leads and drive real results.",
    image: "/images/digital-marketing.jpg",
    slug: "digital-marketing",
  },
  {
    id: "growth",
    verticalTitle: "BUSINESS GROWTH",
    title: "BUSINESS GROWTH & ANALYTICS",
    description: "Performance metrics, high-conversion funnels, revenue analytics and scalable expansion strategies.",
    image: "/images/business-growth.jpg",
    slug: "digital-marketing",
  },
  {
    id: "virtual",
    verticalTitle: "VIRTUAL ASSISTANCE",
    title: "VIRTUAL ASSISTANCE",
    description: "Reliable administrative, client support, and operational assistance to help you focus on growth.",
    image: "/images/virtual-assistance.jpg",
    slug: "virtual-assistance",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide for relaxed, smooth reading

export default function ServicesAccordionGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timerKey, setTimerKey] = useState(0); // Changes to restart CSS animation smoothly

  // Smooth next slide handler
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % accordionItems.length);
    setTimerKey((k) => k + 1);
  }, []);

  // Smooth prev slide handler
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + accordionItems.length) % accordionItems.length);
    setTimerKey((k) => k + 1);
  }, []);

  // Direct select handler
  const selectSlide = (idx: number) => {
    setActiveIndex(idx);
    setTimerKey((k) => k + 1);
  };

  // Robust Auto-play Interval with Smooth Reset
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, timerKey]);

  return (
    <section className="py-20 md:py-28 bg-[#050B17] text-white relative overflow-hidden" id="services-gallery">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header with Play/Pause & Direct Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
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

          {/* Controls Bar */}
          <div className="flex items-center gap-4 self-start md:self-end shrink-0">
            {/* Play/Pause & Step Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-full p-1 shadow-inner">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer active:scale-90"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:bg-slate-800 transition-all cursor-pointer active:scale-90"
                title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer active:scale-90"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicator Pills with Smooth Progress Fill */}
            <div className="flex items-center gap-2">
              {accordionItems.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => selectSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                    className={`relative h-2 rounded-full overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isActive ? "w-10 bg-slate-800" : "w-2.5 bg-slate-800 hover:bg-slate-700"
                    }`}
                  >
                    {isActive && (
                      <span
                        key={`pill-progress-${timerKey}`}
                        className={`absolute inset-y-0 left-0 bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.9)] rounded-full animate-progress-fill ${
                          !isPlaying ? "paused-animation" : ""
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 60FPS Jitter-Free Accordion Gallery */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-[560px] md:h-[600px] w-full items-stretch">
          {accordionItems.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => selectSlide(idx)}
                style={{
                  flex: isActive ? "5.5 1 0%" : "1 1 0%",
                  transition: "flex 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease",
                  willChange: "flex",
                }}
                className={`relative rounded-[28px] overflow-hidden cursor-pointer select-none border transform-gpu group transition-all ${
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

                {/* Top Subtle Progress Bar on Active Card */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/40 z-20 overflow-hidden">
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
                  className={`absolute inset-0 p-6 sm:p-10 flex flex-col justify-end z-10 overflow-hidden transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto delay-200"
                      : "opacity-0 translate-y-4 pointer-events-none duration-200"
                  }`}
                >
                  <div className="w-full max-w-[480px] shrink-0">
                    <div className="w-8 h-[3px] bg-[#00E5FF] mb-4 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase text-white mb-2.5 whitespace-nowrap overflow-hidden text-ellipsis font-sans">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>

                    <div>
                      <Link
                        href={`/services/${item.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00E5FF] hover:bg-[#38bdf8] text-[#050B17] text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#00E5FF]/30"
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
                  className={`absolute inset-0 flex items-center justify-center p-4 z-10 transition-opacity duration-300 ${
                    !isActive
                      ? "opacity-100 pointer-events-auto delay-150"
                      : "opacity-0 pointer-events-none duration-100"
                  }`}
                >
                  <span
                    className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-300 uppercase whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180 select-none group-hover:text-[#00E5FF] transition-colors drop-shadow"
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
