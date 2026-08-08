import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

export default function Toolbar({ filters, setFilters, sortBy, setSortBy }) {
  return (
    <div className="bg-white border border-[#0B0F19]/8 rounded-2xl shadow-lg shadow-[#0B0F19]/5 p-4 sm:p-5 flex flex-col gap-4">
      <SearchBar
        value={filters.search}
        onChange={(val) => setFilters({ ...filters, search: val })}
      />
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#FAF7F2] border-none rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] w-full sm:w-auto outline-none"
        >
          <option value="recent">Sort: Most Recent</option>
          <option value="oldest">Sort: Oldest First</option>
          <option value="name-asc">Sort: Name (A–Z)</option>
          <option value="name-desc">Sort: Name (Z–A)</option>
        </select>
      </div>
    </div>
  );
}
