import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

export default function Toolbar({ filters, setFilters }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
      <SearchBar
        value={filters.search}
        onChange={(val) => setFilters({ ...filters, search: val })}
      />
      <div className="flex flex-wrap gap-3">
        <FilterDropdown
          label="All Status"
          options={["Published", "In Review", "Draft", "Archived"]}
          value={filters.status}
          onChange={(val) => setFilters({ ...filters, status: val })}
        />
        <FilterDropdown
          label="All Cohorts"
          options={["Cohort 1", "Cohort 2", "Cohort 3"]}
          value={filters.cohort}
          onChange={(val) => setFilters({ ...filters, cohort: val })}
        />
      </div>
    </div>
  );
}
