import CohortHeader from "@/components/cohorts/CohortHeader";
import StatsCards from "@/components/cohorts/StatsCards";
import SearchFilter from "@/components/cohorts/SearchFilter";
import CohortTable from "@/components/cohorts/CohortTable";
import Pagination from "@/components/cohorts/Pagination";

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px] space-y-5">

        <CohortHeader />

        <StatsCards />

        <SearchFilter />

        <CohortTable />

        <Pagination />

      </div>
    </main>
  );
}