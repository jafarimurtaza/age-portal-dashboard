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
    <div
      className="
        mt-8
        mb-5
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="w-full sm:max-w-md">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <div className="w-full sm:w-auto sm:min-w-[180px]">
        <StatusFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>
    </div>
  );
}