import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";

export default function GraduatesToolbar({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div className="mt-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="w-full sm:max-w-md">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <div className="w-full sm:w-auto">
        <StatusFilter
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>
    </div>
  );
}