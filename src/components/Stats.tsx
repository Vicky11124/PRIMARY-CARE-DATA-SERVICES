export default function Stats() {
  const stats = [
    { value: "10+", label: "Service Areas" },
    { value: "5", label: "Core Solutions" },
    { value: "UK", label: "Focused Delivery" },
    { value: "360°", label: "Business Support" },
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-10 md:py-14 shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 md:p-6 ${
                idx % 2 === 0 ? "border-r md:border-r-0 border-slate-200" : ""
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
