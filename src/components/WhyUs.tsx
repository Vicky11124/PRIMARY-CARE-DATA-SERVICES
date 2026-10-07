const advantages = [
  {
    title: "Integrated Expertise",
    description: "Operations, technology and marketing planned together under one roof.",
  },
  {
    title: "Flexible Support",
    description: "Scale services and specialist headcount up or down as your needs evolve.",
  },
  {
    title: "Technology First",
    description: "Intelligent automation, CRM integrations, and modern tooling in every engagement.",
  },
  {
    title: "Human Dedicated Support",
    description: "Real UK professionals who know your company, goals, and culture by name.",
  },
  {
    title: "UK Regulated & Focused",
    description: "Fully aligned with UK standards, GDPR, CQC frameworks, and London working hours.",
  },
  {
    title: "Long-Term Partnership",
    description: "We measure success in sustainable compounded returns, not one-off project handoffs.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200" id="why-us">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <span>WHY PRIMARY CARE DATA SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One Team. Many Disciplines.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate vendor fragmentation. We unify strategic leadership with hands-on tactical delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-8 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
