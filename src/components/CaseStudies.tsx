import Link from "next/link";

const caseStudies = [
  {
    title: "Healthcare Practice",
    category: "DEMO CASE STUDY",
    metric: "35% reduction in administrative workload",
    description: "Practice workflow redesign, digital records migration, and CQC compliance automation.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
  {
    title: "Professional Services",
    category: "DEMO CASE STUDY",
    metric: "2.4x increase in qualified enquiries",
    description: "Custom CRM development, targeted local SEO, and paid multi-channel growth funnels.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
  {
    title: "Growing SME",
    category: "DEMO CASE STUDY",
    metric: "60% reduction in manual data handling",
    description: "End-to-end business automation connecting finance, operations, and virtual support teams.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200" id="case-studies">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <div className="section-tag">
            <span>DEMO CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Real Results. Real Impact.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore how we&apos;ve helped organisations overcome operational friction and achieve measurable growth.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider text-blue-700 shadow-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 mb-3">
                    {item.metric}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
