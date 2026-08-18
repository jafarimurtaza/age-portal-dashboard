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
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function CohortHeader({ onAddCohort }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-[28px] font-bold text-[#11142D]">
          Cohorts
        </h1>

        <p className="mt-1 text-[14px] text-[#68708A]">
          Manage and monitor all cohorts in the system.
        </p>
      </div>

      <button
        onClick={onAddCohort}
        className="flex items-center gap-2 rounded-[9px] bg-[#4B21E8] px-[20px] py-[12px] text-[14px] font-semibold text-white transition hover:bg-[#3F1BC7] active:scale-[0.98]"
      >
        <PlusIcon />
        Add Cohort
      </button>
    </div>
  );
}