"use client";

export default function CohortBadge({ cohort }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-[#F5F0E8]
        px-4
        py-2
        text-sm
        font-medium
        text-[#1B3A6B]
        whitespace-nowrap
      "
    >
      {cohort || "—"}
    </span>
  );
}