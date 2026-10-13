import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Healthcare Services | Primary Care Data Services Ltd",
  description:
    "Professional healthcare administration, clinical document processing, medical coding, records summarisation, and operational support for UK GP practices and clinics.",
  alternates: {
    canonical: "/healthcare-services",
  },
};

const healthcareServices = [
  {
    id: "admin",
    number: "01",
    title: "Healthcare Administration",
    badge: "PRACTICE OPERATIONS",
    description:
      "End-to-end administrative management for GP surgeries, dental networks, and private clinics. We handle patient communications, appointment bookings, clinic scheduling, and non-clinical practice support.",
    features: [
      "Appointment scheduling & rota coordination",
      "Patient enquiry triage & correspondence handling",
      "Clinic workflow & back-office administrative oversight",
      "NHS & private healthcare operational support",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "doc-processing",
    number: "02",
    title: "Clinical Document Processing",
    badge: "WORKFLOW AUTOMATION",
    description:
      "Secure, standardized processing of incoming clinical correspondence, hospital discharge summaries, consultant letters, and diagnostic lab reports directly into patient electronic charts.",
    features: [
      "Hospital discharge letter indexing & reconciliation",
      "Pathology & diagnostic test result routing",
      "Clinical correspondence triage & rapid turnarounds",
      "Filing directly into EMIS Web & SystmOne",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "coding",
    number: "03",
    title: "Medical Coding",
    badge: "ACCURACY & AUDITING",
    description:
      "Rigorous clinical terminology coding applying SNOMED CT and ICD-10 standards. Ensure accurate chronic condition registers, optimal QOF target reporting, and complete audit readiness.",
    features: [
      "Accurate SNOMED CT clinical coding & disease register tagging",
      "Quality and Outcomes Framework (QOF) compliance support",
      "Prescription & repeat medication reconciliation checks",
      "Audit trail governance & quality control verifications",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "summarising",
    number: "04",
    title: "Medical Records Summarisation",
    badge: "DIGITISATION & MIGRATION",
    description:
      "Specialist digitisation of Lloyd George paper envelopes, structured electronic medical records summarising, and clean clinical database migration for healthcare practices.",
    features: [
      "Physical Lloyd George paper file digitisation & high-res scanning",
      "Historical medical timeline extraction & structured summaries",
      "Significant past medical history, family history & allergies logging",
      "Direct integration into active NHS clinical systems",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
  },
  {
    id: "ops-support",
    number: "05",
    title: "Healthcare Operational Support",
    badge: "WORKFORCE & COMPLIANCE",
    description:
      "Operational support designed to reduce practice management pressure. Includes clinical rota management, staff compliance verification, and locum booking coordination.",
    features: [
      "Multi-clinician rota planning & leave cover management",
      "Locum doctor & allied healthcare professional booking support",
      "Mandatory staff training tracking & DBS vetting oversight",
      "Practice operational continuity & surge capacity",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const clinicalBenefits = [
  {
    title: "Reclaim Clinical Focus",
    description:
      "GPs and practice nurses spend up to 25% of their working day on non-clinical administration. Our dedicated specialists handle documentation, allowing clinicians to focus on patient consultations.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Clear Document Backlogs",
    description:
      "Eliminate paper filing bottlenecks and unprocessed clinical letters with predictable turnaround times, structured indexing, and full auditability.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "EMIS & SystmOne Aligned",
    description:
      "Our teams work seamlessly within your existing primary care workflows, ensuring documents, codes, and summaries are integrated directly without technical disruption.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "UK GDPR & Information Governance",
    description:
      "Strict data protection safeguards, confidentiality protocols, and secure handling frameworks ensure compliance with UK privacy standards and NHS guidance.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function HealthcareServicesPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#060B18] text-white">
        {/* ==================================================
            01. HERO SECTION (Matching Homepage Dark Navy Style)
            ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#060B18] text-white overflow-hidden isolate border-b border-slate-800/80">
          {/* 1. Hero Background Image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/healthcare-hero-bg.jpg"
              alt="Healthcare & Medical Services"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-[70%_center] sm:object-[75%_center] md:object-right select-none"
            />
          </div>

          {/* 2. Dark Navy Overlays — left-to-right + top-to-bottom for full text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/85 via-45% to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/40 via-transparent to-[#060B18]/90 pointer-events-none z-[1]" />

          {/* Ambient Glows */}
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
              <span className="text-white font-bold">Healthcare Services</span>
            </nav>

            <div className="max-w-4xl">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_0_18px_rgba(0,229,255,0.18)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
                <span>PRIMARY CARE DATA SERVICES • HEALTHCARE DIVISION</span>
              </div>

              {/* Editorial Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Healthcare Administration &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF] drop-shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                  Operational Support
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl font-normal mb-10">
                Reliable, scalable administrative solutions for UK GP practices, primary care networks, and healthcare providers. We streamline records, clinical document workflows, and operational rotas so your clinical team can focus on patients.
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
                    <span>Discuss Healthcare Requirements</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>

                <a
                  href="#healthcare-grid"
                  className="specular-button-secondary w-full sm:w-auto group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span>Explore Services</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            02. HEALTHCARE SERVICES GRID
            ================================================== */}
        <section id="healthcare-grid" className="py-20 md:py-28 bg-[#050B17] border-b border-slate-850 relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag section-tag-dark justify-center mb-3">
                <span>OUR HEALTHCARE CATALOGUE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Specialized Services for Primary Care
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Structured administrative and clinical record operations delivered by experienced UK healthcare support professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {healthcareServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  ctaText="Request Service Details"
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            03. HOW HEALTHCARE SUPPORT HELPS PRACTICES
            ================================================== */}
        <section className="py-20 md:py-28 bg-[#080E1E] border-b border-slate-850">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="section-tag section-tag-dark">
                  <span>PRACTICE RESILIENCE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Solving the Administrative Burden in Modern Healthcare
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  General practice and primary care across the UK face unprecedented operational demands. Clinicians and practice managers frequently balance high patient lists alongside hundreds of incoming discharge summaries, test results, and coding queries every week.
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Primary Care Data Services provides structured, external operational reinforcement. We integrate seamlessly into your practice routines, clearing record backlogs, processing document queues, and maintaining strict clinical coding consistency without requiring permanent additions to practice headcount.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0F172A]/90 border border-slate-800">
                    <div className="text-2xl font-bold text-[#00E5FF]">EMIS Web</div>
                    <div className="text-xs text-slate-400 mt-1">Workflow filing, document indexing & clinical coding</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0F172A]/90 border border-slate-800">
                    <div className="text-2xl font-bold text-blue-400">SystmOne</div>
                    <div className="text-xs text-slate-400 mt-1">Electronic summaries & patient record reconciliation</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0F172A]/90 border border-slate-800 p-8 rounded-3xl shadow-xl space-y-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">
                  Our Healthcare Commitment
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">Standardized Standard Operating Procedures (SOPs)</strong>
                      Every workflow adheres to practice-approved guidelines, protocols, and escalation criteria.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">Data Privacy and Confidentiality</strong>
                      Full alignment with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <strong className="text-white block mb-0.5">Flexible Capacity Without Long Contracts</strong>
                      Scale processing volume up during peak seasons or document backlog clearances.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            04. CLINICAL BENEFITS SECTION
            ================================================== */}
        <section className="py-20 md:py-28 bg-[#050B17] border-b border-slate-850">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="section-tag section-tag-dark justify-center mb-3">
                <span>BENEFITS FOR PRACTICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Designed for Healthcare Teams
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto">
                Measurable improvements in daily clinic efficiency, staff wellbeing, and document compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clinicalBenefits.map((benefit, i) => (
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
            05. HEALTHCARE ENQUIRY CTA (Matching Homepage FinalCta)
            ================================================== */}
        <section className="py-24 md:py-32 cta-gradient text-white relative overflow-hidden" id="contact">
          {/* Subtle Glows matching FinalCta */}
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="section-tag section-tag-dark justify-center mb-4">
                <span>HEALTHCARE DIVISION ADVISORY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Ready to Streamline Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF]">
                  Practice Administration?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                Speak directly with our healthcare operations team to discuss document backlogs, medical coding support, or ongoing practice administration.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="specular-button w-full sm:w-auto group"
                >
                  <span className="specular-beam animate-beam-spin" />
                  <span className="specular-inner w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span className="specular-shimmer-highlight animate-beam-shimmer" />
                    <span>Contact Healthcare Division</span>
                    <svg className="w-4 h-4 text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/technology-services"
                  className="specular-button-secondary w-full sm:w-auto group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span>Explore Technology Services →</span>
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
