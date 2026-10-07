import Link from "next/link";

const serviceCards = [
  {
    id: "business-solutions",
    title: "Business Solutions",
    description: "Operational and professional support to keep your business efficient and compliant.",
    image: "/images/business-support.jpg",
    href: "/services?tab=business",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "technology",
    title: "Technology & Software",
    description: "Websites, custom software, CRM systems and digital transformation for modern scale.",
    image: "/images/technology-software.jpg",
    href: "/services?tab=technology",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "digital-growth",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase visibility, generate leads and drive real results.",
    image: "/images/digital-marketing.jpg",
    href: "/services?tab=growth",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: "business-growth",
    title: "Business Growth & Analytics",
    description: "Performance metrics, high-conversion funnels, revenue analytics and scalable expansion.",
    image: "/images/business-growth.jpg",
    href: "/services?tab=growth",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description: "Reliable administrative, client support, and operational assistance to help you focus on growth.",
    image: "/images/virtual-assistance.jpg",
    href: "/services?tab=virtual",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything Your Business Needs.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From day-to-day operational support to long-term digital transformation, our specialists help you solve problems, improve efficiency and unlock growth.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col card-hover-effect group shadow-sm hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore</span>
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
