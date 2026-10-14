import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

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

export default function HomepageHealthcareServices() {
  return (
    <section
      className="py-20 md:py-28 cta-gradient text-white relative overflow-hidden"
      id="healthcare-services"
    >
      {/* Ambient Lighting & Glows matching the reference CTA background */}
      <div className="absolute top-12 -right-24 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-36 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag section-tag-dark justify-center">
            <span>HEALTHCARE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialized Support for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF]">
              Primary Care
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Structured administrative and clinical record operations delivered by experienced UK healthcare support professionals — so your clinical team can focus on patients.
          </p>
        </div>

        {/* Service Cards Grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
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

        {/* Section CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/healthcare-services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#38bdf8] text-[#050B17] text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#00E5FF]/25"
            id="homepage-healthcare-explore-btn"
          >
            <span>Explore All Healthcare Services</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
