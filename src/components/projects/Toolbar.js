import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

export default function Toolbar() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
      <SearchBar />
      <div className="flex flex-wrap gap-3">
        <FilterDropdown
          label="All Status"
          options={["Published", "In Review", "Draft", "Archived"]}
        />
        <FilterDropdown
          label="All Cohorts"
          options={["Cohort 1", "Cohort 2", "Cohort 3"]}
        />
        <FilterDropdown
          label="All Stacks"
          options={["React", "Next.js", "Python", "Express"]}
        />
      </div>
    </div>
  );
}
