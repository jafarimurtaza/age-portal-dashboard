import ProjectIcon from "./ProjectIcon";
import StatusBadge from "./StatusBadge";
import ActionsMenu from "./ActionsMenu";

export default function TableRow({ project, index, onDelete, onEditClick }) {
  return (
    <div className="group relative bg-gradient-to-r from-[#131a2b] to-[#1B3A6B] rounded-2xl shadow-md hover:shadow-2xl hover:shadow-[#C8955A]/20 hover:scale-[1.015] transition-all duration-300 overflow-hidden">
      <span className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#C8955A]" />

      <div className="p-5 pl-6 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex items-center gap-3 lg:w-[27%] min-w-0">
          <ProjectIcon index={index} stack={project.stack} />
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-fraunces)] text-[15px] text-[#FAF7F2] truncate">
              {project.name}
            </p>
            <p className="text-xs text-[#FAF7F2]/45 truncate">
              {project.github}
            </p>
          </div>
        </div>
        <div className="lg:w-[24%] bg-white/5 rounded-xl p-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#C8955A]/25 text-[#eec9a3]">
              {project.cohort}
            </span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 text-[#FAF7F2]/85 text-xs font-medium px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between lg:w-[27%] gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(project.author.name)}&background=C8955A&color=0B0F19&bold=true`}
              alt={project.author.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20 shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#FAF7F2] truncate">
                {project.author.name}
              </p>
              <p className="text-xs text-[#FAF7F2]/45 truncate">
                {project.author.role}
              </p>
            </div>
          </div>
          <div className="text-right shrink-0 hidden sm:block">
            <p className="text-xs text-[#FAF7F2]/65">
              {project.updatedRelative}
            </p>
            <p className="text-[11px] text-[#FAF7F2]/35">
              {project.updatedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between lg:w-[16%] lg:justify-end gap-4">
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
