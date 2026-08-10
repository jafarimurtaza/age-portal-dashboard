// components/graduates/SkillBadge.jsx

"use client";

export default function SkillBadge({
  skill,
}) {
  return (
    <span
      className="
        rounded-full
        bg-[#0B0F19]
        px-3
        py-1.5
        text-xs
        font-medium
        text-white
      "
    >
      {skill}
    </span>
  );
}