import CardIllustration from "./CardIllustration";
import StatusBadge from "./StatusBadge";
import ActionsMenu from "./ActionsMenu";

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

export default function ProjectCard({ project, index, onDelete, onEditClick }) {
  const gold = "#C8955A";
  const illColor = index % 2 === 0 ? gold : "#eec9a3";
  const icon = iconPaths[project.stack?.[0]] || iconPaths.React;

  return (
    <div className="relative rounded-2xl border transition-all duration-300 overflow-hidden group bg-white border-[#0B0F19]/8 hover:border-[#C8955A]/60 shadow-sm hover:shadow-xl">
      <div className="relative px-4 pt-6 pb-9 bg-gradient-to-br from-[#1B3A6B] to-[#0B0F19]">
        <CardIllustration stack={project.stack} color={illColor} large />

        <div className="absolute right-3 top-3">
          <ActionsMenu
            variant="dark"
            onDelete={() => onDelete(project.id)}
            onEdit={() => onEditClick(project)}
            projectName={project.name}
          />
        </div>
      </div>

      <div className="absolute left-4 top-[128px] w-14 h-14 flex items-center justify-center">
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute">
          <polygon
            points="28,2 51,15 51,41 28,54 5,41 5,15"
            fill="#FFFFFF"
            stroke={gold}
            strokeWidth="1.5"
          />
        </svg>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={gold}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative"
        >
          {icon}
        </svg>
      </div>

      <div className="pt-9 px-4 pb-4">
        <p className="font-[family-name:var(--font-fraunces)] text-[15px] leading-tight truncate text-[#0B0F19]">
          {project.name}
        </p>
        <p className="text-[11px] truncate mt-0.5 text-[#0B0F19]/35">
          {project.github}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-[10px] font-medium px-2 py-1 rounded-lg bg-[#C8955A]/15 text-[#8a6539]">
            {project.cohort}
          </span>
          {project.stack?.map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium px-2 py-1 rounded-lg bg-[#F5F0E8] text-[#0B0F19]/60"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-[#0B0F19]/6">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(project.author?.name || "?")}&background=1B3A6B&color=C8955A&bold=true`}
            className="w-8 h-8 rounded-full"
            alt=""
          />
          <div className="min-w-0">
            <p className="text-xs font-medium truncate text-[#0B0F19]">
              {project.author?.name}
            </p>
            <p className="text-[10px] truncate text-[#0B0F19]/35">
              {project.author?.role}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-[11px] text-[#0B0F19]/40">
              {project.updatedRelative}
            </p>
            <p className="text-[10px] text-[#0B0F19]/25">
              {project.updatedDate}
            </p>
          </div>
          <StatusBadge status={project.status} />
        </div>
      </div>
    </div>
  );
}
