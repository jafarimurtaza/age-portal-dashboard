export default function LedgerHeader({ stats, onAddClick }) {
  return (
    <div className="relative pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden bg-white">
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] tracking-[0.3em] text-[#C8955A] uppercase">
            AfghanGeeks · Admin
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
          <h1 className="font-[family-name:var(--font-fraunces)] text-5xl sm:text-6xl leading-[0.95] text-[#0B0F19]">
            Projects<span className="text-[#C8955A]">.</span>
          </h1>

          <div className="flex items-center gap-4">
            <p className="text-sm max-w-xs hidden sm:block text-[#0B0F19]/45">
              Manage all graduate projects, track progress and review
              submissions.
            </p>

            <button
              onClick={onAddClick}
              className="bg-[#C8955A] hover:bg-[#e0b183] text-[#0B0F19] transition text-sm font-semibold px-6 py-3 rounded-full shrink-0 shadow-lg shadow-[#C8955A]/20"
            >
              + Add Project
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px rounded-2xl overflow-hidden bg-[#0B0F19]/8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-4 sm:p-5 bg-white ${
                index === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p className="text-[10px] tracking-[0.15em] uppercase mb-2 text-[#0B0F19]/35">
                {stat.label}
              </p>

              <div className="flex items-end justify-between">
                <p className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl text-[#0B0F19]">
                  {stat.value}
                </p>

                {stat.change && (
                  <span
                    className={`text-[11px] font-medium mb-1 ${
                      stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stat.trend === "up" ? "↑" : "↓"} {stat.change}
                  </span>
                )}
              </div>

              <div className="flex gap-[3px] mt-3 h-6 items-end">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i === 6 ? "#1B3A6B" : "rgba(11,15,25,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
