import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({
  projects,
  onDelete,
  onEditClick,
  dark,
}) {
  const list = Array.isArray(projects) ? projects.filter(Boolean) : [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {list.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onDelete={onDelete}
          onEditClick={onEditClick}
          dark={dark}
        />
      ))}
    </div>
  );
}
