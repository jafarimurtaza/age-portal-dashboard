import StatsGrid from "./OverviewStatsGrid";

export default function PageHeader() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl text-[#0B0F19]">
        Overview<span className="text-[#C8955A]">.</span>
      </h1>
      <p className="mt-2 mb-5 text-sm sm:text-base text-[#0B0F19]/50 max-w-3xl">
        A snapshot of graduates, cohorts, and project activity.
      </p>
      <StatsGrid />
    </div>
  );
}
