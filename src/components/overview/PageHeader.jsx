import StatCard from "./StatCard";

export default function PageHeader() {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
        Overview
      </h1>
      <p className="mt-3 mb-4 text-sm sm:text-base text-slate-600 max-w-3xl">
        A snapshot of graduates, cohorts, and project activity.
      </p>
      <StatCard />
    </div>
  );
}
