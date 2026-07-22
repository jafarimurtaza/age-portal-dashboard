import TableRow from "./TableRow";

export default function ProjectsTable({ projects }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] tracking-wider text-slate-500 uppercase">
            <th className="px-6 py-4 font-medium">Project</th>
            <th className="px-6 py-4 font-medium">Cohort</th>
            <th className="px-6 py-4 font-medium">Author</th>
            <th className="px-6 py-4 font-medium">Stack</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Updated</th>
            <th className="px-6 py-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <TableRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
