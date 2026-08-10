"use client";

import SkillBadge from "./SkillBadge";

export default function SkillsList({ skills = [] }) {
  if (!skills.length) {
    return (
      <span className="text-sm text-[#1B3A6B]">
        No skills
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge
          key={`${skill}-${index}`}
          skill={skill}
        />
      ))}
    </div>
  );
}