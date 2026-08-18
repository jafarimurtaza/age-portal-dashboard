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
    name: "Web Development Bootcamp",
    code: "WD-2024-01",
    start: "Jan 15, 2024",
    end: "Jun 15, 2024",
    graduates: 45,
    projects: 8,
    category: "Technology",
    categoryColor: "bg-[#EEE8FF] text-[#5B2BEE]",
    status: "Active",
    iconColor: "purple",
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
    categoryColor: "bg-[#EEE8FF] text-[#5B2BEE]",
    status: "Active",
    iconColor: "green",
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
    categoryColor: "bg-[#FFF1D7] text-[#F59E0B]",
    status: "Completed",
    iconColor: "orange",
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
    categoryColor: "bg-[#FFE8EE] text-[#E5486D]",
    status: "Completed",
    iconColor: "pink",
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
    categoryColor: "bg-[#EEE8FF] text-[#5B2BEE]",
    status: "Active",
    iconColor: "blue",
    iconType: "cloud",
  },
];

export default function CohortsPage() {
  const [cohorts, setCohorts] = useState(initialCohorts);

  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "All Status",
    category: "All Categories",
    sort: "Newest",
  });

  const filteredCohorts = useMemo(() => {
    let result = [...cohorts];

    if (filters.search.trim()) {
      const search = filters.search.toLowerCase();

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

  function handleAddCohort(newCohort) {
    setCohorts((currentCohorts) => [
      {
        ...newCohort,
        id: Date.now(),
      },
      ...currentCohorts,
    ]);

    setIsAddDrawerOpen(false);
  }

  function handleFilterChange(updatedFilters) {
    setFilters(updatedFilters);
  }

  function handleResetFilters() {
    setFilters({
      search: "",
      status: "All Status",
      category: "All Categories",
      sort: "Newest",
    });
  }

  return (
    <main className="min-h-full bg-[#FAFAFC] px-8 py-7">
      <div className="mx-auto max-w-[1230px] space-y-5">
        
        <CohortHeader
          onAddCohort={() => setIsAddDrawerOpen(true)}
        />

        <StatsCards cohorts={cohorts} />

        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        <CohortTable cohorts={filteredCohorts} />

        <Pagination
          totalItems={filteredCohorts.length}
        />
      </div>

      <AddCohortDrawer
        open={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
        onSubmit={handleAddCohort}
      />
    </main>
  );
}