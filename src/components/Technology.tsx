import Link from "next/link";

const techFeatures = [
  {
    title: "Website Development",
    description: "High-performance websites designed to convert visitors and strengthen your brand.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description: "Purpose-built applications engineered around your exact operational workflows.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Business Automation",
    description: "Eliminate repetitive tasks, connect disjointed apps, and reduce human error.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "CRM & Digital Systems",
    description: "Centralise customer data, manage pipelines, and unlock real-time business intelligence.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

export default function Technology() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200" id="technology">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="section-tag">
              <span>OUR TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight">
              Technology That Moves Your Business Forward.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              From high-performance websites to custom business systems, we build digital infrastructure designed around how your organisation actually works.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {techFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-blue-50/40 hover:border-blue-200 transition-all duration-200 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-md shadow-blue-600/20 transition-all duration-200"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Dashboard UI Mockup */}
          <div className="lg:col-span-6 relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-[#0F172A] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-white">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5 gap-2">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] xs:text-xs font-mono text-slate-400 truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">
                  hub.primarycaredataservices.co.uk
                </div>
                <div className="text-xs text-blue-400 font-medium shrink-0">Dashboard</div>
              </div>

              {/* Main revenue / stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400">Monthly Revenue</span>
                  <div className="text-xl font-bold text-white mt-0.5">£24,300</div>
                  <span className="text-[10px] text-emerald-400 font-medium">+18.4% vs last mo</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400">Automated Runs</span>
                  <div className="text-xl font-bold text-white mt-0.5">14,290</div>
                  <span className="text-[10px] text-blue-400 font-medium">100% success</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400">Time Saved</span>
                  <div className="text-xl font-bold text-white mt-0.5">184 hrs</div>
                  <span className="text-[10px] text-indigo-400 font-medium">Team bandwidth</span>
                </div>
              </div>

              {/* Bar visualization */}
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 mb-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>Weekly Automation Volume</span>
                  <span className="text-emerald-400 text-[11px]">Optimal Load</span>
                </div>
                <div className="flex items-end justify-between h-24 gap-2 pt-2">
                  {[45, 60, 55, 80, 70, 92, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-full rounded-t transition-all ${
                          i === 6 ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "bg-slate-800 hover:bg-slate-700"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[9px] text-slate-400">
                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Activity Row */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200">CRM Lead Sync & Routing</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Active</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-slate-200">Automated Invoicing & Payments</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400">Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
