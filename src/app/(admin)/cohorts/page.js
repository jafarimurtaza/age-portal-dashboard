"use client";

import React, { useMemo, useState } from "react";

import CohortHeader from "@/components/cohorts/CohortIntro";
import StatsCards from "@/components/cohorts/StatsCards";
import SearchFilter from "@/components/cohorts/SearchFilter";
import CohortTable from "@/components/cohorts/CohortTable";
import Pagination from "@/components/cohorts/Pagination";
import AddCohortDrawer from "@/components/cohorts/AddCohortDrawer";
import EditCohortDrawer from "@/components/cohorts/EditCohortDrawer";

const initialCohorts = [
  {
    id: 1,
    name: "AI Fundamentals",
    code: "AI-2024-01",
    start: "2024-10-01",
    end: "2025-03-01",
    graduates: 40,
    projects: 8,
    category: "Data Science",
    status: "Upcoming",
    iconType: "data",
  },
  {
    id: 2,
    name: "Node.js Backend",
    code: "NB-2024-01",
    start: "2024-09-01",
    end: "2025-02-01",
    graduates: 34,
    projects: 6,
    category: "Technology",
    status: "Upcoming",
    iconType: "web",
  },
  {
    id: 3,
    name: "Graphic Design",
    code: "GD-2024-01",
    start: "2024-08-01",
    end: "2025-01-01",
    graduates: 27,
    projects: 4,
    category: "Design",
    status: "Completed",
    iconType: "design",
  },
  {
    id: 4,
    name: "Python for Data",
    code: "PFD-2024-01",
    start: "2024-07-01",
    end: "2024-12-01",
    graduates: 36,
    projects: 6,
    category: "Data Science",
    status: "Active",
    iconType: "data",
  },
  {
    id: 5,
    name: "React Advanced",
    code: "RA-2024-01",
    start: "2024-06-01",
    end: "2024-11-01",
    graduates: 41,
    projects: 7,
    category: "Technology",
    status: "Active",
    iconType: "web",
  },
  {
    id: 6,
    name: "Digital Marketing",
    code: "DM-2024-01",
    start: "2024-05-01",
    end: "2024-10-01",
    graduates: 32,
    projects: 5,
    category: "Design",
    status: "Upcoming",
    iconType: "marketing",
  },
  {
    id: 7,
    name: "Mobile App Development",
    code: "MAD-2024-01",
    start: "2024-04-01",
    end: "2024-09-01",
    graduates: 38,
    projects: 6,
    category: "Technology",
    status: "Active",
    iconType: "mobile",
  },
  {
    id: 8,
    name: "Cloud Computing",
    code: "CC-2024-01",
    start: "2024-03-01",
    end: "2024-08-01",
    graduates: 30,
    projects: 4,
    category: "Technology",
    status: "Completed",
    iconType: "cloud",
  },
  {
    id: 9,
    name: "UI/UX Design",
    code: "UX-2024-01",
    start: "2024-02-01",
    end: "2024-07-01",
    graduates: 35,
    projects: 5,
    category: "Design",
    status: "Active",
    iconType: "design",
  },
  {
    id: 10,
    name: "Database Management",
    code: "DB-2024-01",
    start: "2024-01-01",
    end: "2024-06-01",
    graduates: 28,
    projects: 3,
    category: "Data Science",
    status: "Completed",
    iconType: "database",
  },
  {
    id: 11,
    name: "Web Development",
    code: "WD-2023-03",
    start: "2023-11-01",
    end: "2024-04-01",
    graduates: 45,
    projects: 8,
    category: "Technology",
    status: "Completed",
    iconType: "web",
  },
  {
    id: 12,
    name: "Data Analytics",
    code: "DA-2023-02",
    start: "2023-10-01",
    end: "2024-03-01",
    graduates: 42,
    projects: 7,
    category: "Data Science",
    status: "Completed",
    iconType: "data",
  },
];

const defaultFilters = {
  search: "",
  status: "All Status",
  category: "All Categories",
  sort: "Newest",
};

export default function CohortsPage() {
  const [cohorts, setCohorts] = useState(initialCohorts);

  const [filters, setFilters] = useState(defaultFilters);

  const [currentPage, setCurrentPage] = useState(1);

  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const [selectedCohort, setSelectedCohort] = useState(null);

  const itemsPerPage = 6;

  const filteredCohorts = useMemo(() => {
    let result = [...cohorts];

    if (filters.search.trim()) {
      const search = filters.search.toLowerCase().trim();

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
    }

    if (filters.sort === "Oldest") {
      result.reverse();
    }

    return result;
  }, [cohorts, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCohorts.length / itemsPerPage)
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedCohorts = useMemo(() => {
    const startIndex = (safePage - 1) * itemsPerPage;

    return filteredCohorts.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }, [filteredCohorts, safePage]);

  function handleFilterChange(updatedFilters) {
    setFilters(updatedFilters);
    setCurrentPage(1);
  }

  function handleResetFilters() {
    setFilters(defaultFilters);
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

  function handleDeleteCohort(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this cohort?"
    );

    if (!confirmed) return;

    setCohorts((current) =>
      current.filter((cohort) => cohort.id !== id)
    );

    setCurrentPage(1);
  }

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#061B35] px-5 py-6 text-white sm:px-7 lg:px-8">
      <div className="mx-auto max-w-[1260px]">

        <CohortHeader
          onAddCohort={() => setIsAddDrawerOpen(true)}
        />

        <StatsCards cohorts={cohorts} />

        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        <CohortTable
          cohorts={paginatedCohorts}
          onEdit={handleEditClick}
          onDelete={handleDeleteCohort}
        />

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          totalItems={filteredCohorts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
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