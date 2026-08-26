"use client";

import React from "react";
import CohortRow from "./CohortRow";

export default function CohortTable({
  cohorts,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-[#28445F]
        bg-[#08223F]
        shadow-[0_10px_30px_rgba(0,0,0,0.18)]
      "
    >
      <div className="overflow-x-auto">

        <div className="min-w-[1050px]">

          <div
            className="
              grid
              grid-cols-[2fr_1.15fr_1.35fr_0.75fr_0.75fr_1fr_1fr_0.85fr]
              items-center
              bg-[#F8F2E8]
              px-5
              py-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.5px]
              text-[#10223A]
            "
          >
            <div>COHORT</div>
            <div>CODE</div>
            <div>DATES</div>
            <div>GRADUATES</div>
            <div>PROJECTS</div>
            <div>CATEGORY</div>
            <div>STATUS</div>
            <div className="text-center">ACTIONS</div>
          </div>

          {cohorts.length > 0 ? (
            cohorts.map((cohort) => (
              <CohortRow
                key={cohort.id}
                cohort={cohort}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <div className="px-5 py-16 text-center text-[14px] text-[#AAB7C8]">
              No cohorts found.
            </div>
          )}

        </div>

      </div>
    </div>
  );
}