import React from "react";
import PageHeader from "@/components/overview/PageHeader";
import StatCard from "@/components/overview/StatCard";
import QuickLinksCard from "@/components/overview/QuickLinksCard";
import RecentActivityCard from "@/components/overview/RecentActivityCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-600 p-4">
      <PageHeader />
      <StatCard />
      <RecentActivityCard />
      <QuickLinksCard />
    </div>
  );
}
