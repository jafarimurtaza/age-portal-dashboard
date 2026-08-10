"use client";
import { useState } from "react";
import { Fraunces } from "next/font/google";
import LedgerHeader from "@/components/projects/LedgerHeader";
import Toolbar from "@/components/projects/Toolbar";
import FilterTabs from "@/components/projects/FilterTabs";
import ProjectsTable from "@/components/projects/ProjectsTable";
import Pagination from "@/components/projects/Pagination";
import AddProjectModal from "@/components/projects/AddProjectModal";
import { projects as initialProjects, stats } from "@/data/projects";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});
const PAGE_SIZE = 2;

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    cohort: "",
  });
  const [activeTab, setActiveTab] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleAdd = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleEdit = (updatedProject) => {
    setProjects(
      projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)),
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

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "oldest") return a.id - b.id;
    return b.id - a.id;
  });

  const totalPages = Math.max(1, Math.ceil(sortedProjects.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProjects = sortedProjects.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  return (
    <div className={`${fraunces.variable} bg-[#F5F0E8] min-h-screen`}>
      <LedgerHeader stats={stats} onAddClick={openAddModal} />

      <div className="px-4 sm:px-6 lg:px-10 -mt-12 relative z-10">
        <Toolbar
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="mt-6">
          <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="mt-4">
          <ProjectsTable
            projects={paginatedProjects}
            onDelete={handleDelete}
            onEditClick={openEditModal}
          />
        </div>
        <Pagination
          total={sortedProjects.length}
          shown={paginatedProjects.length}
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
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
