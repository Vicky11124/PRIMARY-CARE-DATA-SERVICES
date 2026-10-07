import Link from "next/link";

const articles = [
  {
    title: "How SMEs Can Automate Repetitive Business Processes",
    date: "APR 12, 2026",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
  {
    title: "Why Your Website Should Be More Than a Digital Brochure",
    date: "APR 8, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
  {
    title: "Building a Digital Growth Strategy That Actually Converts",
    date: "APR 2, 2026",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80",
    href: "/#contact",
  },
];

export default function Insights() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200" id="insights">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-tag">
              <span>INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest Insights & Resources
            </h2>
          </div>
          <Link
            href="/#insights"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View All Articles</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
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
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2.5">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-blue-600 font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Read Article</span>
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
