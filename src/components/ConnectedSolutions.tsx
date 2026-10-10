"use client";

import React from "react";

export default function ConnectedSolutions() {
  return (
    <div className="w-full flex flex-col items-center justify-center select-none">
      {/* 1:1 Proportional Vector/Graphic Canvas matching reference geometry */}
      <div className="relative w-full max-w-[560px] lg:max-w-[620px] aspect-[900/640] flex items-center justify-center">
        {/* Atmospheric Ambient Glow behind canvas */}
        <div className="absolute w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute w-[35%] h-[35%] bg-[#00E5FF]/15 rounded-full blur-2xl pointer-events-none" />

        <svg
          viewBox="0 0 900 640"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Core Gradient & Specular Filter */}
            <linearGradient id="core-bg-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a1630" />
              <stop offset="50%" stopColor="#061024" />
              <stop offset="100%" stopColor="#030814" />
            </linearGradient>

            <linearGradient id="cyan-blue-beam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>

            <linearGradient id="text-cyan-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            {/* Glowing filter for nodes and particles */}
            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur1" />
              <feGaussianBlur stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* 1. ORBITAL CONCENTRIC DOTTED RINGS (Center: (450, 310)) */}
          {/* Subtle Outer Boundary Orbit */}
          <circle
            cx="450"
            cy="310"
            r="280"
            stroke="#00E5FF"
            strokeOpacity="0.08"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />

          {/* Main Node Orbit (R = 210) */}
          <circle
            cx="450"
            cy="310"
            r="210"
            stroke="#00E5FF"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Mid Guide Orbit (R = 145) */}
          <circle
            cx="450"
            cy="310"
            r="145"
            stroke="#3b82f6"
            strokeOpacity="0.2"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* 2. DOTTED RADIAL CONNECTION RAYS FROM CENTER (450, 310) */}
          {/* Top Ray (Business Support: 450, 100) */}
          <line x1="450" y1="310" x2="450" y2="100" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />
          
          {/* Top-Right Ray (Technology: 631.86, 205) */}
          <line x1="450" y1="310" x2="631.86" y2="205" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />
          
          {/* Bottom-Right Ray (Digital Growth: 631.86, 415) */}
          <line x1="450" y1="310" x2="631.86" y2="415" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />
          
          {/* Bottom Ray (Virtual Assistance: 450, 520) */}
          <line x1="450" y1="310" x2="450" y2="520" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />
          
          {/* Bottom-Left Ray (Professional Services: 268.14, 415) */}
          <line x1="450" y1="310" x2="268.14" y2="415" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />
          
          {/* Top-Left Ray (Healthcare Support: 268.14, 205) */}
          <line x1="450" y1="310" x2="268.14" y2="205" stroke="#00E5FF" strokeOpacity="0.75" strokeWidth="1.8" strokeDasharray="4 5" />

          {/* Glowing Animated Particle Stream Travelling on Rays */}
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 450 100" />
          </circle>
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 631.86 205" begin="0.4s" />
          </circle>
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 631.86 415" begin="0.8s" />
          </circle>
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 450 520" begin="1.2s" />
          </circle>
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 268.14 415" begin="1.6s" />
          </circle>
          <circle r="3.5" fill="#00E5FF" filter="url(#glow-strong)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M 450 310 L 268.14 205" begin="2.0s" />
          </circle>

          {/* 3. GLOWING CYAN BEACON NODES (On Orbit Perimeter) */}
          <circle cx="450" cy="100" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="450" cy="100" r="2.5" fill="#FFFFFF" />

          <circle cx="631.86" cy="205" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="631.86" cy="205" r="2.5" fill="#FFFFFF" />

          <circle cx="631.86" cy="415" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="631.86" cy="415" r="2.5" fill="#FFFFFF" />

          <circle cx="450" cy="520" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="450" cy="520" r="2.5" fill="#FFFFFF" />

          <circle cx="268.14" cy="415" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="268.14" cy="415" r="2.5" fill="#FFFFFF" />

          <circle cx="268.14" cy="205" r="5" fill="#00E5FF" filter="url(#glow-strong)" />
          <circle cx="268.14" cy="205" r="2.5" fill="#FFFFFF" />

          {/* 4. CENTRAL CORE (Center: 450, 310, Radius: 90) */}
          {/* Core Outer Cyan Ambient Glow */}
          <circle cx="450" cy="310" r="92" stroke="#00E5FF" strokeOpacity="0.4" strokeWidth="1.5" className="animate-pulse" />
          <circle cx="450" cy="310" r="90" fill="url(#core-bg-grad)" stroke="#00E5FF" strokeOpacity="0.85" strokeWidth="2.5" filter="url(#card-shadow)" />

          {/* Core Content: Emblem Image, Titles, Divider */}
          <g transform="translate(450, 310)">
            {/* Emblem Image */}
            <image
              href="/images/logo-emblem.png"
              x="-20"
              y="-66"
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Title Primary Care */}
            <text
              x="0"
              y="-4"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="14.5"
              fontWeight="900"
              letterSpacing="0.06em"
            >
              PRIMARY CARE
            </text>

            {/* Title Data Services */}
            <text
              x="0"
              y="14"
              textAnchor="middle"
              fill="url(#text-cyan-grad)"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="14.5"
              fontWeight="900"
              letterSpacing="0.06em"
            >
              DATA SERVICES
            </text>

            {/* Thin Divider Line */}
            <line x1="-54" y1="27" x2="54" y2="27" stroke="#334155" strokeWidth="1" />

            {/* Subtitle Central Core */}
            <text
              x="0"
              y="42"
              textAnchor="middle"
              fill="#94a3b8"
              fontFamily="monospace, sans-serif"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.22em"
            >
              CENTRAL CORE
            </text>
          </g>

          {/* 5. SIX SURROUNDING CARDS (Card Size: 200 x 64, Perfectly Symmetrical) */}

          {/* CARD 1: BUSINESS SUPPORT (Top: 450, 100 -> Box: x: 350, y: 68) */}
          <g transform="translate(350, 68)" filter="url(#card-shadow)" className="cursor-default">
            {/* Card Background Container */}
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#0b162c"
              fillOpacity="0.95"
              stroke="#2563EB"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            {/* Icon Box */}
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#1e3a8a" fillOpacity="0.4" stroke="#3b82f6" strokeOpacity="0.4" />
            <path
              d="M26 40V24a2 2 0 012-2h8a2 2 0 012 2v16m-12 0h12m-6-10h.01m-3-4h.01m6 0h.01m-3 4h.01m6 0h.01m-6 6v-3a1 1 0 011-1h2a1 1 0 011 1v3"
              stroke="#60a5fa"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Card Titles */}
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="700">
              Business Support
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Operations & Mgmt
            </text>
          </g>

          {/* CARD 2: TECHNOLOGY (Top-Right: 631.86, 205 -> Box: x: 632, y: 173) */}
          <g transform="translate(632, 173)" filter="url(#card-shadow)" className="cursor-default">
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#09142b"
              fillOpacity="0.95"
              stroke="#0284c7"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#0369a1" fillOpacity="0.35" stroke="#38bdf8" strokeOpacity="0.4" />
            <path
              d="M28 28l-4 4 4 4m8-8l4 4-4 4m-3-10l-2 12"
              stroke="#00E5FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="700">
              Technology
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Software & Digital
            </text>
          </g>

          {/* CARD 3: DIGITAL GROWTH (Bottom-Right: 631.86, 415 -> Box: x: 632, y: 383) */}
          <g transform="translate(632, 383)" filter="url(#card-shadow)" className="cursor-default">
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#0b162c"
              fillOpacity="0.95"
              stroke="#00E5FF"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#0e7490" fillOpacity="0.35" stroke="#22d3ee" strokeOpacity="0.4" />
            <path
              d="M26 38l6-6 4 4 8-8m0 0h-6m6 0v6"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="700">
              Digital Growth
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Marketing & SEO
            </text>
          </g>

          {/* CARD 4: VIRTUAL ASSISTANCE (Bottom: 450, 520 -> Box: x: 350, y: 488) */}
          <g transform="translate(350, 488)" filter="url(#card-shadow)" className="cursor-default">
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#0b162c"
              fillOpacity="0.95"
              stroke="#2563EB"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#1d4ed8" fillOpacity="0.35" stroke="#60a5fa" strokeOpacity="0.4" />
            <path
              d="M32 28a4 4 0 11-8 0 4 4 0 018 0zm-8 10a6 6 0 0112 0v2H24v-2z"
              stroke="#60a5fa"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13.5" fontWeight="700">
              Virtual Assistance
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Admin & Client Ops
            </text>
          </g>

          {/* CARD 5: PROFESSIONAL SERVICES (Bottom-Left: 268.14, 415 -> Box: x: 68, y: 383) */}
          <g transform="translate(68, 383)" filter="url(#card-shadow)" className="cursor-default">
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#0b162c"
              fillOpacity="0.95"
              stroke="#6366f1"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#4338ca" fillOpacity="0.35" stroke="#818cf8" strokeOpacity="0.4" />
            <path
              d="M34 38v-2a4 4 0 00-4-4H26a4 4 0 00-4 4v2m12-10a4 4 0 11-8 0 4 4 0 018 0zm8 10v-1a3 3 0 00-3-3m-1-5a3 3 0 010 6"
              stroke="#a5b4fc"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700">
              Professional Services
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Recruitment & Vetting
            </text>
          </g>

          {/* CARD 6: HEALTHCARE SUPPORT (Top-Left: 268.14, 205 -> Box: x: 68, y: 173) */}
          <g transform="translate(68, 173)" filter="url(#card-shadow)" className="cursor-default">
            <rect
              width="200"
              height="64"
              rx="14"
              fill="#0b162c"
              fillOpacity="0.95"
              stroke="#06b6d4"
              strokeOpacity="0.45"
              strokeWidth="1.5"
            />
            <rect x="12" y="12" width="40" height="40" rx="10" fill="#0e7490" fillOpacity="0.35" stroke="#22d3ee" strokeOpacity="0.4" />
            <path
              d="M32 23l-8 3v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10v-6l-8-3zm-2 9h4m-2-2v4"
              stroke="#22d3ee"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="62" y="31" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700">
              Healthcare Support
            </text>
            <text x="62" y="47" fill="#94a3b8" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="400">
              Practice & Governance
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Ambient Tagline (Direct Match to Reference Image) */}
      <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 sm:whitespace-nowrap px-2 text-center">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse shrink-0" />
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-slate-400 uppercase leading-snug">
          ONE PARTNER • MULTIPLE SOLUTIONS • CONNECTED EXPERTISE
        </span>
      </div>
    </div>
  );
}
