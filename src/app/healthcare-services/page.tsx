import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Healthcare Services | Primary Care Data Services Ltd",
  description:
    "Comprehensive service catalogue for UK GP surgeries and clinics: healthcare administration, clinical document processing, medical coding, records summarisation, and operational support.",
  alternates: {
    canonical: "/healthcare-services",
  },
};

const healthcareServicesCatalogue = [
  {
    id: "healthcare-administration",
    title: "Healthcare Administration",
    badge: "PRACTICE OPERATIONS",
    summary:
      "End-to-end administrative management for GP surgeries, dental networks, and private clinics. We handle patient communications, appointment bookings, clinic scheduling, and non-clinical practice support.",
    extendedNarrative:
      "Our administrative specialists operate as an extension of your practice reception and secretarial team. We handle repetitive enquiries, coordinate patient appointments, and ensure multi-clinician rotas run without scheduling gaps so GPs and practice nurses remain fully focused on clinical care.",
    systemHighlight: "EMIS Web & SystmOne Scheduling Support",
    capabilities: [
      "Appointment scheduling & rota coordination",
      "Patient enquiry triage & correspondence handling",
      "Clinic workflow & back-office administrative oversight",
      "NHS & private healthcare operational support",
    ],
    visualType: "admin",
  },
  {
    id: "clinical-document-processing",
    title: "Clinical Document Processing",
    badge: "WORKFLOW AUTOMATION",
    summary:
      "Secure, standardized processing of incoming clinical correspondence, hospital discharge summaries, consultant letters, and diagnostic lab reports directly into patient electronic charts.",
    extendedNarrative:
      "Clinical letter backlogs create clinical risk and administrative bottlenecks. Our trained document processing team follows practice-approved Standard Operating Procedures (SOPs) to index, reconcile, and file clinical correspondence directly into patient records with rapid turnaround times.",
    systemHighlight: "Standardized SOP Indexing & Fast Turnaround",
    capabilities: [
      "Hospital discharge letter indexing & reconciliation",
      "Pathology & diagnostic test result routing",
      "Clinical correspondence triage & rapid turnarounds",
      "Filing directly into EMIS Web & SystmOne",
    ],
    visualType: "document",
  },
  {
    id: "medical-coding",
    title: "Medical Coding",
    badge: "ACCURACY & AUDITING",
    summary:
      "Rigorous clinical terminology coding applying SNOMED CT and ICD-10 standards. Ensure accurate chronic condition registers, optimal QOF target reporting, and complete audit readiness.",
    extendedNarrative:
      "Accurate disease registers and clinical tags are critical for patient safety, clinical audits, and practice income under the Quality and Outcomes Framework (QOF). Our medical coders review diagnostic documentation and apply standardized SNOMED CT codes with complete audit trail integrity.",
    systemHighlight: "SNOMED CT & ICD-10 Clinical Coding Compliance",
    capabilities: [
      "Accurate SNOMED CT clinical coding & disease register tagging",
      "Quality and Outcomes Framework (QOF) compliance support",
      "Prescription & repeat medication reconciliation checks",
      "Audit trail governance & quality control verifications",
    ],
    visualType: "coding",
  },
  {
    id: "records-summarisation",
    title: "Medical Records Summarisation",
    badge: "DIGITISATION & MIGRATION",
    summary:
      "Specialist digitisation of Lloyd George paper envelopes, structured electronic medical records summarising, and clean clinical database migration for healthcare practices.",
    extendedNarrative:
      "Historical paper records contain vital patient context that must be accessible in modern clinical systems. We digitise physical Lloyd George files at high resolution, extract significant medical history, past operations, and adverse drug reactions, and integrate clean summaries into active patient electronic records.",
    systemHighlight: "Physical Lloyd George Envelope Digitisation",
    capabilities: [
      "Physical Lloyd George paper file digitisation & high-res scanning",
      "Historical medical timeline extraction & structured summaries",
      "Significant past medical history, family history & allergies logging",
      "Direct integration into active NHS clinical systems",
    ],
    visualType: "summarisation",
  },
  {
    id: "operational-support",
    title: "Healthcare Operational Support",
    badge: "WORKFORCE & COMPLIANCE",
    summary:
      "Operational support designed to reduce practice management pressure. Includes clinical rota management, staff compliance verification, and locum booking coordination.",
    extendedNarrative:
      "Healthcare workforce shortages and seasonal patient demand place immense pressure on practice managers. We supply structured surge capacity and operational coordination—managing multi-clinician leave cover, mandatory training registers, and clinical compliance without permanent headcount expansion.",
    systemHighlight: "Flexible Operational Capacity & Rota Resilience",
    capabilities: [
      "Multi-clinician rota planning & leave cover management",
      "Locum doctor & allied healthcare professional booking support",
      "Mandatory staff training tracking & DBS vetting oversight",
      "Practice operational continuity & surge capacity",
    ],
    visualType: "ops",
  },
];

