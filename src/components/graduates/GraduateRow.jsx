// components/graduates/GraduateRow.jsx

"use client";

import GraduateInfo from "./GraduateInfo";
import RoleBadge from "./RoleBadge";
import CohortBadge from "./CohortBadge";
import SkillsList from "./SkillsList";
import StatusBadge from "./StatusBadge";
import GraduateActions from "./GraduateActions";

export default function GraduateRow({
  graduate,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  return (
    <tr className="border-b border-[#F5F0E8] transition-colors hover:bg-[#FAF7F2]">

      <td className="px-6 py-5">
        <GraduateInfo graduate={graduate} />
      </td>

      <td className="px-6 py-5">
        <RoleBadge role={graduate.role} />
      </td>

      <td className="px-6 py-5">
        <CohortBadge cohort={graduate.cohort} />
      </td>

      <td className="px-6 py-5">
        <SkillsList skills={graduate.skills || []} />
      </td>

      <td className="px-6 py-5">
        <StatusBadge status={graduate.status} />
      </td>

      <td className="px-6 py-5">
        <GraduateActions
          graduate={graduate}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
          onComment={onComment}
        />
      </td>

    </tr>
  );
}