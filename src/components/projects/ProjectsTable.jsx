import TableRow from "./TableRow";

export default function ProjectsTable({ projects, onDelete, onEditClick }) {
  const list = Array.isArray(projects) ? projects.filter(Boolean) : [];

  if (list.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-[#0B0F19]/8 p-10 text-center text-[#0B0F19]/40">
        No projects found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {list.map((project, index) => (
        <TableRow
          key={project.id ?? index}
          project={project}
          index={index}
          onDelete={onDelete}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
}
