// components/graduates/GraduatesToolbar.jsx

"use client";

import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";

export default function GraduatesToolbar({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="w-full lg:max-w-md">

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </div>

      <div className="flex justify-end">

        <StatusFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

      </div>

    </div>
  );
}