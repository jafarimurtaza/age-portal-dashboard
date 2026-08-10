// components/graduates/GraduateProfile.jsx

"use client";

import CommentsList from "./CommentsList";
import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";
import ProgressCircle from "./ProgressCircle";

export default function GraduateProfile({
  graduate,
}) {
  if (!graduate) return null;

  return (
    <div className="space-y-6">

      <div className="flex flex-col items-center rounded-3xl bg-[#FAF7F2] p-6 text-center">

        <img
          src={
            graduate.avatar ||
            `https://ui-avatars.com/api/?background=C8955A&color=fff&name=${encodeURIComponent(
              graduate.name
            )}`
          }
          alt={graduate.name}
          className="
            h-28
            w-28
            rounded-full
            border-4
            border-[#C8955A]
            object-cover
          "
        />

        <h3 className="mt-4 text-2xl font-bold text-[#0B0F19]">
          {graduate.name}
        </h3>

        <p className="mt-1 text-[#1B3A6B]">
          {graduate.role}
        </p>

        <div className="mt-4">
          <StatusBadge status={graduate.status} />
        </div>

      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl bg-[#F5F0E8] p-4">
          <p className="text-xs text-[#1B3A6B]">
            Email
          </p>

          <p className="mt-1 break-all font-medium text-[#0B0F19]">
            {graduate.email}
          </p>
        </div>

        <div className="rounded-2xl bg-[#F5F0E8] p-4">
          <p className="text-xs text-[#1B3A6B]">
            Cohort
          </p>

          <p className="mt-1 font-medium text-[#0B0F19]">
            {graduate.cohort}
          </p>
        </div>

      </div>

      <div className="flex flex-col items-center rounded-3xl bg-[#F5F0E8] p-6">

        <ProgressCircle
          value={Number(graduate.progress) || 0}
        />

      </div>

      <div>

        <h4 className="mb-3 font-semibold text-[#0B0F19]">
          Skills
        </h4>

        <div className="flex flex-wrap gap-2">

          {(graduate.skills || []).map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
            />
          ))}

        </div>

      </div>

      {graduate.bio && (
        <div>

          <h4 className="mb-3 font-semibold text-[#0B0F19]">
            About
          </h4>

          <p className="rounded-2xl bg-[#F5F0E8] p-4 text-sm leading-7 text-[#0B0F19]">
            {graduate.bio}
          </p>

        </div>
      )}

      <div>

        <h4 className="mb-3 font-semibold text-[#0B0F19]">
          Comments
        </h4>

        <CommentsList
          comments={graduate.comments || []}
        />

      </div>

    </div>
  );
}