const clinicalBenefits = [
  {
    title: "Reclaim Clinical Focus",
    description:
      "Our dedicated specialists handle documentation so clinicians can focus on patient consultations rather than non-clinical administration.",
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

// Visual Illustration Subcomponents
function AdminVisual() {
  return (
    <div className="relative p-3.5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#091020] to-[#050914] border border-slate-800 shadow-2xl overflow-hidden group/visual hover:border-cyan-500/40 transition-all duration-300">
      {/* Radial glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            Practice Management Console
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-[#00E5FF] px-1.5 sm:px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 shrink-0">
          LIVE SYSTEM
        </span>
      </div>

      {/* Live metrics cards */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 my-4 sm:my-5 relative z-10">
        <div className="p-2 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 overflow-hidden">
          <div className="text-[10px] sm:text-[11px] text-slate-400">Appointment Rota</div>
          <div className="text-xs xs:text-sm sm:text-lg font-bold text-white mt-0.5 flex items-center gap-1">
            <span className="truncate">Synchronized</span>
            <span className="text-[10px] sm:text-xs text-emerald-400 shrink-0">✓</span>
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 mt-1 truncate">EMIS Web &amp; SystmOne</div>
        </div>
        <div className="p-2 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 overflow-hidden">
          <div className="text-[10px] sm:text-[11px] text-slate-400">Patient Enquiries</div>
          <div className="text-xs xs:text-sm sm:text-lg font-bold text-[#00E5FF] mt-0.5 truncate">Triaged Daily</div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 mt-1 truncate">Direct Reception Relief</div>
        </div>
      </div>

      {/* Workflow Timeline Nodes */}
      <div className="space-y-2 sm:space-y-2.5 relative z-10 pt-2 border-t border-slate-800/70">
        <div className="flex items-center justify-between text-[11px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 min-w-0 pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0" />
            <span className="truncate">Multi-Clinician Booking Schedule</span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono shrink-0">Active</span>
        </div>
        <div className="flex items-center justify-between text-[11px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 min-w-0 pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
            <span className="truncate">Incoming Patient Correspondence Handling</span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono shrink-0">Standardized</span>
        </div>
        <div className="flex items-center justify-between text-[11px] sm:text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 min-w-0 pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
            <span className="truncate">Clinic Workflow Operational Oversight</span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono shrink-0">Verified</span>
        </div>
      </div>
    </div>
  );
}

function DocumentVisual() {
  return (
    <div className="relative p-3.5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#091020] to-[#050914] border border-slate-800 shadow-2xl overflow-hidden group/visual hover:border-cyan-500/40 transition-all duration-300">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            Clinical Document Pipeline
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          SOP VERIFIED
        </span>
      </div>

      {/* Processing Pipeline Stages */}
      <div className="my-4 sm:my-5 space-y-2.5 sm:space-y-3 relative z-10">
        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-white leading-snug">Discharge Summary Ingestion</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">Hospital letters, clinical notes &amp; lab reports</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-400 shrink-0 whitespace-nowrap">Indexed ✓</span>
        </div>

        <div className="p-2.5 sm:p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/25 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-[#00E5FF] leading-snug">Clinical Reconciliation &amp; Routing</div>
            <div className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 leading-snug">Pathology tests, urgent flags &amp; referral triage</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] shrink-0 whitespace-nowrap">Routed ✓</span>
        </div>

        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-white leading-snug">Electronic Chart Integration</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">Direct filing to EMIS Web &amp; SystmOne</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-blue-400 shrink-0 whitespace-nowrap">Filed ✓</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10">
        <span>Turnaround Standard</span>
        <span className="text-slate-200 font-mono font-semibold">Strict Practice SLAs</span>
      </div>
    </div>
  );
}

function CodingVisual() {
  return (
    <div className="relative p-3.5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#091020] to-[#050914] border border-slate-800 shadow-2xl overflow-hidden group/visual hover:border-cyan-500/40 transition-all duration-300">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            Clinical Coding Console
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00E5FF] px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
          SNOMED CT &amp; ICD-10
        </span>
      </div>

      {/* Code entries table */}
      <div className="my-4 sm:my-5 space-y-2 sm:space-y-2.5 relative z-10 font-mono text-xs">
        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-slate-300 font-semibold text-[11px] sm:text-xs leading-snug">Chronic Disease Register</div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans mt-0.5 leading-snug">SNOMED CT standard tagging</div>
          </div>
          <span className="text-[10px] sm:text-[11px] text-emerald-400 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 whitespace-nowrap">
            QOF Aligned
          </span>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-slate-300 font-semibold text-[11px] sm:text-xs leading-snug">Medication Reconciliation</div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans mt-0.5 leading-snug">Repeat prescriptions &amp; dosage audit</div>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#00E5FF] bg-blue-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-blue-500/20 shrink-0 whitespace-nowrap">
            Reconciled
          </span>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-slate-300 font-semibold text-[11px] sm:text-xs leading-snug">Audit Trail Governance</div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans mt-0.5 leading-snug">Quality verifications &amp; audit tracking</div>
          </div>
          <span className="text-[10px] sm:text-[11px] text-blue-400 bg-blue-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-blue-500/20 shrink-0 whitespace-nowrap">
            Audit-Ready
          </span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10">
        <span>Framework Standard</span>
        <span className="text-slate-200 font-semibold">NHS Primary Care Governance</span>
      </div>
    </div>
  );
}

function SummarisationVisual() {
  return (
    <div className="relative p-3.5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#091020] to-[#050914] border border-slate-800 shadow-2xl overflow-hidden group/visual hover:border-cyan-500/40 transition-all duration-300">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
            Lloyd George Digitisation Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          NHS EHR READY
        </span>
      </div>

      {/* Migration stages */}
      <div className="my-4 sm:my-5 grid grid-cols-2 gap-2 sm:gap-3 relative z-10">
        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase">Legacy Source</div>
          <div className="text-[11px] sm:text-xs font-bold text-white mt-1 leading-snug">Physical Paper Envelopes</div>
          <div className="text-[9px] sm:text-[10px] text-slate-400 mt-1 leading-snug">High-resolution digitisation</div>
        </div>

        <div className="p-2.5 sm:p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30">
          <div className="text-[9px] sm:text-[10px] font-mono text-[#00E5FF] uppercase">Structured EHR</div>
          <div className="text-[11px] sm:text-xs font-bold text-white mt-1 leading-snug">Timeline &amp; Summaries</div>
          <div className="text-[9px] sm:text-[10px] text-slate-300 mt-1 leading-snug">Direct database filing</div>
        </div>
      </div>

      {/* Check list */}
      <div className="space-y-1.5 sm:space-y-2 relative z-10 pt-2 border-t border-slate-800/70 text-[11px] sm:text-xs text-slate-300">
        <div className="flex items-center justify-between py-1 px-2 sm:px-2.5 rounded bg-slate-950/50 gap-2">
          <span className="truncate">Past Medical History (PMH) Extraction</span>
          <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] shrink-0">Structured ✓</span>
        </div>
        <div className="flex items-center justify-between py-1 px-2 sm:px-2.5 rounded bg-slate-950/50 gap-2">
          <span className="truncate">Major Surgeries &amp; Family History Logging</span>
          <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] shrink-0">Recorded ✓</span>
        </div>
        <div className="flex items-center justify-between py-1 px-2 sm:px-2.5 rounded bg-slate-950/50 gap-2">
          <span className="truncate">Allergies &amp; Adverse Drug Reactions</span>
          <span className="text-amber-400 font-mono text-[10px] sm:text-[11px] shrink-0">Flagged ✓</span>
        </div>
      </div>
    </div>
  );
}

