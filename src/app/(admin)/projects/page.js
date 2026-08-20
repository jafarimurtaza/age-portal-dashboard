"use client";
import { useState, useEffect, useCallback } from "react";
import { Fraunces } from "next/font/google";
import LedgerHeader from "@/components/projects/LedgerHeader";
import Toolbar from "@/components/projects/Toolbar";
import FilterTabs from "@/components/projects/FilterTabs";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Pagination from "@/components/projects/Pagination";
import AddProjectModal from "@/components/projects/AddProjectModal";
import { projects as initialProjects, stats } from "@/data/projects";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});
const PAGE_SIZE = 4;

function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialProjects);
    }, 700);
  });
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    cohort: "",
  });
  const [activeTab, setActiveTab] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--foreground", "#171717");
    return () => {
      document.documentElement.style.removeProperty("--background");
      document.documentElement.style.removeProperty("--foreground");
    };
  }, []);

  const loadProjects = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const data = await fetchProjects();
      setProjects(data);
    } catch (err) {
      setLoadError(err.message || "Failed to load projects.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, activeTab]);

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAdd = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleEdit = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
    );
  };

  const openAddModal = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesStatus = filters.status
      ? project.status === filters.status
      : true;
    const matchesCohort = filters.cohort
      ? project.cohort === filters.cohort
      : true;
    const matchesTab =
      activeTab === "All" ? true : project.status === activeTab;
    return matchesSearch && matchesStatus && matchesCohort && matchesTab;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProjects = filteredProjects.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const computedStats = isLoading
    ? stats
    : stats.map((stat) => {
        if (stat.label === "Total Projects") {
          return { ...stat, value: projects.length, change: null };
        }
        if (stat.label === "Published") {
          return {
            ...stat,
            value: projects.filter((p) => p.status === "Published").length,
            change: null,
          };
        }
        if (stat.label === "In Review") {
          return {
            ...stat,
            value: projects.filter((p) => p.status === "In Review").length,
            change: null,
          };
        }
        if (stat.label === "Archived") {
          return {
            ...stat,
            value: projects.filter((p) => p.status === "Archived").length,
            change: null,
          };
        }
        return stat;
      });

  return (
    <div className={`${fraunces.variable} bg-[#F5F0E8] min-h-screen`}>
      <LedgerHeader stats={computedStats} onAddClick={openAddModal} />

      <div className="mt-4 sm:-mt-12 relative z-30">
        <Toolbar filters={filters} setFilters={setFilters} />
      </div>

      <div className="px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="mt-6">
          <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="mt-4">
          <ProjectsGrid
            projects={paginatedProjects}
            onDelete={handleDelete}
            onEditClick={openEditModal}
            loading={isLoading}
            error={loadError}
            onRetry={loadProjects}
            hasAnyProjects={projects.length > 0}
            onAddClick={openAddModal}
          />
        </div>

        {!isLoading && !loadError && (
          <Pagination
            total={filteredProjects.length}
            shown={paginatedProjects.length}
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        <div className="h-10" />
      </div>

      <AddProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
        onEdit={handleEdit}
        editingProject={editingProject}
      />
    </div>
  );
}
