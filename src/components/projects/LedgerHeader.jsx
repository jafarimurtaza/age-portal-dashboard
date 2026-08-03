export default function LedgerHeader({ stats, onAddClick }) {
  return (
    <div className="bg-gradient-to-b from-[#0B0F19] to-[#1B3A6B] pt-8 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
      <p className="text-[11px] tracking-[0.25em] text-[#C8955A] uppercase mb-2">
        Admin · Projects Ledger
      </p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl text-[#FAF7F2]">
            Projects
          </h1>
          <p className="text-sm text-[#FAF7F2]/50 mt-2">
            Manage all graduate projects, track progress and review submissions.
          </p>
        </div>
        <button
          type="button"
          onClick={onAddClick}
          className="border border-[#C8955A] text-[#C8955A] hover:bg-[#C8955A] hover:text-[#0B0F19] transition text-sm font-medium px-5 py-2.5 rounded-full w-full sm:w-auto"
        >
          + Add Project
        </button>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap gap-x-6 gap-y-4 overflow-x-auto">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center shrink-0">
            <div className="pr-6">
              <p className="text-[10px] tracking-[0.15em] text-[#FAF7F2]/40 uppercase mb-1">
                {stat.label}
              </p>
              <p className="font-[family-name:var(--font-fraunces)] text-2xl text-[#FAF7F2]">
                {stat.value}
              </p>
              {stat.change && (
                <p
                  className={`text-[11px] mt-1 ${stat.trend === "up" ? "text-emerald-400" : "text-red-400"}`}
                >
                  {stat.trend === "up" ? "↑" : "↓"} {stat.change}
                </p>
              )}
            </div>
            {i < stats.length - 1 && (
              <div className="hidden sm:block h-10 w-px bg-[#C8955A]/25" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
