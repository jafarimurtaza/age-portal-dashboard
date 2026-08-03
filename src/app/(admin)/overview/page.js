import React from "react";
import PageHeader from "@/components/overview/PageHeader";
// import StatCard from "@/components/overview/StatCard";
import QuickLinksCard from "@/components/overview/QuickLinksCard";
// import RecentActivityCard from "@/components/overview/RecentActivityCard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ActivityList from "@/components/overview/ActivityList";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 p-4 sm:p-6 min-h-screen">
      {/* <StatCard /> */}
      <PageHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActivityList />
        <QuickLinksCard />
      </div>
    </div>
  );
}
