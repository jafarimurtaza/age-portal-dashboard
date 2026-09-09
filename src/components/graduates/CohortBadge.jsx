"use client";

export default function CohortBadge({ cohort }) {
  return (
    <span
      className="
        inline-flex
        h-9
        min-w-fit
        shrink-0
        items-center
        justify-center
        whitespace-nowrap
        rounded-full
        bg-[#F5F0E8]
        px-4
        text-sm
        font-medium
        leading-none
        text-[#1B3A6B]
      "
    >
      {cohort}
    </span>
  );
}