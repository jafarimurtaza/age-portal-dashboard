import ProjectCard from "./ProjectCard";
import CardSkeleton from "./CardSkeleton";
import ErrorState from "./ErrorState";

export default function ProjectsGrid({
  projects,
  onDelete,
  onEditClick,
  loading = false,
  error = null,
  onRetry,
  hasAnyProjects = true,
  onAddClick,
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  const list = Array.isArray(projects) ? projects.filter(Boolean) : [];

  if (list.length === 0) {
    if (!hasAnyProjects) {
      return (
        <div className="bg-white rounded-2xl border border-[#0B0F19]/8 p-12 flex flex-col items-center text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#F5F0E8] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C8955A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0B0F19]">
              No projects yet
            </p>
            <p className="text-xs text-[#0B0F19]/45 mt-1 max-w-xs">
              Add your first graduate project to see it show up here.
            </p>
          </div>
          {onAddClick && (
            <button
              onClick={onAddClick}
              type="button"
              className="mt-1 text-sm font-medium bg-[#C8955A] hover:bg-[#b3814c] text-white px-5 py-2 rounded-xl transition-colors"
            >
              + Add Project
            </button>
          )}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl border border-[#0B0F19]/8 p-10 text-center text-[#0B0F19]/40">
        No projects match your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {list.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onDelete={onDelete}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
}
