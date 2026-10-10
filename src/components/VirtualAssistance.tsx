const vaServices = [
  {
    title: "Administrative Support",
    description: "Diaries, documents, scheduling and day-to-day workflow coordination.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Customer Support",
    description: "Friendly, prompt, and consistent communication across helpdesks and chat channels.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Data Entry",
    description: "Fast and precise record keeping, data cleaning, migrations, and database updates.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Email Management",
    description: "An inbox that is triaged, categorized, and prioritized before you start your day.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Research",
    description: "In-depth market, competitor, supplier, and prospect intelligence briefings.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Back Office Support",
    description: "End-to-end operational execution, compliance checks, and file administration.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function VirtualAssistance() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200" id="virtual">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <span>VIRTUAL ASSISTANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Give Your Team More Time to Focus.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Delegate administrative, operational and back-office tasks to experienced UK-aligned professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {vaServices.map((va, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-8 bg-slate-50/70 border border-slate-200 rounded-xl sm:rounded-2xl hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <div className="scale-75 sm:scale-100 origin-center">
                    {va.icon}
                  </div>
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 sm:line-clamp-none">
                  {va.title}
                </h3>
                <p className="text-[10.5px] xs:text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {va.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
