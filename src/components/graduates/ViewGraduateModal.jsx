// components/graduates/ViewGraduateModal.jsx

"use client";

import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";

export default function ViewGraduateModal({
  open,
  graduate,
  onClose,
}) {
  if (!open || !graduate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-[#0B0F19]">

            Graduate Profile

          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-[#1B3A6B]"
          >
            ×
          </button>

        </div>

        <div className="mt-8 flex flex-col items-center">

          <img
            src={graduate.avatar}
            alt={graduate.name}
            className="h-32 w-32 rounded-full border-4 border-[#C8955A] object-cover"
          />

          <h3 className="mt-5 text-2xl font-bold text-[#0B0F19]">
            {graduate.name}
          </h3>

          <p className="mt-2 text-[#1B3A6B]">
            {graduate.role}
          </p>

          <StatusBadge status={graduate.status} />

          <p className="mt-6 text-center text-gray-500">
            {graduate.bio}
          </p>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <div>

            <h4 className="font-semibold text-[#0B0F19]">
              Email
            </h4>

            <p>{graduate.email}</p>

          </div>

          <div>

            <h4 className="font-semibold text-[#0B0F19]">
              Cohort
            </h4>

            <p>{graduate.cohort}</p>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-2">

          {graduate.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
            />
          ))}

        </div>

      </div>

    </div>
  );
}