"use client";

import SkillBadge from "./SkillBadge";

export default function SkillsList({ skills = [] }) {
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