const steps = [
  {
    num: "01",
    title: "Enquire",
    description:
      "Tell us about your healthcare administration or technology requirement. Use our contact form or speak directly with our team — no obligation.",
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Design a Solution",
    description:
      "Our team scopes the right service and approach for your practice or business — tailored to your workflows, systems, and operational priorities.",
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ongoing Support",
    description:
      "We deliver, integrate, and provide reliable continued support — scaling with you as your requirements evolve.",
    icon: (
      <svg className="w-6 h-6 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HomepageHowItWorks() {
  return (
    <section
      className="py-20 md:py-28 bg-white border-t border-slate-200"
      id="how-it-works"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-tag justify-center">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple to Start. Built to Last.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Getting started with Primary Care Data Services is straightforward — from your first enquiry to reliable ongoing support.
          </p>
        </div>

        {/* 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-6 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-2xl hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-250 group"
            >
              {/* Step number badge */}
              <div className="absolute -top-3.5 left-6 sm:left-1/2 sm:-translate-x-1/2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm">
                  Step {step.num}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#050B17] border border-slate-800 flex items-center justify-center mb-5 mt-4 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-200">
                {step.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
