const skillColors = {
  React: "bg-sky-100 text-sky-700 border-sky-200",
  "Next.js": "bg-black text-white border-black",
  JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-300",
  TypeScript: "bg-blue-100 text-blue-700 border-blue-300",
  HTML: "bg-orange-100 text-orange-700 border-orange-300",
  CSS: "bg-indigo-100 text-indigo-700 border-indigo-300",
  Tailwind: "bg-cyan-100 text-cyan-700 border-cyan-300",
  "Tailwind CSS": "bg-cyan-100 text-cyan-700 border-cyan-300",
  Bootstrap: "bg-purple-100 text-purple-700 border-purple-300",
  Node: "bg-green-100 text-green-700 border-green-300",
  "Node.js": "bg-green-100 text-green-700 border-green-300",
  Express: "bg-gray-200 text-gray-800 border-gray-300",
  MongoDB: "bg-emerald-100 text-emerald-700 border-emerald-300",
  PostgreSQL: "bg-blue-100 text-blue-700 border-blue-300",
  Firebase: "bg-amber-100 text-amber-700 border-amber-300",
  Git: "bg-red-100 text-red-700 border-red-300",
  GitHub: "bg-gray-900 text-white border-gray-900",
  Figma: "bg-pink-100 text-pink-700 border-pink-300",
  UI: "bg-violet-100 text-violet-700 border-violet-300",
  UX: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300",
};

export default function SkillBadge({ skill }) {
  const color =
    skillColors[skill] ||
    "bg-[#F5F0E8] text-[#1B3A6B] border-[#C8955A]";

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
        cursor-pointer
        ${color}
      `}
    >
      {skill}
    </span>
  );
}