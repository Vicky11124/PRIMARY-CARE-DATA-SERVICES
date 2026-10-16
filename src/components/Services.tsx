import Link from "next/link";

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: React.ReactNode;
}

const serviceCards: ServiceCard[] = [
  {
    id: "business-support",
    number: "01",
    title: "Business Support",
    description:
      "Business management, HR & recruitment, finance & payroll, compliance and project management.",
    image: "/images/business-support.webp",
    href: "/services?tab=business",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "healthcare-support",
    number: "02",
    title: "Healthcare Support",
    description:
      "Practice management, summarising & digitisation of records, clinical governance, regulatory compliance and workforce optimisation.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    href: "/services?tab=healthcare",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: "technology-software",
    number: "03",
    title: "Technology & Software",
    description:
      "Website development, custom software, CRM systems, business automation and UI/UX.",
    image: "/images/technology-software.webp",
    href: "/services?tab=technology",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "digital-growth",
    number: "04",
    title: "Digital Growth",
    description:
      "Digital marketing, SEO, Meta Ads, Google Ads, social media and lead generation.",
    image: "/images/digital-marketing.webp",
    href: "/services?tab=growth",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    id: "virtual-assistance",
    number: "05",
    title: "Virtual Assistance",
    description:
      "Administrative support, customer support, scheduling, email management, data management and back-office support.",
    image: "/images/virtual-assistance.webp",
    href: "/services?tab=virtual",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    id: "professional-services",
    number: "06",
    title: "Professional Services",
    description:
      "Recruitment, training & development, policies & procedures, professional vetting, specialist support and operational services.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    href: "/services?tab=business",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
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
          <div className="inline-flex flex-wrap items-center justify-center px-3 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-sm font-semibold tracking-wide mb-4 text-center">
            <span>Business Support • Healthcare Support • Technology • Digital Growth • Virtual Assistance • Professional Services</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            From day-to-day operational support and healthcare compliance to custom software and digital growth, our specialists help you solve problems, improve efficiency and unlock growth.
          </p>
        </div>

        {/* 6-Card Responsive Grid: 3x2 Desktop, 2 Columns Tablet & Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col card-hover-effect group shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-28 xs:h-32 sm:h-48 md:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70" />
                
                {/* Blue Line Icon */}
                <div className="absolute bottom-2 left-2 sm:bottom-3.5 sm:left-3.5 bg-white/95 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  <div className="scale-75 sm:scale-100 origin-center">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">
                    {card.title}
                  </h3>
                  <p className="text-[10.5px] xs:text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-5 mt-3 sm:mt-5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
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
