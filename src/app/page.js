"use client";
import { useState } from "react";
import LedgerHeader from "@/components/projects/LedgerHeader";
import Toolbar from "@/components/projects/Toolbar";
import FilterTabs from "@/components/projects/FilterTabs";
import ProjectsTable from "@/components/projects/ProjectsTable";
import Pagination from "@/components/projects/Pagination";
import AddProjectModal from "@/components/projects/AddProjectModal";
import { projects as initialProjects, stats } from "@/data/projects";

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    cohort: "",
  });
  const [activeTab, setActiveTab] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleAdd = (newProject) => {
    setProjects([newProject, ...projects]);
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

  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      <LedgerHeader stats={stats} onAddClick={() => setIsModalOpen(true)} />
      <div className="px-4 sm:px-6 lg:px-10 -mt-6 relative z-10">
        <Toolbar filters={filters} setFilters={setFilters} />
        <div className="mt-6">
          <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="mt-4">
          <ProjectsTable projects={filteredProjects} onDelete={handleDelete} />
        </div>
        <Pagination total={128} shown={filteredProjects.length} />
        <div className="h-10" />
      </div>

      <AddProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}
