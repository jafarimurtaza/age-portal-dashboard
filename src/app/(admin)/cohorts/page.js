"use client";

import { useMemo, useState } from "react";

import CohortIntro from "@/components/cohorts/CohortIntro";
import StatsCards from "@/components/cohorts/StatsCards";
import SearchFilter from "@/components/cohorts/SearchFilter";
import CohortTable from "@/components/cohorts/CohortTable";
import Pagination from "@/components/cohorts/Pagination";
import AddCohortDrawer from "@/components/cohorts/AddCohortDrawer";
import EditCohortDrawer from "@/components/cohorts/EditCohortDrawer";

const initialCohorts = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    code: "WD-2024-01",
    start: "Jan 15, 2024",
    end: "Jun 15, 2024",
    graduates: 45,
    projects: 8,
    category: "Technology",
    status: "Active",
    iconType: "web",
  },
  {
    id: 2,
    name: "Mobile App Development",
    code: "MAD-2024-01",
    start: "Feb 1, 2024",
    end: "Jul 1, 2024",
    graduates: 38,
    projects: 6,
    category: "Technology",
    status: "Active",
    iconType: "mobile",
  },
  {
    id: 3,
    name: "Data Science Fundamentals",
    code: "DSF-2023-02",
    start: "Sep 1, 2023",
    end: "Feb 29, 2024",
    graduates: 42,
    projects: 7,
    category: "Data Science",
    status: "Completed",
    iconType: "data",
  },
  {
    id: 4,
    name: "UI/UX Design Essentials",
    code: "UIUX-2023-03",
    start: "Oct 10, 2023",
    end: "Mar 10, 2024",
    graduates: 35,
    projects: 5,
    category: "Design",
    status: "Completed",
    iconType: "design",
  },
  {
    id: 5,
    name: "Cloud Computing Basics",
    code: "CCB-2024-02",
    start: "Mar 1, 2024",
    end: "Aug 31, 2024",
    graduates: 30,
    projects: 4,
    category: "Technology",
    status: "Active",
    iconType: "cloud",
  },
  {
    id: 6,
    name: "Database Management",
    code: "DBM-2024-03",
    start: "Apr 15, 2024",
    end: "Sep 15, 2024",
    graduates: 28,
    projects: 3,
    category: "Data Science",
    status: "Upcoming",
    iconType: "database",
  },
  {
    id: 7,
    name: "Digital Marketing",
    code: "DM-2024-01",
    start: "May 1, 2024",
    end: "Oct 1, 2024",
    graduates: 32,
    projects: 5,
    category: "Design",
    status: "Upcoming",
    iconType: "design",
  },
  {
    id: 8,
    name: "React Advanced",
    code: "RA-2024-01",
    start: "Jun 1, 2024",
    end: "Nov 1, 2024",
    graduates: 41,
    projects: 7,
    category: "Technology",
    status: "Active",
    iconType: "web",
  },
  {
    id: 9,
    name: "Python for Data",
    code: "PFD-2024-01",
    start: "Jul 1, 2024",
    end: "Dec 1, 2024",
    graduates: 36,
    projects: 6,
    category: "Data Science",
    status: "Active",
    iconType: "data",
  },
  {
    id: 10,
    name: "Graphic Design",
    code: "GD-2024-01",
    start: "Aug 1, 2024",
    end: "Jan 1, 2025",
    graduates: 27,
    projects: 4,
    category: "Design",
    status: "Completed",
    iconType: "design",
  },
  {
    id: 11,
    name: "Node.js Backend",
    code: "NB-2024-01",
    start: "Sep 1, 2024",
    end: "Feb 1, 2025",
    graduates: 34,
    projects: 6,
    category: "Technology",
    status: "Upcoming",
    iconType: "web",
  },
  {
    id: 12,
    name: "AI Fundamentals",
    code: "AI-2024-01",
    start: "Oct 1, 2024",
    end: "Mar 1, 2025",
    graduates: 40,
    projects: 8,
    category: "Data Science",
    status: "Upcoming",
    iconType: "data",
  },
];

const ITEMS_PER_PAGE = 6;

export default function CohortsPage() {
  const [cohorts, setCohorts] = useState(initialCohorts);

  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const [selectedCohort, setSelectedCohort] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    status: "All Status",
    category: "All Categories",
    sort: "Newest",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredCohorts = useMemo(() => {
    let result = [...cohorts];

    const search = filters.search.trim().toLowerCase();

    if (search) {
      result = result.filter(
        (cohort) =>
          cohort.name.toLowerCase().includes(search) ||
          cohort.code.toLowerCase().includes(search) ||
          cohort.category.toLowerCase().includes(search)
      );
    }

    if (filters.status !== "All Status") {
      result = result.filter(
        (cohort) => cohort.status === filters.status
      );
    }

    if (filters.category !== "All Categories") {
      result = result.filter(
        (cohort) => cohort.category === filters.category
      );
    }

    if (filters.sort === "Most Graduates") {
      result.sort((a, b) => b.graduates - a.graduates);
    } else if (filters.sort === "Oldest") {
      result.sort((a, b) => a.id - b.id);
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [cohorts, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCohorts.length / ITEMS_PER_PAGE)
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages
  );

  const paginatedCohorts = filteredCohorts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE
  );

  function handleFilterChange(updatedFilters) {
    setFilters(updatedFilters);
    setCurrentPage(1);
  }

  function handleResetFilters() {
    setFilters({
      search: "",
      status: "All Status",
      category: "All Categories",
      sort: "Newest",
    });

    setCurrentPage(1);
  }

  function handleAddCohort(newCohort) {
    const cohort = {
      ...newCohort,
      id: Date.now(),
    };

    setCohorts((current) => [cohort, ...current]);
    setIsAddDrawerOpen(false);
    setCurrentPage(1);
  }

  function handleEditClick(cohort) {
    setSelectedCohort(cohort);
    setIsEditDrawerOpen(true);
  }

  function handleEditCohort(updatedCohort) {
    setCohorts((current) =>
      current.map((cohort) =>
        cohort.id === updatedCohort.id
          ? updatedCohort
          : cohort
      )
    );

    setIsEditDrawerOpen(false);
    setSelectedCohort(null);
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] px-5 py-6 sm:px-7 lg:px-8 lg:py-7">
      <div className="mx-auto max-w-[1280px]">

        <CohortIntro
          onAddCohort={() => setIsAddDrawerOpen(true)}
        />

        <div className="mt-6">
          <StatsCards cohorts={cohorts} />
        </div>

        <div className="mt-6">
          <SearchFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </div>

        <div className="mt-5">
          <CohortTable
            cohorts={paginatedCohorts}
            onEdit={handleEditClick}
          />
        </div>

        <div className="mt-4">
          <Pagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            totalItems={filteredCohorts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <AddCohortDrawer
        open={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
        onSubmit={handleAddCohort}
      />

      <EditCohortDrawer
        open={isEditDrawerOpen}
        cohort={selectedCohort}
        onClose={() => {
          setIsEditDrawerOpen(false);
          setSelectedCohort(null);
        }}
        onSubmit={handleEditCohort}
      />
    </main>
  );
}