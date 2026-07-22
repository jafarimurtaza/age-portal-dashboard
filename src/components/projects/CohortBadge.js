const cohortColors = {
  "Cohort 1": "bg-orange-500/20 text-orange-300",
  "Cohort 2": "bg-violet-500/20 text-violet-300",
  "Cohort 3": "bg-emerald-500/20 text-emerald-300",
};

export default function CohortBadge({ cohort }) {
  const style = cohortColors[cohort] || "bg-slate-500/20 text-slate-300";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${style}`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      {cohort}
    </span>
  );
}
