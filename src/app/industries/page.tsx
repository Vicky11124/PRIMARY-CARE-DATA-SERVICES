import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Industries We Serve | Primary Care Data Services",
  description:
    "Tailored operational, technology, and compliance solutions built for healthcare, professional services, retail, technology, SMEs, and corporate enterprises.",
};

const industryList = [
  {
    name: "Healthcare & Primary Care",
    tag: "REGULATED SECTOR",
    description:
      "Comprehensive practice management, CQC compliance frameworks, clinical governance support, and medical records digitisation.",
    highlights: [
      "CQC audit preparation & evidence management",
      "EMIS & SystmOne workflow streamlining",
      "Medical records digitisation & archiving",
      "Dedicated clinical administration support",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=healthcare",
  },
  {
    name: "Professional Services",
    tag: "LEGAL & ACCOUNTING",
    description:
      "Automated document processing, client onboarding workflows, secure client portals, and back-office executive assistance.",
    highlights: [
      "Automated billing & invoicing workflows",
      "Secure client document exchange portals",
      "Dedicated executive virtual assistants",
      "GDPR-compliant data handling",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=business",
  },
  {
    name: "Technology & SaaS",
    tag: "TECH & INNOVATION",
    description:
      "Bespoke software development, automated cloud deployment, API integrations, and lead generation campaigns.",
    highlights: [
      "Custom web applications & customer portals",
      "Multi-channel CRM & pipeline tracking",
      "Technical QA and data synchronization",
      "B2B inbound & outbound marketing",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=technology",
  },
  {
    name: "Retail & E-Commerce",
    tag: "COMMERCE",
    description:
      "High-converting online store platforms, inventory management automation, customer service ticketing, and digital growth marketing.",
    highlights: [
      "Performance-tuned storefront development",
      "Automated multi-channel stock sync",
      "Customer helpdesk & virtual assistance",
      "Targeted Meta & Google ad campaigns",
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=growth",
  },
  {
    name: "Hospitality & Leisure",
    tag: "HOSPITALITY",
    description:
      "Online booking integrations, automated guest communication, staff scheduling support, and brand reputation management.",
    highlights: [
      "Direct reservation engine integrations",
      "Automated confirmation & review messaging",
      "Diary & shift scheduling administration",
      "Local SEO & digital visibility campaigns",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=virtual",
  },
  {
    name: "SMEs & Corporate Enterprises",
    tag: "ENTERPRISE",
    description:
      "End-to-end operational reviews, HR & recruitment support, custom workflow automations, and scalable team augmentation.",
    highlights: [
      "Cross-department process automation",
      "HR compliance & payroll management",
      "Full CRM migration and data governance",
      "Flexible, scalable specialist headcount",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services?tab=business",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#050B17] text-white">
        {/* ==================================================
            HERO SECTION with Brand Blue Gradient & Sector Visual
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
                <span>SECTOR & INDUSTRY HIGHLIGHTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Tailored Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400">
                  Your Industry.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mb-8">
                Every sector operates under distinct regulatory frameworks and workflow demands. We tailor our software, operations, and support specialists to your specific industry environment.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="specular-button group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Request Consultation</span>
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
                    <span>Explore Capabilities</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="py-20 md:py-28 bg-[#070E1E]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryList.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase bg-[#050B17]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#00E5FF]/30">
                        {ind.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {ind.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-slate-800/80 mb-6">
                        {ind.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={ind.serviceLink}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <span>View Relevant Solutions</span>
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
