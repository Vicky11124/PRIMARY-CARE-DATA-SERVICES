import Link from "next/link";

const industries = [
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=healthcare",
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=business",
  },
  {
    name: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=growth",
  },
  {
    name: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=virtual",
  },
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=technology",
  },
  {
    name: "Startups",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=growth",
  },
  {
    name: "SMEs",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=business",
  },
  {
    name: "Corporate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    href: "/services?tab=business",
  },
];

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200" id="industries">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <span>OUR INDUSTRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Solutions Built Around Your Industry.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We work with a wide range of organisations, providing tailored solutions for your unique challenges.
          </p>
        </div>

        {/* 8-Card 2x4 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((ind, idx) => (
            <Link
              key={idx}
              href={ind.href}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between bg-white">
                <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {ind.name}
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
