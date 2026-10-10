"use client";

const growthServices = [
  {
    title: "SEO",
    description: "Higher rankings, organic visibility, and sustainable traffic.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Social Media",
    description: "Build your brand authority and actively engage your audience.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Meta Ads",
    description: "Targeted advertising across Facebook & Instagram for fast scale.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Lead Generation",
    description: "Turn casual web traffic into qualified, high-intent enquiries.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    description: "Capture buyers at the exact moment they search for your services.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Growth() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200" id="growth">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Growth Overview & Channel Grid */}
          <div className="lg:col-span-6">
            <div className="section-tag">
              <span>DIGITAL GROWTH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
              More Visibility. More Leads. More Growth.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Data-driven marketing strategies to help your business get found, attract the right customers and achieve measurable results.
            </p>

            {/* Channels 2-column list */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-4">
              {growthServices.map((service, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 bg-white border border-slate-200/90 rounded-xl flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <div className="scale-85 sm:scale-100 origin-top-left">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{service.title}</h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-tight sm:leading-snug">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Growth Analytics Card with Floating Metric */}
          <div className="lg:col-span-6 relative">
            {/* Floating Spike Badge */}
            <div className="absolute -top-3.5 right-2 sm:-top-4 sm:right-8 z-20 animate-float-slow">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-emerald-600 text-white rounded-xl shadow-lg text-[11px] sm:text-xs font-bold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span>+1234% Growth Spike</span>
              </div>
            </div>

            {/* Main Graph Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Revenue & Lead Generation
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    £148,920
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    ↑ 4.8x ROI
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative h-52 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160">
                  <defs>
                    <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <g stroke="#F1F5F9" strokeWidth="1">
                    <line x1="0" y1="30" x2="400" y2="30" />
                    <line x1="0" y1="70" x2="400" y2="70" />
                    <line x1="0" y1="110" x2="400" y2="110" />
                    <line x1="0" y1="150" x2="400" y2="150" />
                  </g>

                  {/* Area fill */}
                  <path
                    d="M 0 140 Q 80 125, 140 100 T 260 55 T 400 15 L 400 150 L 0 150 Z"
                    fill="url(#growthGrad)"
                  />

                  {/* Primary Line */}
                  <path
                    d="M 0 140 Q 80 125, 140 100 T 260 55 T 400 15"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Highlight Nodes */}
                  <circle cx="140" cy="100" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                  <circle cx="260" cy="55" r="4" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                  <circle cx="400" cy="15" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                </svg>
              </div>

              {/* Month Labels */}
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
