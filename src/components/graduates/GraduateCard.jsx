import {
  Eye,
  Pencil,
  Trash2,
  Heart,
  MessageCircle,
} from "lucide-react";

import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";
import ProgressCircle from "./ProgressCircle";

export default function GraduateCard({
  graduate,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-5
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <img
            src={graduate.avatar}
            alt={graduate.name}
            className="
              h-16
              w-16
              rounded-full
              object-cover
              border-[3px]
              border-[#C8955A]
            "
          />

          <div>

            <h2 className="font-bold text-lg text-[#0B0F19]">
              {graduate.name}
            </h2>

            <p className="text-sm text-gray-500">
              {graduate.email}
            </p>

            <p className="mt-1 text-sm font-medium text-[#1B3A6B]">
              {graduate.role}
            </p>

          </div>

        </div>

        <button
          onClick={() => onFavorite(graduate.id)}
          className={`
            rounded-xl
            p-2
            transition-all
            duration-300
            cursor-pointer
            ${
              graduate.favorite
                ? "bg-red-100 text-red-500"
                : "hover:bg-red-100"
            }
          `}
        >
          <Heart
            size={20}
            fill={
              graduate.favorite
                ? "currentColor"
                : "none"
            }
          />
        </button>

      </div>

      {/* Cohort */}

      <div className="mt-5">

        <span className="rounded-full bg-[#F5F0E8] px-4 py-2 text-sm">
          {graduate.cohort}
        </span>

      </div>

      {/* Skills */}

      <div className="mt-5 flex flex-wrap gap-2">

        {graduate.skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}

      </div>

      {/* Progress */}

      <div className="mt-6 flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            Progress
          </p>

          <ProgressCircle
            progress={graduate.progress}
          />

        </div>

        <StatusBadge
          status={graduate.status}
        />

      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-between">

        <button
          onClick={() => onComment(graduate)}
          className="
            rounded-xl
            bg-[#F5F0E8]
            p-3
            transition
            hover:bg-[#C8955A]
            hover:text-white
            cursor-pointer
          "
        >
          <MessageCircle size={18} />
        </button>

        <button
          onClick={() => onView(graduate)}
          className="
            rounded-xl
            bg-[#F5F0E8]
            p-3
            transition
            hover:bg-[#1B3A6B]
            hover:text-white
            cursor-pointer
          "
        >
          <Eye size={18} />
        </button>

        <button
          onClick={() => onEdit(graduate)}
          className="
            rounded-xl
            bg-[#F5F0E8]
            p-3
            transition
            hover:bg-green-600
            hover:text-white
            cursor-pointer
          "
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(graduate)}
          className="
            rounded-xl
            bg-[#F5F0E8]
            p-3
            transition
            hover:bg-red-600
            hover:text-white
            cursor-pointer
          "
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}