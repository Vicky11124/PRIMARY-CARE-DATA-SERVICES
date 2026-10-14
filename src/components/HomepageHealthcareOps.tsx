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
      "Our teams work seamlessly within your existing primary care workflows — documents, codes, and summaries integrated directly without technical disruption.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "UK GDPR & Information Governance",
    description:
      "Strict data protection safeguards, confidentiality protocols, and secure handling frameworks aligned with UK privacy standards and NHS guidance.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const commitments = [
  {
    title: "Standardized Standard Operating Procedures (SOPs)",
    body: "Every workflow adheres to practice-approved guidelines, protocols, and escalation criteria.",
  },
  {
    title: "Data Privacy and Confidentiality",
    body: "Full alignment with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.",
  },
  {
    title: "Flexible Capacity Without Long Contracts",
    body: "Scale processing volume up during peak seasons or document backlog clearances — without permanent headcount additions.",
  },
];

export default function HomepageHealthcareOps() {
  return (
    <section
      className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200"
      id="healthcare-operations"
    >
      <div className="container-custom relative z-10">
        {/* ── Top: Two-column narrative + commitment card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left — Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="section-tag">
              <span>HEALTHCARE OPERATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Solving the Administrative Burden in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Modern Healthcare
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              General practice and primary care across the UK face unprecedented operational demands. Clinicians and practice managers frequently balance high patient lists alongside hundreds of incoming discharge summaries, test results, and coding queries every week.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Primary Care Data Services provides structured, external operational reinforcement. We integrate seamlessly into your practice routines, clearing record backlogs, processing document queues, and maintaining strict clinical coding consistency — without requiring permanent additions to practice headcount.
            </p>

            {/* System Badges */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
                <div className="text-xl font-bold text-blue-700">EMIS Web</div>
                <div className="text-xs text-slate-600 mt-1">
                  Workflow filing, document indexing &amp; clinical coding
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
                <div className="text-xl font-bold text-blue-600">SystmOne</div>
                <div className="text-xs text-slate-600 mt-1">
                  Electronic summaries &amp; patient record reconciliation
                </div>
              </div>
            </div>
          </div>

          {/* Right — Commitment Card */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-lg shadow-slate-200/50 space-y-5 relative overflow-hidden">
            {/* Subtle blue accent underglow */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-100/50 to-transparent pointer-events-none rounded-b-3xl" />

            <h3 className="text-xl font-bold text-slate-900 relative z-10">
              Our Healthcare Commitment
            </h3>

            <div className="space-y-4 relative z-10">
              {commitments.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">{item.title}</strong>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom: Clinical Benefits Grid ── */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-tag justify-center">
              <span>BENEFITS FOR PRACTICES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Designed for Healthcare Teams
            </h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Measurable improvements in daily clinic efficiency, staff wellbeing, and document compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinicalBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                  {benefit.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
