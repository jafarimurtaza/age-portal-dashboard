import ProjectIcon from "./ProjectIcon";
import StatusBadge from "./StatusBadge";
import ActionsMenu from "./ActionsMenu";

export default function TableRow({ project, index, onDelete, onEditClick }) {
  if (!project || typeof project !== "object") return null;

  const stack = Array.isArray(project.stack) ? project.stack : [];
  const author = project.author || { name: "Unknown", role: "" };

  return (
    <div className="group relative bg-white rounded-2xl border border-[#0B0F19]/6 hover:border-[#C8955A]/40 shadow-[0_1px_2px_rgba(11,15,25,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(11,15,25,0.25)] hover:-translate-y-0.5 transition-all duration-300">
      <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex items-center gap-4 lg:w-[30%] min-w-0">
          <ProjectIcon index={index} stack={stack} />
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-fraunces)] text-lg text-[#0B0F19] truncate leading-tight">
              {project.name}
            </p>
            <p className="text-xs text-[#0B0F19]/40 truncate mt-0.5">
              {project.github}
            </p>
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-[#1B3A6B] text-white">
                {project.cohort}
              </span>
              {stack.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F5F0E8] text-[#0B0F19]/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px self-stretch bg-[#0B0F19]/6" />

        <div className="flex items-center gap-3 lg:w-[26%]">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=0B0F19&color=C8955A&bold=true`}
            alt={author.name}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#0B0F19] truncate">
              {author.name}
            </p>
            <p className="text-xs text-[#0B0F19]/40 truncate">{author.role}</p>
          </div>
        </div>

        <div className="hidden lg:block w-px self-stretch bg-[#0B0F19]/6" />

        <div className="lg:w-[16%]">
          <p className="text-sm text-[#0B0F19]/70">{project.updatedRelative}</p>
          <p className="text-[11px] text-[#0B0F19]/35">{project.updatedDate}</p>
        </div>

        <div className="flex items-center justify-between lg:w-[16%] lg:justify-end gap-3 lg:ml-auto">
          <StatusBadge status={project.status} />
          <ActionsMenu
            onDelete={() => onDelete(project.id)}
            onEdit={() => onEditClick(project)}
            projectName={project.name}
          />
        </div>
      </div>
    </div>
  );
}
