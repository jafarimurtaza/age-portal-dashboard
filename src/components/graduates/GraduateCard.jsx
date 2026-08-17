"use client";

import {
  Eye,
  Heart,
  MessageCircle,
  Pencil,
  Trash2,
} from "lucide-react";

import GraduateInfo from "./GraduateInfo";
import RoleBadge from "./RoleBadge";
import CohortBadge from "./CohortBadge";
import SkillsList from "./SkillsList";
import StatusBadge from "./StatusBadge";

export default function GraduateCard({
  graduate,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  if (!graduate) return null;

  return (
    <div className="rounded-3xl bg-white p-5 shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <GraduateInfo graduate={graduate} />

          <button
            type="button"
            onClick={() => onFavorite?.(graduate)}
            aria-label="Favorite graduate"
            className="cursor-pointer rounded-xl p-2.5 text-[#C8955A] transition-all duration-300 hover:bg-[#C8955A] hover:text-white"
          >
            <Heart size={19} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#F5F0E8] p-3">
            <p className="mb-1 text-xs font-medium text-[#1B3A6B]">
              Role
            </p>

            <RoleBadge role={graduate.role} />
          </div>

          <div className="rounded-2xl bg-[#F5F0E8] p-3">
            <p className="mb-1 text-xs font-medium text-[#1B3A6B]">
              Cohort
            </p>

            <CohortBadge cohort={graduate.cohort} />
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-[#1B3A6B]">
            Skills
          </p>

          <SkillsList skills={graduate.skills || []} />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#F5F0E8] pt-4">
          <StatusBadge status={graduate.status} />

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onView?.(graduate)}
              aria-label="View graduate"
              className="cursor-pointer rounded-xl p-2.5 text-[#1B3A6B] transition-all duration-300 hover:bg-[#1B3A6B] hover:text-white"
            >
              <Eye size={18} />
            </button>

            <button
              type="button"
              onClick={() => onComment?.(graduate)}
              aria-label="Comment on graduate"
              className="cursor-pointer rounded-xl p-2.5 text-[#1B3A6B] transition-all duration-300 hover:bg-[#1B3A6B] hover:text-white"
            >
              <MessageCircle size={18} />
            </button>

            <button
              type="button"
              onClick={() => onEdit?.(graduate)}
              aria-label="Edit graduate"
              className="cursor-pointer rounded-xl p-2.5 text-[#C8955A] transition-all duration-300 hover:bg-[#C8955A] hover:text-white"
            >
              <Pencil size={18} />
            </button>

            <button
              type="button"
              onClick={() => onDelete?.(graduate)}
              aria-label="Delete graduate"
              className="cursor-pointer rounded-xl p-2.5 text-[#0B0F19] transition-all duration-300 hover:bg-[#0B0F19] hover:text-white"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}