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

export default function GraduateRow({
  graduate,
  onDelete,
  onEdit,
  onView,
  onComment,
  onFavorite,
}) {
  return (
    <tr className="group border-b border-gray-100 transition-all duration-300 hover:bg-[#FAF7F2]">

      {/* Graduate */}

      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          <img
            src={
    graduate.avatar ||
    `https://ui-avatars.com/api/?name=${graduate.name}`
}
            alt={graduate.name}
            className="h-14 w-14 rounded-full object-cover border-2 border-[#C8955A]"
          />

          <div>

            <h3 className="font-semibold text-[#0B0F19]">
              {graduate.name}
            </h3>

            <p className="text-sm text-gray-500">
              {graduate.email}
            </p>

          </div>

        </div>

      </td>

      {/* Cohort */}

      <td className="px-6 py-5">

        <span className="rounded-full bg-[#F5F0E8] px-3 py-1 text-sm">

          {graduate.cohort}

        </span>

      </td>

      {/* Role */}

      <td className="px-6 py-5">

        <span className="font-medium">

          {graduate.role}

        </span>

      </td>

      {/* Skills */}

      <td className="px-6 py-5">

        <div className="flex flex-wrap gap-2">

          {graduate.skills.map((skill) => (

            <SkillBadge
              key={skill}
              skill={skill}
            />

          ))}

        </div>

      </td>

      {/* Progress */}

      <td className="px-6 py-5">

        <ProgressCircle
          progress={graduate.progress}
        />

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <StatusBadge
          status={graduate.status}
        />

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex items-center justify-end gap-3">

          <button
            onClick={() => onFavorite(graduate.id)}
            className={`rounded-xl p-2 transition-all duration-300 cursor-pointer ${
              graduate.favorite
                ? "bg-red-100 text-red-500"
                : "hover:bg-red-100"
            }`}
          >

            <Heart
              size={18}
              fill={
                graduate.favorite
                  ? "currentColor"
                  : "none"
              }
            />

          </button>

          <button
            onClick={() =>
              onComment(graduate)
            }
            className="rounded-xl p-2 hover:bg-blue-100 transition-all cursor-pointer"
          >

            <MessageCircle size={18} />

          </button>

          <button
            onClick={() =>
              onView(graduate)
            }
            className="rounded-xl p-2 hover:bg-[#C8955A]/20 transition-all cursor-pointer"
          >

            <Eye size={18} />

          </button>

          <button
            onClick={() =>
              onEdit(graduate)
            }
            className="rounded-xl p-2 hover:bg-green-100 transition-all cursor-pointer"
          >

            <Pencil size={18} />

          </button>

          <button
            onClick={() =>
              onDelete(graduate)
            }
            className="rounded-xl p-2 hover:bg-red-100 transition-all cursor-pointer"
          >

            <Trash2
              size={18}
              className="text-red-500"
            />

          </button>

        </div>

      </td>

    </tr>
  );
}