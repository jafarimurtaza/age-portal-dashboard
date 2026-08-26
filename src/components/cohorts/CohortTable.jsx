"use client";

import React from "react";
import CohortRow from "./CohortRow";

export default function CohortTable({
  cohorts = [],
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#E5DED3] bg-white shadow-[0_2px_8px_rgba(11,15,25,0.025)]">
      <div className="overflow-x-auto">
        <div className="min-w-[1050px]">

          <div className="grid grid-cols-[2.2fr_1.25fr_0.8fr_0.8fr_1fr_1fr_1.2fr] items-center bg-[#F5F0E8] px-5 py-4 text-[11px] font-semibold uppercase tracking-wide text-[#1B3A6B]">
            <div>COHORT</div>
            <div>DATE RANGE</div>
            <div>GRADUATES</div>
            <div>PROJECTS</div>
            <div>CATEGORY</div>
            <div>STATUS</div>
            <div>ACTIONS</div>
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
            <div className="py-14 text-center text-[14px] text-[#68708A]">
              No cohorts found.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}