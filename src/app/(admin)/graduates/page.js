"use client";

import { useMemo, useState } from "react";

import GraduateTable from "@/components/graduates/GraduateTable";
import SearchBar from "@/components/graduates/SearchBar";
import StatusFilter from "@/components/graduates/StatusFilter";

import graduatesData from "@/data/graduates";

export default function GraduatesPage() {
  const [graduates, setGraduates] = useState(graduatesData);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedCohort, setSelectedCohort] = useState("All");

  const [sortBy, setSortBy] = useState("name");

  const filteredGraduates = useMemo(() => {
    let data = [...graduates];

    // Search
    data = data.filter((graduate) => {
      const search = searchTerm.toLowerCase();

      return (
        graduate.name.toLowerCase().includes(search) ||
        graduate.email.toLowerCase().includes(search) ||
        graduate.role.toLowerCase().includes(search) ||
        graduate.skills.join(" ").toLowerCase().includes(search)
      );
    });

    // Status
    if (selectedStatus !== "All") {
      data = data.filter(
        (graduate) => graduate.status === selectedStatus
      );
    }

    // Role
    if (selectedRole !== "All") {
      data = data.filter(
        (graduate) => graduate.role === selectedRole
      );
    }

    // Cohort
    if (selectedCohort !== "All") {
      data = data.filter(
        (graduate) => graduate.cohort === selectedCohort
      );
    }

    // Sorting
    data.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);

        case "progress":
          return b.progress - a.progress;

        case "role":
          return a.role.localeCompare(b.role);

        default:
          return 0;
      }
    });

    return data;
  }, [
    graduates,
    searchTerm,
    selectedStatus,
    selectedRole,
    selectedCohort,
    sortBy,
  ]);

  const statistics = useMemo(() => {
    return {
      total: graduates.length,
      active: graduates.filter(
        (g) => g.status === "Active"
      ).length,
      alumni: graduates.filter(
        (g) => g.status === "Alumni"
      ).length,
      averageProgress: Math.round(
        graduates.reduce(
          (sum, g) => sum + g.progress,
          0
        ) / graduates.length
      ),
    };
  }, [graduates]);

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-3 md:p-6 lg:p-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B0F19]">
            Graduates
          </h1>

          <p className="mt-2 text-gray-600">
            Manage Afghan Geeks graduates professionally.
          </p>
        </div>

        <button
          className="rounded-xl bg-[#1B3A6B] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#C8955A] hover:shadow-xl active:scale-95 cursor-pointer"
        >
          + Add Graduate
        </button>

      </div>

      {/* Statistics */}

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-gray-500 text-sm">
            Total Graduates
          </h3>

          <p className="mt-2 text-3xl font-bold text-[#1B3A6B]">
            {statistics.total}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-gray-500 text-sm">
            Active
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {statistics.active}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-gray-500 text-sm">
            Alumni
          </h3>

          <p className="mt-2 text-3xl font-bold text-[#C8955A]">
            {statistics.alumni}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h3 className="text-gray-500 text-sm">
            Avg Progress
          </h3>

          <p className="mt-2 text-3xl font-bold text-[#1B3A6B]">
            {statistics.averageProgress}%
          </p>
        </div>

      </div>

      {/* Filters */}

      <div className="mt-8 rounded-2xl bg-white p-4 shadow-md">

        <div className="flex flex-col gap-4 xl:flex-row">

          <div className="flex-1">

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

          </div>

          <StatusFilter
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

          <select
            value={selectedRole}
            onChange={(e) =>
              setSelectedRole(e.target.value)
            }
            className="rounded-lg border px-4 py-2"
          >
            <option>All</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>Full Stack Engineer</option>
            <option>DevOps Engineer</option>
            <option>UI Designer</option>
          </select>

          <select
            value={selectedCohort}
            onChange={(e) =>
              setSelectedCohort(e.target.value)
            }
            className="rounded-lg border px-4 py-2"
          >
            <option>All</option>
            <option>Cohort 1</option>
            <option>Cohort 2</option>
            <option>Cohort 3</option>
            <option>Cohort 4</option>
            <option>Cohort 5</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="rounded-lg border px-4 py-2"
          >
            <option value="name">Sort by Name</option>
            <option value="progress">
              Sort by Progress
            </option>
            <option value="role">
              Sort by Role
            </option>
          </select>

        </div>

      </div>

      {/* Table */}

      <div className="mt-8">

        <GraduateTable
  graduates={filteredGraduates}
  onDelete={() => {}}
  onEdit={() => {}}
  onView={() => {}}
  onFavorite={() => {}}
  onComment={() => {}}
/>

      </div>

    </div>
  );
}