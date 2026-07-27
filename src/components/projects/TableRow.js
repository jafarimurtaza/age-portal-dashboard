import ProjectIcon from "./ProjectIcon";
import Avatar from "./Avatar";
import StackTags from "./StackTags";
import StatusBadge from "./StatusBadge";
import ActionsMenu from "./ActionsMenu";
import CohortBadge from "./CohortBadge";

export default function TableRow({ project }) {
  return (
    <tr className="border-t border-slate-800 hover:bg-slate-800/40 transition">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <ProjectIcon color={project.iconColor} icon={project.icon} />
          <div>
            <p className="text-sm font-semibold text-slate-100">
              {project.name}
            </p>
            <p className="text-xs text-slate-500">{project.github}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <CohortBadge cohort={project.cohort} />
      </td>
      <td className="px-6 py-4">
        <Avatar author={project.author} />
      </td>
      <td className="px-6 py-4">
        <StackTags stack={project.stack} />
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={project.status} />
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-slate-300">{project.updatedRelative}</p>
        <p className="text-xs text-slate-500">{project.updatedDate}</p>
      </td>
      <td className="px-6 py-4">
        <ActionsMenu />
      </td>
    </tr>
  );
}
