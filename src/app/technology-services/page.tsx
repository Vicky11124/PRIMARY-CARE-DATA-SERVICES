import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Technology Services | Primary Care Data Services Ltd",
  description:
    "Custom software development, bespoke websites, web applications, business process automation, AI tooling, and digital marketing services for UK businesses.",
  alternates: {
    canonical: "/technology-services",
  },
};

const technologyServices = [
  {
    id: "software",
    number: "01",
    title: "Custom Software Development",
    badge: "BESPOKE ENGINEERING",
    description:
      "Engineered software platforms tailored to how your business actually operates. Replace fragile spreadsheet workflows with secure, resilient internal tools and centralized database applications.",
    features: [
      "Custom internal operations dashboards & portals",
      "Centralized databases & legacy data migration",
      "Robust API development & secure backend services",
      "Scalable cloud architecture (AWS / Azure / Vercel)",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "websites",
    number: "02",
    title: "Website Design & Development",
    badge: "HIGH CONVERSION & SPEED",
    description:
      "Bespoke corporate websites engineered with modern frameworks to deliver ultra-fast load times, seamless responsiveness across mobile and desktop, and persuasive user journeys.",
    features: [
      "Custom UI/UX interface design built to convert",
      "Next.js & React static/server performance architecture",
      "Mobile-first responsive fluid layouts",
      "Core Web Vitals & on-page SEO optimization",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "web-apps",
    number: "03",
    title: "Web Applications",
    badge: "CLOUD PLATFORMS & PORTALS",
    description:
      "Dynamic cloud web applications, client portals, customer booking hubs, and authenticated member platforms designed for security, uptime, and high user engagement.",
    features: [
      "Multi-tenant customer portals & dashboard interfaces",
      "Role-based authentication & data permission tiers",
      "Real-time state synchronization & reactive interfaces",
      "Enterprise security & automated backup integrations",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "automation",
    number: "04",
    title: "Business Automation",
    badge: "WORKFLOW EFFICIENCY",
    description:
      "Automate repetitive manual operations by interconnecting your existing tool stack. Connect payment processors, CRM pipelines, team notifications, and accounting software automatically.",
    features: [
      "Cross-platform webhook & API synchronization",
      "Automated invoice generation & payment reconciliations",
      "Lead routing, instant alert triggers & CRM updates",
      "Elimination of double data entry across business tools",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "ai-solutions",
    number: "05",
    title: "AI & Technology Solutions",
    badge: "INTELLIGENT SYSTEMS",
    description:
      "Practical artificial intelligence integrations for modern operations. From automated document parsing and data extraction to AI triage assistants and smart search systems.",
    features: [
      "Intelligent text parsing & automated data extraction",
      "Custom conversational support & helpdesk triage bots",
      "Knowledge base vector search & semantic indexing",
      "Pragmatic ROI-driven AI implementation models",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "growth",
    number: "06",
    title: "Digital Marketing & Growth",
    badge: "MULTI-CHANNEL TRAFFIC",
    description:
      "Data-backed digital growth strategies engineered to acquire high-value customers, increase organic search engine authority, and scale transparent marketing returns.",
    features: [
      "Search engine optimisation (SEO) & keyword domination",
      "Targeted Google Search & PPC performance campaigns",
      "Paid social advertising across Meta (Facebook & IG)",
      "High-intent conversion funnels & landing pages",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "consulting",
    number: "07",
    title: "Technical Consulting & CRM",
    badge: "STRATEGY & ARCHITECTURE",
    description:
      "Senior technical advisory to audit your software stack, optimize customer relationship management (CRM) workflows, and structure scalable technology roadmaps.",
    features: [
      "Custom CRM platform setup, pipelines & migrations",
      "Software architecture & code security reviews",
      "Third-party vendor evaluation & consolidation",
      "Transparent engineering roadmaps & milestone execution",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

const techBenefits = [
  {
    title: "Modern Engineering Stack",
    description:
      "Built with high-performance frameworks (Next.js, React, Node, Tailwind) ensuring blistering speeds, sub-second loads, and high security standards.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Tailored to Your Operations",
    description:
      "Off-the-shelf software forces you to work around its limitations. Our custom applications adapt precisely to your operational workflow.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Complete Code Ownership",
    description:
      "You retain 100% intellectual property ownership of your codebase, accounts, and data. No proprietary vendor lock-in.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Dedicated Technical Support",
    description:
      "Direct communication with UK software engineers and digital managers who understand your project goals and architecture.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

export default function TechnologyServicesPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#060B18] text-white">
        {/* ==================================================
            01. HERO SECTION (With High-Resolution Tech Wave Asset)
            ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#060B18] text-white overflow-hidden isolate border-b border-slate-800/80">
          {/* 1. Actual Hero Background Image Asset (4K Upscaled Crystal-Clear Quality) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/technology-hero-bg.webp"
              alt="Technology & Digital Infrastructure"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-[70%_center] sm:object-[75%_center] md:object-right select-none"
            />
          </div>

          {/* 2. Controlled Dark Navy Overlays: Left-to-right & Top-to-bottom gradients ensure 100% text readability on the left while allowing the vibrant blue tech wave to shine clearly on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/85 via-45% to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/40 via-transparent to-[#060B18]/90 pointer-events-none z-[1]" />

          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />
          <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none z-[1]" />

          <div className="container-custom relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#00E5FF] transition-colors">
                Home
              </Link>
              <span className="text-slate-600">›</span>
              <Link href="/services" className="hover:text-[#00E5FF] transition-colors">
                Services
              </Link>
              <span className="text-slate-600">›</span>
              <span className="text-white font-bold">Technology Services</span>
            </nav>

            <div className="max-w-4xl">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_0_18px_rgba(0,229,255,0.18)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
                <span>PRIMARY CARE DATA SERVICES • TECHNOLOGY DIVISION</span>
              </div>

              {/* Editorial Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Software, Websites &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF] drop-shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                  Digital Solutions
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl font-normal mb-10">
                Custom software, modern websites, cloud applications, and intelligent business automation built to help growing organisations eliminate manual overhead, convert customers, and scale.
              </p>

              {/* Action Buttons with Specular Beam Design */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="specular-button w-full sm:w-auto group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Discuss Your Project</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>

                <a
                  href="#tech-grid"
                  className="specular-button-secondary w-full sm:w-auto group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span>Explore Solutions</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            02. TECHNOLOGY SERVICES GRID
            ================================================== */}
        <section id="tech-grid" className="py-20 md:py-28 bg-[#050B17] border-b border-slate-850 relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag section-tag-dark justify-center mb-3">
                <span>OUR TECHNOLOGY PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Software & Digital Solutions Built to Scale
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                From bespoke web applications to end-to-end automation, we build resilient technology designed to drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {technologyServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  ctaText="Request Technical Scope"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            03. HOW TECHNOLOGY EMPOWERS WORKFLOWS
            ================================================== */}
        <section className="py-20 md:py-28 bg-[#080E1E] border-b border-slate-850">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="section-tag section-tag-dark">
                  <span>WORKFLOW OPTIMISATION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Transforming Operational Bottlenecks into Competitive Advantages
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Too many organisations lose valuable hours wrestling with disjointed SaaS platforms, manual spreadsheet tracking, and outdated websites that fail to convert visitors into inquiries.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Our Technology Division bridges the gap between software development and real business execution. We build unified platforms that automate administrative repetitive tasks, connect client pipelines, and provide leadership with clear, real-time metrics.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0F172A]/90 border border-slate-800">
                    <div className="text-2xl font-bold text-[#00E5FF]">Custom Built</div>
                    <div className="text-xs text-slate-400 mt-1">Zero restrictive templates or generic limitations</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0F172A]/90 border border-slate-800">
                    <div className="text-2xl font-bold text-blue-400">Automated</div>
                    <div className="text-xs text-slate-400 mt-1">Direct API connections across all key tools</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0F172A]/90 border border-slate-800 p-8 rounded-3xl shadow-xl space-y-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">
                  Our Engineering Principles
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5 font-semibold text-sm">High Performance & Modern Architecture</strong>
                      Every solution is built using battle-tested TypeScript, Next.js, and cloud native services for speed and longevity.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5 font-semibold text-sm">100% Intellectual Property Ownership</strong>
                      All source code, database architectures, and design assets are fully owned by your company.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5 font-semibold text-sm">Security & UK Privacy Compliance</strong>
                      Designed with encryption, least-privilege access, and alignment with UK GDPR and data privacy standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. BENEFITS & CAPABILITIES SECTION
            ================================================== */}
        <section className="py-20 md:py-28 bg-[#050B17] border-b border-slate-850">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag section-tag-dark justify-center mb-3">
                <span>OUR CORE CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Why Partner with Our Technology Division
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed text-center">
                Strategic software development designed for measurable ROI, operational resilience, and digital scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-[#0F172A]/80 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            05. TECHNOLOGY ENQUIRY CTA (Matching Homepage FinalCta)
            ================================================== */}
        <section className="py-24 md:py-32 cta-gradient text-white relative overflow-hidden" id="contact">
          {/* Subtle Glows matching FinalCta */}
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="section-tag section-tag-dark justify-center mb-4">
                <span>TECHNOLOGY DIVISION CONSULTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Have a Software, Website or <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF]">
                  Automation Idea?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                Connect with our technology specialists to discuss feasibility, architectures, timelines, and tailored development scopes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="specular-button w-full sm:w-auto group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Contact Technology Division</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/healthcare-services"
                  className="specular-button-secondary w-full sm:w-auto group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span>Explore Healthcare Services →</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
