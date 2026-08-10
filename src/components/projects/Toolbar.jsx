import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

export default function Toolbar({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  dark,
}) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 border transition-colors duration-300 ${
        dark
          ? "bg-[#0B0F19] border-[#1B3A6B]/40"
          : "bg-white border-[#0B0F19]/8"
      }`}
    >
      <div className="flex-1">
        <SearchBar
          value={filters.search}
          onChange={(v) => setFilters({ ...filters, search: v })}
          dark={dark}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <FilterDropdown
          label="All Status"
          options={["Published", "In Review", "Draft", "Archived"]}
          value={filters.status}
          onChange={(v) => setFilters({ ...filters, status: v })}
          dark={dark}
        />

        <FilterDropdown
          label="All Cohorts"
          options={["Cohort 1", "Cohort 2", "Cohort 3"]}
          value={filters.cohort}
          onChange={(v) => setFilters({ ...filters, cohort: v })}
          dark={dark}
        />
      </div>
    </div>
  );
}
