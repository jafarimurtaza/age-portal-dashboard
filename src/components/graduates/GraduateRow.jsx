"use client";

import GraduateInfo from "./GraduateInfo";
import RoleBadge from "./RoleBadge";
import CohortBadge from "./CohortBadge";
import SkillsList from "./SkillsList";
import StatusBadge from "./StatusBadge";
import GraduateActions from "./GraduateActions";

export default function GraduateRow({
  graduate,
  onDelete,
  onEdit,
}) {
  return (
    <tr
      className="
        block
        border-b
        border-[#F5F0E8]
        p-4
        last:border-b-0

        md:table-row
        md:border-b
        md:p-0
      "
    >
      {/* Graduate */}
      <td
        className="
          block
          px-0
          py-3

          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex min-w-0 items-center">
          <GraduateInfo graduate={graduate} />
        </div>
      </td>

      {/* Role */}
      <td
        className="
          block
          px-0
          py-2

          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex min-w-0 items-center justify-between gap-3 md:block">
          <span className="text-xs font-medium text-[#0B0F19] md:hidden">
            Role
          </span>

          <RoleBadge role={graduate.role} />
        </div>
      </td>

      {/* Cohort */}
      <td
        className="
          block
          px-0
          py-2

          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex min-w-0 items-center justify-between gap-3 md:block">
          <span className="text-xs font-medium text-[#0B0F19] md:hidden">
            Cohort
          </span>

          <CohortBadge cohort={graduate.cohort} />
        </div>
      </td>

      {/* Skills */}
      <td
        className="
          block
          px-0
          py-2

          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex min-w-0 items-start justify-between gap-3 md:block">
          <span className="pt-1 text-xs font-medium text-[#0B0F19] md:hidden">
            Skills
          </span>

          <div className="min-w-0">
            <SkillsList skills={graduate.skills} />
          </div>
        </div>
      </td>

      {/* Status */}
      <td
        className="
          block
          px-0
          py-2

          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex min-w-0 items-center justify-between gap-3 md:block">
          <span className="text-xs font-medium text-[#0B0F19] md:hidden">
            Status
          </span>

          <StatusBadge status={graduate.status} />
        </div>
      </td>

      {/* Actions */}
      <td
        className="
          block
          px-0
          pt-4
          md:table-cell
          md:px-4
          md:py-5
          lg:px-6
        "
      >
        <div className="flex items-center justify-end">
          <GraduateActions
            graduate={graduate}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </td>
    </tr>
  );
}