function OpsVisual() {
  return (
    <div className="relative p-3.5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1428] via-[#091020] to-[#050914] border border-slate-800 shadow-2xl overflow-hidden group/visual hover:border-cyan-500/40 transition-all duration-300">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 relative z-10 gap-2">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <svg className="w-4 h-4 text-[#00E5FF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider truncate">
            Workforce &amp; Practice Continuity
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 px-1.5 sm:px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
          OPERATIONAL
        </span>
      </div>

      {/* Rota and compliance overview */}
      <div className="my-4 sm:my-5 space-y-2.5 sm:space-y-3 relative z-10">
        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-white leading-snug">Multi-Clinician Rota Coordination</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">GP partners, salaried staff &amp; leave management</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-[#00E5FF] shrink-0 font-medium whitespace-nowrap">Managed</span>
        </div>

        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-white leading-snug">Locum Doctor &amp; Surge Support</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">Allied healthcare professional coordination</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-400 shrink-0 font-medium whitespace-nowrap">Available</span>
        </div>

        <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-1">
            <div className="text-xs font-semibold text-white leading-snug">Mandatory Training &amp; DBS Tracking</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">Staff governance &amp; compliance assurance</div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-emerald-400 shrink-0 font-medium whitespace-nowrap">100% Verified</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 relative z-10 gap-2">
        <span className="shrink-0">Capacity Model</span>
        <span className="text-slate-200 font-semibold text-right">Flexible Surge Deployment</span>
      </div>
    </div>
  );
}

export default function HealthcareServicesPage() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="min-h-screen bg-[#060B18] text-white">
        {/* ==================================================
            01. HERO SECTION
            ================================================== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#060B18] text-white overflow-hidden isolate border-b border-slate-800/80">
          {/* 1. Full-Bleed Emerald-Green DNA Background Video */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/healthcare-hero-bg.webp"
              className="w-full h-full object-cover object-[75%_center] sm:object-right select-none"
              preload="auto"
            >
              <source src="/videos/healthcare-green-dna.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* 2. Controlled Dark Navy Gradient Overlays: Ensures 100% left text legibility while revealing the rotating green DNA on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/80 via-50% to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/50 via-transparent to-[#060B18]/90 pointer-events-none z-[1]" />

          {/* 3. Ambient Lighting Accents matching the green DNA & cyan theme */}
          <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-[1]" />
          <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none z-[1]" />

          <div className="container-custom relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#00E5FF] transition-colors">
                Home
              </Link>
              <span className="text-slate-600">›</span>
              <span className="text-white font-bold">Healthcare Services</span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#00E5FF] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-[0_0_18px_rgba(0,229,255,0.18)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
                <span>PRIMARY CARE DATA SERVICES • HEALTHCARE DIVISION</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] mb-6 text-white">
                Healthcare Administration &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-[#00E5FF] drop-shadow-[0_0_30px_rgba(37,99,235,0.45)]">
                  Operational Support
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed max-w-2xl font-normal mb-10">
                Reliable, scalable administrative solutions for UK GP practices, primary care networks, and healthcare providers. We streamline records, clinical document workflows, and operational rotas so your clinical team can focus on patients.
              </p>

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
                  href="#healthcare-catalogue"
                  className="specular-button-secondary w-full sm:w-auto group"
                >
                  <span className="specular-beam-secondary animate-beam-spin" />
                  <span className="specular-inner-secondary w-full justify-center px-6 sm:px-8 py-3.5 sm:py-4">
                    <span>Explore Service Catalogue ↓</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            02. PREMIUM EDITORIAL HEALTHCARE SERVICES CATALOGUE
            ================================================== */}
        <section id="healthcare-catalogue" className="py-20 md:py-28 cta-gradient text-white relative overflow-hidden">
          {/* Ambient Lighting & Glows matching the reference CTA background */}
          <div className="absolute top-12 -right-24 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-36 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 -right-24 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-36 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
              <div className="section-tag section-tag-dark justify-center mb-3">
                <span>HEALTHCARE SERVICES CATALOGUE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Supporting Better Healthcare Operations
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Explore our confirmed healthcare administration, clinical documentation, medical coding, records summarisation, and operational support offerings.
              </p>
            </div>

            {/* Editorial Alternating Services Stack */}
            <div className="space-y-24 md:space-y-32">
              {healthcareServicesCatalogue.map((service, index) => {
                const isEven = index % 2 === 1;

                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 p-4 sm:p-10 md:p-12 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,229,255,0.14)] hover:-translate-y-1 relative group"
                  >
                    {/* Subtle background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}>
                      {/* Text Column */}
                      <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00E5FF] font-mono block mb-2">
                            {service.badge}
                          </span>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                          {service.summary}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {service.extendedNarrative}
                        </p>

                        {/* Approved Capabilities List */}
                        <div className="space-y-2.5 pt-2">
                          {service.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <span className="text-[#00E5FF] font-bold shrink-0 mt-0.5 text-xs">
                                ✓
                              </span>
                              <span className="leading-snug">{cap}</span>
                            </div>
                          ))}
                        </div>

                        {/* Prominent CTA Button with animated arrow */}
                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <Link
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900/90 text-white hover:text-slate-900 hover:bg-[#00E5FF] border border-cyan-500/30 hover:border-[#00E5FF] font-bold text-xs uppercase tracking-wider transition-all duration-300 ease-out shadow-lg hover:shadow-[#00E5FF]/25 group/btn"
                          >
                            <span>View Service Details</span>
                            <svg
                              className="w-4 h-4 text-[#00E5FF] group-hover/btn:text-slate-900 group-hover/btn:translate-x-1.5 transition-all duration-300 ease-out shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>

                          <span className="text-xs text-slate-400 font-mono">
                            {service.systemHighlight}
                          </span>
                        </div>
                      </div>

                      {/* Visual Component Column */}
                      <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                        {service.visualType === "admin" && <AdminVisual />}
                        {service.visualType === "document" && <DocumentVisual />}
                        {service.visualType === "coding" && <CodingVisual />}
                        {service.visualType === "summarisation" && <SummarisationVisual />}
                        {service.visualType === "ops" && <OpsVisual />}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            03. PRACTICE RESILIENCE & CLINICAL SYSTEMS
            ================================================== */}
        <section className="py-20 md:py-28 bg-[#080E1E] border-y border-slate-850">
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
                    <div className="text-xs text-slate-400 mt-1">Workflow filing, document indexing &amp; clinical coding</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0F172A]/90 border border-slate-800">
                    <div className="text-2xl font-bold text-blue-400">SystmOne</div>
                    <div className="text-xs text-slate-400 mt-1">Electronic summaries &amp; patient record reconciliation</div>
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
        <section className="py-10 sm:py-16 md:py-28 bg-[#050B17] border-b border-slate-850">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16">
              <div className="section-tag section-tag-dark justify-center mb-2 sm:mb-3">
                <span>BENEFITS FOR PRACTICES</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-4">
                Designed for Healthcare Teams
              </h2>
              <p className="text-xs xs:text-sm sm:text-base text-slate-400 mt-2 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
                Measurable improvements in daily clinic efficiency, staff wellbeing, and document compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 md:gap-6">
              {clinicalBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-[#0F172A]/80 border border-slate-800 p-3 xs:p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl space-y-2 sm:space-y-3 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform mb-2 sm:mb-3">
                      <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xs xs:text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-slate-400 leading-snug sm:leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            05. HEALTHCARE ENQUIRY CTA
            ================================================== */}
        <section className="py-24 md:py-32 cta-gradient text-white relative overflow-hidden" id="contact">
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
