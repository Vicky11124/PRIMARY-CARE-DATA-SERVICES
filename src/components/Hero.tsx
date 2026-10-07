"use client";

import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 hero-gradient text-white overflow-hidden" id="top">
      {/* Background Subtle Grid & Pulsing Ambient Light Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-orb-glow" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content with Orchestrated Staggered Entrance */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag / Category Badge (Entrance 1) */}
            <div className="animate-hero-fade-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>BUSINESS • TECHNOLOGY • GROWTH</span>
            </div>

            {/* Editorial Heading (Entrance 2) */}
            <h1 className="animate-hero-fade-2 text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] mb-6">
              Better Business <br />
              Starts With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]">
                Better Solutions.
              </span>
            </h1>

            {/* Subtitle (Entrance 3) */}
            <p className="animate-hero-fade-3 text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              We bring together professional support, technology, digital growth and virtual assistance to help organisations work smarter and grow faster.
            </p>

            {/* Action Buttons with Specular Beam Design (Entrance 4) */}
            <div className="animate-hero-fade-4 flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/services"
                className="specular-button group"
              >
                <span className="specular-beam animate-beam-spin" />
                <span className="specular-inner">
                  <span className="specular-shimmer-highlight animate-beam-shimmer" />
                  <span>Explore Services</span>
                  <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => openContactModal()}
                className="specular-button-secondary group"
              >
                <span className="specular-beam-secondary animate-beam-spin" />
                <span className="specular-inner-secondary">
                  <span>Talk to Our Team</span>
                </span>
              </button>
            </div>

            {/* Social Proof / Avatars (Entrance 5) */}
            <div className="animate-hero-fade-5 flex items-center gap-3.5 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#080E1E] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client portrait"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#080E1E] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client portrait"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#080E1E] object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client portrait"
                />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Supporting ambitious organisations across the UK and beyond.
              </p>
            </div>
          </div>

          {/* Right Visual: Interactive Dark Dashboard with 4 Floating Feature Pills */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] lg:min-h-[500px]">
            {/* Glowing Backdrop Orb */}
            <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

            {/* Main Central Dashboard Card with Premium Scale Entrance */}
            <div className="animate-hero-card relative w-full max-w-[460px] bg-[#0F172A]/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl shadow-blue-950/60 backdrop-blur-xl z-10 transition-all duration-500 hover:scale-[1.015] hover:border-slate-600">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-[11px] text-slate-400">primarycaredataservices.uk</div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" /> Live
                </span>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 hover:border-slate-700 transition-colors">
                  <div className="text-[11px] text-slate-400 font-medium">Active Ops</div>
                  <div className="text-lg font-bold text-white mt-0.5">99.98%</div>
                  <div className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center">
                    ↑ High uptime
                  </div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 hover:border-slate-700 transition-colors">
                  <div className="text-[11px] text-slate-400 font-medium">Efficiency</div>
                  <div className="text-lg font-bold text-white mt-0.5">+42%</div>
                  <div className="text-[10px] text-blue-400 font-medium mt-1 flex items-center">
                    ↑ Optimized
                  </div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 hover:border-slate-700 transition-colors">
                  <div className="text-[11px] text-slate-400 font-medium">Monthly ROI</div>
                  <div className="text-lg font-bold text-white mt-0.5">3.8x</div>
                  <div className="text-[10px] text-indigo-400 font-medium mt-1 flex items-center">
                    ↑ Verified
                  </div>
                </div>
              </div>

              {/* Chart Visual with Animated Column Growth */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-slate-300 font-semibold">Growth Performance</span>
                  <span className="text-blue-400 font-mono text-[11px]">Q1 - Q4 Target Met</span>
                </div>
                <div className="h-28 flex items-end gap-2 pt-2">
                  <div className="animate-bar-grow flex-1 bg-blue-900/40 hover:bg-blue-600 rounded-t h-[35%] transition-all duration-300" style={{ animationDelay: "0.6s" }} />
                  <div className="animate-bar-grow flex-1 bg-blue-900/40 hover:bg-blue-600 rounded-t h-[48%] transition-all duration-300" style={{ animationDelay: "0.7s" }} />
                  <div className="animate-bar-grow flex-1 bg-blue-900/40 hover:bg-blue-600 rounded-t h-[62%] transition-all duration-300" style={{ animationDelay: "0.8s" }} />
                  <div className="animate-bar-grow flex-1 bg-blue-900/50 hover:bg-blue-600 rounded-t h-[55%] transition-all duration-300" style={{ animationDelay: "0.9s" }} />
                  <div className="animate-bar-grow flex-1 bg-blue-900/60 hover:bg-blue-600 rounded-t h-[75%] transition-all duration-300" style={{ animationDelay: "1.0s" }} />
                  <div className="animate-bar-grow flex-1 bg-blue-900/70 hover:bg-blue-600 rounded-t h-[88%] transition-all duration-300" style={{ animationDelay: "1.1s" }} />
                  <div className="animate-bar-grow flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-[100%] shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all duration-300" style={{ animationDelay: "1.2s" }} />
                </div>
              </div>
            </div>

            {/* 4 Floating Badges with Staggered Slide Entrances + Continuous Ambient Float */}

            {/* Top Left: Operations */}
            <div className="absolute top-2 sm:top-6 -left-2 sm:-left-6 z-20 animate-hero-fade-3">
              <div className="animate-float-slow flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A]/95 border border-slate-700/80 rounded-xl shadow-xl shadow-black/40 backdrop-blur-md hover:border-blue-400 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Operations</div>
                  <div className="text-[11px] text-slate-400">Streamlined processes</div>
                </div>
              </div>
            </div>

            {/* Top Right: People */}
            <div className="absolute top-4 sm:top-8 -right-2 sm:-right-4 z-20 animate-hero-fade-4">
              <div className="animate-float-delayed flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A]/95 border border-slate-700/80 rounded-xl shadow-xl shadow-black/40 backdrop-blur-md hover:border-indigo-400 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">People</div>
                  <div className="text-[11px] text-slate-400">Skilled professionals</div>
                </div>
              </div>
            </div>

            {/* Bottom Left: Technology */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 z-20 animate-hero-fade-4">
              <div className="animate-float-delayed flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A]/95 border border-slate-700/80 rounded-xl shadow-xl shadow-black/40 backdrop-blur-md hover:border-blue-400 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Technology</div>
                  <div className="text-[11px] text-slate-400">Modern systems</div>
                </div>
              </div>
            </div>

            {/* Bottom Right: Growth */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-6 z-20 animate-hero-fade-5">
              <div className="animate-float-slow flex items-center gap-2.5 px-4 py-2.5 bg-[#0F172A]/95 border border-slate-700/80 rounded-xl shadow-xl shadow-black/40 backdrop-blur-md hover:border-emerald-400 transition-all cursor-default">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Growth</div>
                  <div className="text-[11px] text-slate-400">Measurable results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
