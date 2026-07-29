export default function SkillBadge({ skill }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-green-100 hover:text-green-700">
      {skill}
    </span>
  );
}