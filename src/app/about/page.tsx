import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "About Us | Primary Care Data Services",
  description:
    "Learn about Primary Care Data Services — an integrated UK partner delivering business support, healthcare management, software, and growth advisory.",
};

const corePillars = [
  {
    title: "Integrated Expertise",
    description:
      "We combine operations, clinical support frameworks, bespoke software engineering, and digital growth under a unified strategy.",
  },
  {
    title: "Agile & Scalable Support",
    description:
      "Scale specialized headcount, virtual executive assistants, and operational capacity up or down according to your exact requirements.",
  },
  {
    title: "Technology First Approach",
    description:
      "Every workflow is built around intelligent automation, modern system integrations, and transparent reporting.",
  },
  {
    title: "UK Regulated & Aligned",
    description:
      "Fully compliant with UK data privacy (GDPR), CQC regulatory standards, and 24/7 operational support.",
  },
  {
    title: "Dedicated Account Specialists",
    description:
      "Direct communication with dedicated professionals who know your organisation, team, and objectives by name.",
  },
  {
    title: "Long-Term Compounding Value",
    description:
      "We focus on sustainable operational improvements and resilient systems that create enduring value.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Deep dive into your operational workflows, bottlenecks, and organisational goals.",
  },
  {
    num: "02",
    title: "Plan",
    description: "Design a clear, pragmatic strategy and scope tailored precisely to your resources.",
  },
  {
    num: "03",
    title: "Implement",
    description: "Deploy the right tools, software, processes, and dedicated talent seamlessly.",
  },
  {
    num: "04",
    title: "Support",
    description: "Provide proactive daily execution, SLA oversight, and continuous quality checks.",
  },
  {
    num: "05",
    title: "Grow",
    description: "Continuously review performance metrics and expand capabilities as your organisation scales.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#050B17] text-white">
        {/* ==================================================
            HERO SECTION with Brand Blue Gradient & About Visual
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
                <span>ABOUT OUR ORGANISATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                One Unified Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                  Modern Operations.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                Primary Care Data Services was founded to eliminate vendor fragmentation. We bridge strategy with day-to-day execution across business management, healthcare compliance, custom technology, and digital growth.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="specular-button group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Contact Our Team</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="specular-button-secondary group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary">
                    <span>Explore All Services</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Methodology / How We Work */}
        <section className="py-20 md:py-28 bg-[#070E1E]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag justify-center text-[#00E5FF]">
                <span>OUR METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Structured Delivery Process
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                A tested 5-step approach providing clarity, accountability, and dependable execution from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#0F172A] border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-[#00E5FF]/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-1 rounded-md border border-[#00E5FF]/20">
                        Step {step.num}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Primary Care Data Services */}
        <section className="py-20 md:py-28 bg-[#050B17] border-t border-slate-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag justify-center text-[#00E5FF]">
                <span>KEY ADVANTAGES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Why Organisations Partner With Us
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Practical, disciplined operational support tailored for modern UK practices and enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#0F172A]/80 border border-slate-800 rounded-2xl hover:border-[#00E5FF]/30 transition-all group"
                >
                  <div className="w-8 h-1 bg-[#00E5FF] rounded-full mb-6 group-hover:w-12 transition-all duration-300 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {item.description}
                  </p>
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
