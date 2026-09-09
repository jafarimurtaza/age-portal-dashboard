import SkillBadge from "./SkillBadge";

export default function SkillsList({ skills = [] }) {
  return (
    <div className="flex min-w-0 flex-wrap justify-end gap-1.5 md:justify-start md:gap-2">
      {skills.map((skill) => (
        <SkillBadge
          key={skill}
          skill={skill}
        />
      ))}
    </div>
  );
}