const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand your challenges, operational bottlenecks and business goals.",
  },
  {
    num: "02",
    title: "Plan",
    description: "Create the right strategy, scope and solution tailored to your organisation.",
  },
  {
    num: "03",
    title: "Implement",
    description: "Deploy the technology, specialists, and streamlined workflows seamlessly.",
  },
  {
    num: "04",
    title: "Support",
    description: "Provide reliable ongoing support, SLA monitoring, and active optimisation.",
  },
  {
    num: "05",
    title: "Grow",
    description: "Continuously review performance, scale capabilities, and achieve more.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            A Simple Process. Powerful Results.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our structured 5-step delivery methodology ensures total clarity, speed to value, and consistent high standards.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/70 border border-slate-200 rounded-2xl relative flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    Step {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
