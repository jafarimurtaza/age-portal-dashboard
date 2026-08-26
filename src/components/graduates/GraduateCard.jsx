"use client";

import GraduateInfo from "./GraduateInfo";
import RoleBadge from "./RoleBadge";
import CohortBadge from "./CohortBadge";
import SkillsList from "./SkillsList";
import StatusBadge from "./StatusBadge";
import GraduateActions from "./GraduateActions";

export default function GraduateCard({
  graduate,
  onDelete,
  onView,
}) {
  return (
    <div className="bg-white px-4 py-5 sm:px-5">
      <div className="flex flex-col gap-5">
        <GraduateInfo graduate={graduate} />

        <div className="flex flex-wrap gap-2">
          <RoleBadge role={graduate.role} />

          <CohortBadge cohort={graduate.cohort} />

          <StatusBadge status={graduate.status} />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#1B3A6B]">
            Skills
          </p>

          <SkillsList skills={graduate.skills} />
        </div>

        <div className="border-t border-[#F5F0E8] pt-3">
          <GraduateActions
            graduate={graduate}
            onView={onView}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}