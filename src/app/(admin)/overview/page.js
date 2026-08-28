import PageHeader from "@/components/overview/PageHeader";
import QuickLinksCard from "@/components/overview/QuickLinksCard";
import ActivityList from "@/components/overview/ActivityList";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-4 bg-[#F5F0E8] p-4 sm:p-6 min-h-screen">
      <PageHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ActivityList />
        </div>
        <div className="md:col-span-1">
          <QuickLinksCard />
        </div>
      </div>
    </div>
  );
}
