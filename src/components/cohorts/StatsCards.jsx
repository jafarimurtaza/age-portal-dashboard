"use client";

import React from "react";

function UsersIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 10 12 5l10 5-10 5L2 10Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M8 13h8M12 9v8" />
    </svg>
  );
}

const stats = [
  {
    title: "Total Cohorts",
    value: "12",
    description: "All time",
    increase: "↑ 2",
    icon: <UsersIcon />,
    iconBg: "bg-[#EEE8FF]",
    iconColor: "text-[#5B2BEE]",
  },
  {
    title: "Active Cohorts",
    value: "7",
    description: "Currently active",
    increase: "↑ 2",
    icon: <CheckIcon />,
    iconBg: "bg-[#E4F8EA]",
    iconColor: "text-[#16A34A]",
  },
  {
    title: "Total Graduates",
    value: "240",
    description: "Across all cohorts",
    increase: "↑ 28",
    icon: <GraduationIcon />,
    iconBg: "bg-[#FFF1D7]",
    iconColor: "text-[#F59E0B]",
  },
  {
    title: "Total Projects",
    value: "45",
    description: "Across all cohorts",
    increase: "↑ 5",
    icon: <FolderIcon />,
    iconBg: "bg-[#E5F0FF]",
    iconColor: "text-[#2563EB]",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex min-h-[136px] items-center gap-4 rounded-[12px] border border-[#E7E8F0] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(17,20,45,0.025)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(17,20,45,0.07)]"
        >
          <div
            className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full ${stat.iconBg} ${stat.iconColor}`}
          >
            {stat.icon}
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[20px] font-medium text-[#68708A]">
              {stat.title}
            </p>

            <h2 className="mt-1 text-[28px] font-bold leading-none text-[#11142D]">
              {stat.value}
            </h2>

            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="text-[15px] text-[#68708A]">
                {stat.description}
              </span>

              <span className="text-[13px] font-semibold text-[#16A34A]">
                {stat.increase}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}