"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";

interface Article {
  id: string;
  title: string;
  category: "Automation" | "Technology" | "Digital Growth" | "Healthcare Operations";
  readTime: string;
  summary: string;
  highlights: string[];
  image: string;
}

const articlesData: Article[] = [
  {
    id: "sme-automation",
    title: "How Organisations Can Automate Repetitive Business Workflows",
    category: "Automation",
    readTime: "4 min read",
    summary:
      "A pragmatic overview of identify-and-automate strategies that save administrative hours across invoicing, CRM updates, and team notifications.",
    highlights: [
      "Identifying high-frequency manual bottleneck tasks",
      "Connecting standalone SaaS apps with automated triggers",
      "Setting up audit logs to prevent data discrepancies",
    ],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "modern-web-performance",
    title: "Why High-Speed Web Platforms Drive Measurably Higher Inquiries",
    category: "Technology",
    readTime: "5 min read",
    summary:
      "Understanding the impact of page latency, clean UI hierarchy, and mobile optimization on user trust and conversion rates.",
    highlights: [
      "Sub-second load times and user retention metrics",
      "Streamlining the path to consultation booking",
      "Implementing structured schema for modern search indexing",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "digital-lead-pipeline",
    title: "Building an Integrated Digital Inbound Pipeline for UK Services",
    category: "Digital Growth",
    readTime: "6 min read",
    summary:
      "Combining high-intent Google Search campaigns, targeted social ad creative, and instant CRM routing to generate qualified business inquiries.",
    highlights: [
      "Aligning search intent with clear landing page messaging",
      "Fast lead response protocols via automated alerts",
      "Measuring cost-per-qualified-conversation over vanity metrics",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "clinical-audit-readiness",
    title: "Clinical Records Digitisation & Audit Evidence Preparation",
    category: "Healthcare Operations",
    readTime: "5 min read",
    summary:
      "Best practices for transitioning legacy paper records into structured electronic records with complete GDPR and Caldicott compliance.",
    highlights: [
      "Organised digital evidence vaults for single-assessment frameworks",
      "Secure scanning, OCR indexing, and dual-verification workflows",
      "Staff governance protocols for role-based record access",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "executive-virtual-assistants",
    title: "Maximising Leadership Bandwidth With Dedicated UK Virtual Support",
    category: "Healthcare Operations",
    readTime: "4 min read",
    summary:
      "How senior leaders delegate diary management, inbox triage, and stakeholder coordination to trained executive assistants.",
    highlights: [
      "Effective onboarding and asynchronous communication norms",
      "Standard Operating Procedures (SOPs) for routine tasks",
      "Reclaiming 15+ hours weekly for strategic executive focus",
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "crm-architecture",
    title: "Structuring Your CRM to Prevent Lead Slippage",
    category: "Technology",
    readTime: "4 min read",
    summary:
      "Key architecture rules for organizing customer pipelines, automated follow-ups, and lifecycle milestone tracking.",
    highlights: [
      "Standardizing custom lead qualification fields",
      "Automated follow-up triggers for stale opportunities",
      "Executive pipeline visibility dashboards",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Automation", "Technology", "Digital Growth", "Healthcare Operations"] as const;

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles =
    activeCategory === "All"
      ? articlesData
      : articlesData.filter((art) => art.category === activeCategory);

  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#050B17] text-white">
        {/* ==================================================
            HERO SECTION with Brand Blue Gradient & Insights Visual
            ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 hero-gradient text-white overflow-hidden border-b border-slate-800">
          {/* Subtle Grid & Light Orbs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>KNOWLEDGE & PLAYBOOKS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Insights & Operational{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                  Playbooks.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                Practical guides, automation frameworks, and modern strategies to help your organisation scale efficiently.
              </p>

              {/* Category Filter Pills in Hero */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#00E5FF]/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 md:py-28 bg-[#070E1E]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase bg-[#050B17]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#00E5FF]/30">
                        {item.category}
                      </span>
                      <span className="absolute top-4 right-4 text-[10px] font-medium text-slate-300 bg-[#050B17]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700">
                        {item.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {item.summary}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-slate-800/80">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Key Takeaways:
                        </span>
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <span>Discuss Implementation</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FinalCta />
      <Footer />
    </>
  );
}
