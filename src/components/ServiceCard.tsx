import React from "react";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  number?: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: ServiceItem;
  ctaText?: string;
  index?: number;
}

export default function ServiceCard({
  service,
  ctaText = "Request Service Details",
  index = 0,
}: ServiceCardProps) {
  return (
    <div className="service-card-wrapper group">
      {/* Active Continuous Light Beam */}
      <div
        className="service-card-beam"
        style={{ animationDelay: `${(index % 6) * -1.2}s` }}
        aria-hidden="true"
      />

      {/* Inner Card Container */}
      <div className="service-card-inner">
        {/* Ambient bottom lighting glow overlay */}
        <div className="service-card-ambient" aria-hidden="true" />

        {/* Card Content */}
        <div className="relative z-10">
          <div className="mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#09152b] border border-blue-500/20 group-hover:border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-all duration-300 ease-out shadow-inner">
              {service.icon}
            </div>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E5FF] font-mono block mb-2">
            {service.badge}
          </span>

          <h3 className="text-xl sm:text-[22px] font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors duration-300 leading-snug">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-2.5 mb-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300">
                <svg
                  className="w-3.5 h-3.5 text-[#00E5FF] mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card CTA Action Button */}
        <div className="relative z-10 pt-2">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="service-card-cta inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-200 font-semibold text-xs transition-all duration-300 ease-out"
          >
            <span>{ctaText}</span>
            <svg
              className="service-card-cta-arrow w-3.5 h-3.5 text-[#00E5FF] transition-all duration-300 ease-out shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
