"use client";

import React from "react";

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function CohortIntro({ onAddCohort }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-[28px] font-bold tracking-[-0.02em] text-[#0B0F19]">
          Cohorts
        </h1>

        <p className="mt-1.5 text-[14px] leading-5 text-[#68708A]">
          Manage and monitor all cohorts in the system.
        </p>
      </div>

      <button
        type="button"
        onClick={onAddCohort}
        className="
          inline-flex
          h-[44px]
          shrink-0
          items-center
          justify-center
          gap-2
          rounded-[9px]
          bg-[#C8955A]
          px-5
          text-[14px]
          font-semibold
          text-white
          shadow-[0_5px_14px_rgba(200,149,90,0.18)]
          transition-all
          duration-200
          hover:bg-[#B9854B]
          hover:shadow-[0_7px_18px_rgba(200,149,90,0.25)]
          active:scale-[0.98]
        "
      >
        <PlusIcon />
        Add Cohort
      </button>
    </div>
  );
}