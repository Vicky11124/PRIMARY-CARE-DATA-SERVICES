"use client";

import Link from "next/link";
import { useContactModal } from "@/context/ContactModalContext";

export default function FinalCta() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-24 md:py-32 cta-gradient text-white relative overflow-hidden" id="contact">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="section-tag section-tag-dark">
            <span>DISCUSS YOUR REQUIREMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Healthcare or Technology —{" "}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Let&apos;s Find the Right Solution.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
            Whether you need to streamline practice administration or build a digital system, tell us what your organisation needs and we&apos;ll help you move forward.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => openContactModal()}
              className="specular-button group"
            >
              <span className="specular-beam animate-beam-spin" />
              <span className="specular-inner">
                <span className="specular-shimmer-highlight animate-beam-shimmer" />
                <span>Start a Conversation</span>
                <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            <Link
              href="/healthcare-services"
              className="specular-button-secondary group"
            >
              <span className="specular-beam-secondary animate-beam-spin" />
              <span className="specular-inner-secondary">
                <span>View Healthcare Services</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
