"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

type Service = {
  id: string;
  category: "Business Support" | "Healthcare Support" | "Technology" | "Digital Growth" | "Virtual Assistance";
  categoryKey: "business" | "healthcare" | "technology" | "growth" | "virtual";
  title: string;
  description: string;
  slug: string;
  iconPath: string;
};

const servicesData: Service[] = [
  // 1. PRACTICE MANAGEMENT (Healthcare Support)
  {
    id: "prac",
    category: "Healthcare Support",
    categoryKey: "healthcare",
    title: "Practice Management",
    description: "Operational support for GP practices, dental clinics and healthcare providers.",
    slug: "practice-management",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: "hr",
    category: "Business Support",
    categoryKey: "business",
    title: "HR & Recruitment",
    description: "Attract, retain and develop the right talent for your company culture.",
    slug: "hr-recruitment",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: "fp",
    category: "Business Support",
    categoryKey: "business",
    title: "Finance & Payroll",
    description: "Accurate, compliant and efficient financial management & payroll runs.",
    slug: "finance-payroll",
    iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "cp",
    category: "Business Support",
    categoryKey: "business",
    title: "Compliance",
    description: "Ensure rigorous UK regulatory adherence, governance and audit readiness.",
    slug: "compliance",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "pm",
    category: "Business Support",
    categoryKey: "business",
    title: "Project Management",
    description: "Structured roadmap delivery to execute key initiatives on time and budget.",
    slug: "project-management",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },

  // 2. BUSINESS MANAGEMENT (Business Support)
  {
    id: "bm",
    category: "Business Support",
    categoryKey: "business",
    title: "Business Management",
    description: "Strategic support for day-to-day operations and long-term growth.",
    slug: "business-management",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: "cg",
    category: "Healthcare Support",
    categoryKey: "healthcare",
    title: "Clinical Governance",
    description: "Ensure safe, high-quality patient care and full compliance protocols.",
    slug: "clinical-governance",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "mr",
    category: "Healthcare Support",
    categoryKey: "healthcare",
    title: "Summarising & Digitisation of Records",
    description: "Expert Lloyd George paper file scanning, electronic medical record summarising, clinical coding, and seamless EMIS/SystmOne integration.",
    slug: "medical-records",
    iconPath: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
  },
  {
    id: "wo",
    category: "Healthcare Support",
    categoryKey: "healthcare",
    title: "Workforce Optimisation",
    description: "Locum booking, clinical rota management, DBS vetting and staff compliance.",
    slug: "workforce-optimisation",
    iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },

  // 3. TECHNOLOGY
  {
    id: "wd",
    category: "Technology",
    categoryKey: "technology",
    title: "Website Development",
    description: "High-performance bespoke websites designed to convert and scale your brand.",
    slug: "website-development",
    iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    id: "cs",
    category: "Technology",
    categoryKey: "technology",
    title: "Custom Software",
    description: "Tailored software solutions to solve complex business operations.",
    slug: "custom-software",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    id: "crm",
    category: "Technology",
    categoryKey: "technology",
    title: "CRM Development",
    description: "Manage customers, operations, pipelines and data in one unified place.",
    slug: "crm-development",
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    id: "ba",
    category: "Technology",
    categoryKey: "technology",
    title: "Business Automation",
    description: "Automate repetitive tasks and seamlessly connect your internal software stack.",
    slug: "business-automation",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "uiux",
    category: "Technology",
    categoryKey: "technology",
    title: "UI/UX Design",
    description: "World-class user interfaces and intuitive user journeys that build trust.",
    slug: "ui-ux",
    iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },

  // 4. DIGITAL GROWTH
  {
    id: "dm",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "Digital Marketing",
    description: "Data-driven strategies to help your business get found, attract customers and scale.",
    slug: "digital-marketing",
    iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  },
  {
    id: "seo",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "SEO",
    description: "Improve keyword rankings, technical architecture and attract inbound organic leads.",
    slug: "seo",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    id: "meta",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "Meta Ads",
    description: "Targeted advertising on Facebook & Instagram for high-converting lead generation.",
    slug: "meta-ads",
    iconPath: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
  },
  {
    id: "gads",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "Google Ads",
    description: "Capture high-intent customers at the exact moment they search for your services.",
    slug: "google-ads",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    id: "lg",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "Lead Generation",
    description: "Turn casual web traffic into qualified, high-value commercial enquiries.",
    slug: "lead-generation",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: "sm",
    category: "Digital Growth",
    categoryKey: "growth",
    title: "Social Media",
    description: "Build your brand authority and actively engage your core audience across channels.",
    slug: "social-media",
    iconPath: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  },

  // 5. VIRTUAL ASSISTANCE
  {
    id: "va-main",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Virtual Assistance",
    description: "Reliable support for administrative, customer service, and day-to-day coordination.",
    slug: "virtual-assistance",
    iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    id: "va-admin",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Administrative Support",
    description: "Diaries, documents, scheduling and workflow execution for busy executives.",
    slug: "administrative-support",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    id: "va-cs",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Customer Support",
    description: "Friendly, prompt and professional customer service across helpdesks and live chat.",
    slug: "customer-support",
    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    id: "va-de",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Data Entry",
    description: "Accurate database entry, cleaning, document digitization, and records filing.",
    slug: "data-entry",
    iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    id: "va-em",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Email Management",
    description: "Inbox triage, VIP priority flagging, drafting responses, and calendar booking.",
    slug: "email-management",
    iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: "va-res",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Research",
    description: "Detailed market intelligence, competitor benchmarking, and supplier briefings.",
    slug: "research",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    id: "va-bo",
    category: "Virtual Assistance",
    categoryKey: "virtual",
    title: "Back Office Support",
    description: "Comprehensive end-to-end operational execution for seamless day-to-day peace of mind.",
    slug: "back-office-support",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

const tabs = [
  { label: "All", key: "all" },
  { label: "Business Solutions", key: "business" },
  { label: "Healthcare Support", key: "healthcare" },
  { label: "Technology", key: "technology" },
  { label: "Digital Growth", key: "growth" },
  { label: "Virtual Assistance", key: "virtual" },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "all";
  const [activeTab, setActiveTab] = useState(initialTab);

  const filtered =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.categoryKey === activeTab);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A]">
      <Navbar variant="dark" />

      {/* Services Top Banner with Homepage Hero Brand Blue Background */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 hero-gradient text-white overflow-hidden">
        {/* Background Grid & Light Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>EXPERTISE & SERVICE DIRECTORY</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
              Comprehensive Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                Modern Businesses.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
              From operational management and healthcare compliance to custom software and digital growth, explore our integrated capabilities built for UK organisations.
            </p>

            {/* Primary Action Button with Specular Beam Design */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="specular-button group"
              >
                <span className="specular-beam animate-beam-spin" />
                <span className="specular-inner">
                  <span className="specular-shimmer-highlight animate-beam-shimmer" />
                  <span>Book a Discovery Call</span>
                  <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Quick Quicklinks Badges */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {tabs.slice(1).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeTab === t.key
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#00E5FF]/40"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Pills */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="container-custom">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#080E1E] text-white shadow-md shadow-slate-900/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Column Clean Card Grid matching reference Middle Screen */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between card-hover-effect group shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Clean Electric Blue Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.iconPath} />
                    </svg>
                  </div>

                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ServicesContent />
    </Suspense>
  );
}
