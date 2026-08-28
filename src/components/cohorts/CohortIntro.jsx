"use client";

import React from "react";

function PlusIcon() {
  return (
    <svg
      width="19"
      height="19"
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
    <section className="mb-7">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>
          <h1 className="font-[var(--font-fraunces)] text-[42px] font-semibold leading-none tracking-[-1px] text-white">
            Cohorts<span className="text-[#D9A441]">.</span>
          </h1>

          <div className="mt-3 flex items-center gap-3 text-[13px]">
            <span className="text-[#AAB7C8]">
              Dashboard
            </span>

            <span className="text-[#65758A]">
              ›
            </span>

            <span className="font-medium text-[#D9A441]">
              Cohorts
            </span>
          </div>
        </div>

        <div className="flex items-start gap-8 lg:pt-1">

          <p className="hidden max-w-[330px] text-[15px] leading-6 text-[#B7C3D2] xl:block">
            Manage all cohorts, track progress, and
            overview cohort performance.
          </p>

          <button
            type="button"
            onClick={onAddCohort}
            className="
              flex h-[52px]
              items-center
              gap-2
              rounded-[7px]
              border border-[#E0AE4D]
              bg-[#D39A35]
              px-6
              text-[15px]
              font-semibold
              text-[#061B35]
              shadow-[0_8px_22px_rgba(211,154,53,0.18)]
              transition-all
              duration-200
              hover:-translate-y-[2px]
              hover:bg-[#E0AE4D]
              hover:shadow-[0_12px_30px_rgba(211,154,53,0.25)]
              active:translate-y-0
            "
          >
            <PlusIcon />
            Add Cohort
          </button>

        </div>

      </div>
    </section>
  );
}