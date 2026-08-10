// components/graduates/GraduateCard.jsx

"use client";

import {
  Eye,
  Pencil,
  Trash2,
  Heart,
  MessageCircle,
} from "lucide-react";

import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";

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
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div className="flex items-center gap-4">

        <img
          src={
            graduate.avatar ||
            `https://ui-avatars.com/api/?background=C8955A&color=fff&name=${graduate.name}`
          }
          alt={graduate.name}
          className="h-16 w-16 rounded-full border-2 border-[#C8955A]"
        />

        <div className="flex-1">

          <h3 className="text-lg font-bold text-[#0B0F19]">
            {graduate.name}
          </h3>

          <p className="text-sm text-gray-500">
            {graduate.email}
          </p>

        </div>

      </div>

      <div className="mt-5 grid gap-4">

        <div>

          <p className="text-xs text-gray-500">
            Role
          </p>

          <h4 className="font-semibold text-[#1B3A6B]">
            {graduate.role}
          </h4>

        </div>

        <div>

          <p className="text-xs text-gray-500">
            Cohort
          </p>

          <span className="rounded-full bg-[#F5F0E8] px-3 py-1">
            {graduate.cohort}
          </span>

        </div>

        <StatusBadge
          status={graduate.status}
        />

        <div className="flex flex-wrap gap-2">

          {graduate.skills.map((skill) => (

            <SkillBadge
              key={skill}
              skill={skill}
            />

          ))}

        </div>

      </div>

      <div className="mt-6 flex justify-between">

        <button
          onClick={() => onFavorite(graduate)}
          className="rounded-xl p-3 text-[#C8955A] hover:bg-[#F5F0E8]"
        >
          <Heart size={18} />
        </button>

        <button
          onClick={() => onComment(graduate)}
          className="rounded-xl p-3 text-[#1B3A6B] hover:bg-[#F5F0E8]"
        >
          <MessageCircle size={18} />
        </button>

        <button
          onClick={() => onView(graduate)}
          className="rounded-xl p-3 text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white"
        >
          <Eye size={18} />
        </button>

        <button
          onClick={() => onEdit(graduate)}
          className="rounded-xl p-3 text-[#C8955A] hover:bg-[#C8955A] hover:text-white"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(graduate)}
          className="rounded-xl p-3 text-red-500 hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}