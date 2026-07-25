"use client";

import { useMemo, useState } from "react";

import GraduateTable from "@/components/graduates/GraduateTable";
import SearchBar from "@/components/graduates/SearchBar";
import StatusFilter from "@/components/graduates/StatusFilter";

import graduatesData from "@/data/graduates";

export default function GraduatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredGraduates = useMemo(() => {
    return graduatesData.filter((graduate) => {
      const matchesSearch =
        graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        graduate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        graduate.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ||
        graduate.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Graduates
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your graduates and track their progress.
            </p>
          </div>

          <button className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700">
            + Add Graduate
          </button>
        </div>

        {/* Filters */}

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <StatusFilter
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

        </div>

        {/* Table */}

        <GraduateTable graduates={filteredGraduates} />

      </div>
    </main>
  );
}
