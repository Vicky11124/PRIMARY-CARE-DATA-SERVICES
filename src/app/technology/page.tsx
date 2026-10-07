import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Technology & Custom Software | Primary Care Data Services",
  description:
    "High-performance web platforms, custom software, workflow automation, and CRM integrations engineered for modern UK organisations.",
};

const techCapabilities = [
  {
    title: "High-Performance Web Development",
    tag: "WEB & PLATFORMS",
    description:
      "Modern, ultra-fast, and responsive digital platforms engineered to convert traffic and elevate your brand presence.",
    highlights: [
      "Modern React / Next.js architecture",
      "Mobile-first responsive engineering",
      "Sub-second page speeds & SEO optimisation",
      "Enterprise security and uptime reliability",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    link: "/services/website-development",
  },
  {
    title: "Custom Software Engineering",
    tag: "APPLICATIONS",
    description:
      "Tailored internal tools, web apps, and management platforms engineered around your exact operational workflows.",
    highlights: [
      "Bespoke backend APIs and microservices",
      "Intuitive role-based dashboard portals",
      "Scalable cloud database architecture",
      "Seamless legacy data integration",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: "/services/custom-software",
  },
  {
    title: "Intelligent Process Automation",
    tag: "AUTOMATION",
    description:
      "Eliminate repetitive manual entry, sync disjointed applications, and reduce operational overhead.",
    highlights: [
      "Automated cross-app data synchronization",
      "Custom trigger-based notification flows",
      "Document parsing & automatic billing sync",
      "Human-in-the-loop validation checkpoints",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: "/services/business-process-automation",
  },
  {
    title: "CRM & Systems Integration",
    tag: "SYSTEMS",
    description:
      "Centralise your customer data, lead tracking, and reporting pipelines in a single real-time source of truth.",
    highlights: [
      "Custom HubSpot, Salesforce & Zoho setups",
      "Automated lead capture & routing logic",
      "Real-time pipeline analytics & KPI dashboards",
      "End-to-end customer lifecycle tracking",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    link: "/services/crm-development",
  },
];

const techStack = [
  { name: "Next.js / React", category: "Frontend", desc: "Server-side rendered modern UI" },
  { name: "TypeScript / Node", category: "Backend", desc: "Type-safe robust API systems" },
  { name: "PostgreSQL / Prisma", category: "Database", desc: "High-integrity relational data" },
  { name: "Tailwind CSS", category: "Styling", desc: "Lightweight responsive design" },
  { name: "REST & GraphQL", category: "APIs", desc: "Reliable integration protocols" },
  { name: "AWS & Cloudflare", category: "Cloud & CDN", desc: "Global edge caching & security" },
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#050B17] text-white">
        {/* ==================================================
            HERO SECTION with Brand Blue Gradient & Tech Visual
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
                <span>TECHNOLOGY & SOFTWARE HIGHLIGHTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Technology That Moves Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                  Business Forward.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                From high-performance digital platforms to custom workflow automation, we build modern infrastructure tailored to your organisation&apos;s daily operations.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="specular-button group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Discuss a Project</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services?tab=technology"
                  className="specular-button-secondary group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary">
                    <span>View All Tech Services</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="py-20 md:py-28 bg-[#070E1E]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag justify-center text-[#00E5FF]">
                <span>CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Core Digital Infrastructure
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Engineered with modern architecture, rock-solid security, and future-proof scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techCapabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#0F172A]/90 border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-bold tracking-widest text-[#00E5FF] uppercase bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Capability Details</span>
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

        {/* Tech Stack & Standards */}
        <section className="py-20 bg-[#050B17] border-t border-slate-800">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-[0.2em] text-[#00E5FF] uppercase mb-2 block">
                STANDARDS & FRAMEWORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
                Modern & Reliable Tooling
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center hover:border-slate-700 transition-all"
                >
                  <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-wider block mb-1">
                    {tech.category}
                  </span>
                  <div className="text-sm font-bold text-white mb-1">{tech.name}</div>
                  <p className="text-[11px] text-slate-400">{tech.desc}</p>
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
