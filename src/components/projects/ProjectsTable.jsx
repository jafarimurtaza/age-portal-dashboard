import TableRow from "./TableRow";

export default function ProjectsTable({ projects, onDelete, onEditClick }) {
  return (
    <div>
      <div className="hidden lg:flex px-5 py-3 text-[11px] font-semibold tracking-[0.15em] text-[#0B0F19]/70 uppercase">
        <div className="w-[27%]">Project</div>
        <div className="w-[24%] pl-4">Details</div>
        <div className="w-[27%] pl-4">Author & Updated</div>
        <div className="w-[16%] text-right">Status</div>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <TableRow
            key={project.id}
            project={project}
            index={index}
            onDelete={onDelete}
            onEditClick={onEditClick}
          />
        ))}
      </div>
    </div>
  );
}
