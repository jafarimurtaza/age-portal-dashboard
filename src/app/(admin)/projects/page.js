"use client";
import { useState } from "react";
import PageHeader from "@/components/projects/PageHeader";
import StatCardsRow from "@/components/projects/StatCardsRow";
import Toolbar from "@/components/projects/Toolbar";
import FilterTabs from "@/components/projects/FilterTabs";
import ProjectsTable from "@/components/projects/ProjectsTable";
import Pagination from "@/components/projects/Pagination";
import { projects, stats } from "@/data/projects";

export default function ProjectsPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    cohort: "",
  });
  const [activeTab, setActiveTab] = useState("All");

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
    <div className="p-8 bg-slate-950 min-h-screen">
      <PageHeader />
      <StatCardsRow stats={stats} />
      <Toolbar filters={filters} setFilters={setFilters} />
      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProjectsTable projects={filteredProjects} />
      <Pagination total={128} shown={filteredProjects.length} />
    </div>
  );
}
