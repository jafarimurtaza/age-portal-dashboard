import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

export default function Toolbar({ filters, setFilters }) {
  return (
    <div className="rounded-none p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 bg-white">
      <div className="flex-1">
        <SearchBar
          value={filters.search}
          onChange={(v) => setFilters({ ...filters, search: v })}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <FilterDropdown
          label="All Status"
          options={["Published", "In Review", "Draft", "Archived"]}
          value={filters.status}
          onChange={(v) => setFilters({ ...filters, status: v })}
        />

        <FilterDropdown
          label="All Cohorts"
          options={["Cohort 1", "Cohort 2", "Cohort 3"]}
          value={filters.cohort}
          onChange={(v) => setFilters({ ...filters, cohort: v })}
        />
      </div>
    </div>
  );
}
