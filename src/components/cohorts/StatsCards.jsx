import React from "react";

const stats = [
  {
    title: "Total Cohorts",
    value: "24",
    icon: "♧",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Active Cohorts",
    value: "18",
    icon: "⌁",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Total Graduates",
    value: "320",
    icon: "🎓",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Total Projects",
    value: "96",
    icon: "▣",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="relative min-h-[145px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-600">
            {stat.title}
          </p>

          <div
            className={`absolute right-5 top-8 flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
          >
            <span className="text-xl">{stat.icon}</span>
          </div>

          <p className="mt-12 text-3xl font-bold text-gray-900">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
}