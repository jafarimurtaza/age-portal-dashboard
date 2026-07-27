import PageHeader from "@/components/projects/PageHeader";
import Avatar from "@/components/projects/Avatar";
import StackTags from "@/components/projects/StackTags";
import StatusBadge from "@/components/projects/StatusBadge";
import ActionsMenu from "@/components/projects/ActionsMenu";
import ProjectsTable from "@/components/projects/ProjectsTable";
import StatCardsRow from "@/components/projects/StatCardsRow"
import ProjectIcon from "@/components/projects/ProjectIcon"
import TableRow  from "@/components/projects/TableRow"
import StatCard from "@/components/projects/StatCard"
import SearchBar from "@/components/projects/SearchBar"
import FilterDropdown from "@/components/projects/FilterDropdown"
import Toolbar from "@/components/projects/Toolbar"
import FilterTabs from "@/components/projects/FilterTabs"
import Pagination from "@/components/projects/Pagination"
import CohortBadge from"@/components/projects/CohortBadge"
import { projects, stats } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      <PageHeader />
      <StatCardsRow stats={stats} />
      <Toolbar />
      <FilterTabs />
      <ProjectsTable projects={projects} />
      <Pagination total={128} shown={projects.length} />
    </div>
  );
}
