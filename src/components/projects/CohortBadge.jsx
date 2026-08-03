const cohortColors = {
  "Cohort 1": "bg-[#C8955A]/10 text-[#8a6539]",
  "Cohort 2": "bg-[#1B3A6B]/10 text-[#1B3A6B]",
  "Cohort 3": "bg-emerald-50 text-emerald-700",
};

export default function CohortBadge({ cohort }) {
  const style = cohortColors[cohort] || "bg-gray-100 text-gray-600";

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
