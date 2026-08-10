import CardIllustration from "./CardIllustration";
import StatusBadge from "./StatusBadge";

const iconPaths = {
  React: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <ellipse cx="12" cy="12" rx="8" ry="3" />
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)" />
    </>
  ),
  "Next.js": (
    <>
      <line x1="6" y1="19" x2="6" y2="11" />
      <line x1="12" y1="19" x2="12" y2="5" />
      <line x1="18" y1="19" x2="18" y2="14" />
    </>
  ),
  Python: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.2" />
      <path d="M5 6v11c0 1.2 3.1 2.2 7 2.2s7-1 7-2.2V6" />
    </>
  ),
  Express: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M15 20v-1.5A3.5 3.5 0 0 0 11.5 15h-5A3.5 3.5 0 0 0 3 18.5V20" />
    </>
  ),
};

export default function ProjectCard({
  project,
  index,
  onDelete,
  onEditClick,
  dark,
}) {
  const gold = "#C8955A";
  const illColor = index % 2 === 0 ? gold : "#eec9a3";
  const icon = iconPaths[project.stack?.[0]] || iconPaths.React;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden group ${
        dark
          ? "bg-[#0B0F19] border-[#1B3A6B]/40 hover:border-[#C8955A]/70 shadow-[0_0_0_1px_rgba(200,149,90,0.1)] hover:shadow-[0_0_25px_-5px_rgba(200,149,90,0.4)]"
          : "bg-white border-[#0B0F19]/8 hover:border-[#C8955A]/60 shadow-sm hover:shadow-xl"
      }`}
    >
      <div className="relative px-4 pt-6 pb-2 bg-gradient-to-br from-[#1B3A6B] to-[#0B0F19]">
        <CardIllustration stack={project.stack} color={illColor} large />

        <div className="absolute left-4 -bottom-6">
          <svg width="52" height="58" viewBox="0 0 52 58">
            <polygon
              points="26,2 48,15 48,43 26,56 4,43 4,15"
              fill={dark ? "#0B0F19" : "#FFFFFF"}
              stroke={gold}
              strokeWidth="1.5"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={gold}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-[16px] left-[14px]"
          >
            {icon}
          </svg>
        </div>

        <button className="absolute right-3 top-3 w-7 h-7 rounded-full flex items-center justify-center text-xs text-white/40 hover:text-white">
          ⋮
        </button>
      </div>

      {/* بدنه کارت */}
      <div className="pt-9 px-4 pb-4">
        <p
          className={`font-[family-name:var(--font-fraunces)] text-[15px] leading-tight truncate ${dark ? "text-[#FAF7F2]" : "text-[#0B0F19]"}`}
        >
          {project.name}
        </p>
        <p
          className={`text-[11px] truncate mt-0.5 ${dark ? "text-[#FAF7F2]/35" : "text-[#0B0F19]/35"}`}
        >
          {project.github}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          <span
            className={`text-[10px] font-medium px-2 py-1 rounded-lg ${dark ? "bg-[#C8955A]/15 text-[#e0b183]" : "bg-[#C8955A]/15 text-[#8a6539]"}`}
          >
            {project.cohort}
          </span>
          {project.stack?.map((t) => (
            <span
              key={t}
              className={`text-[10px] font-medium px-2 py-1 rounded-lg ${dark ? "bg-white/8 text-[#FAF7F2]/70" : "bg-[#F5F0E8] text-[#0B0F19]/60"}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className={`flex items-center gap-2.5 mt-4 pt-3 border-t ${dark ? "border-white/8" : "border-[#0B0F19]/6"}`}
        >
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(project.author?.name || "?")}&background=1B3A6B&color=C8955A&bold=true`}
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <div className="min-w-0">
            <p
              className={`text-xs font-medium truncate ${dark ? "text-[#FAF7F2]" : "text-[#0B0F19]"}`}
            >
              {project.author?.name}
            </p>
            <p
              className={`text-[10px] truncate ${dark ? "text-[#FAF7F2]/35" : "text-[#0B0F19]/35"}`}
            >
              {project.author?.role}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p
              className={`text-[11px] ${dark ? "text-[#FAF7F2]/40" : "text-[#0B0F19]/40"}`}
            >
              {project.updatedRelative}
            </p>
            <p
              className={`text-[10px] ${dark ? "text-[#FAF7F2]/25" : "text-[#0B0F19]/25"}`}
            >
              {project.updatedDate}
            </p>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>
    </div>
  );
}
