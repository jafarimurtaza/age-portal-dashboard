"use client";

import React from "react";

function UsersIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10 12 5l10 5-10 5L2 10Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M8 13h8" />
      <path d="M12 9v8" />
    </svg>
  );
}

const statDefinitions = [
  {
    title: "Total Cohorts",
    description: "All time",
    increase: "↑ 2",
    icon: UsersIcon,
    iconBg: "bg-[#F5F0E8]",
    iconColor: "text-[#C8955A]",
  },
  {
    title: "Active Cohorts",
    description: "Currently active",
    increase: "↑ 2",
    icon: CheckIcon,
    iconBg: "bg-[#E7EEF7]",
    iconColor: "text-[#1B3A6B]",
  },
  {
    title: "Total Graduates",
    description: "Across all cohorts",
    increase: "↑ 28",
    icon: GraduationIcon,
    iconBg: "bg-[#F5F0E8]",
    iconColor: "text-[#C8955A]",
  },
  {
    title: "Total Projects",
    description: "Across all cohorts",
    increase: "↑ 5",
    icon: FolderIcon,
    iconBg: "bg-[#E7EEF7]",
    iconColor: "text-[#1B3A6B]",
  },
];

export default function StatsCards({ cohorts = [] }) {
  const totalCohorts = cohorts.length;

  const activeCohorts = cohorts.filter(
    (cohort) => cohort.status === "Active"
  ).length;

  const totalGraduates = cohorts.reduce(
    (sum, cohort) => sum + (Number(cohort.graduates) || 0),
    0
  );

  const totalProjects = cohorts.reduce(
    (sum, cohort) => sum + (Number(cohort.projects) || 0),
    0
  );

  const values = [
    totalCohorts,
    activeCohorts,
    totalGraduates,
    totalProjects,
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statDefinitions.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              flex
              min-h-[136px]
              items-center
              gap-4
              rounded-[12px]
              border
              border-[#E6E0D7]
              bg-white
              px-5
              py-5
              shadow-[0_2px_8px_rgba(11,15,25,0.035)]
              transition-all
              duration-200
              hover:-translate-y-[2px]
              hover:shadow-[0_8px_22px_rgba(11,15,25,0.07)]
            "
          >
            <div
              className={`
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                ${stat.iconBg}
                ${stat.iconColor}
              `}
            >
              <Icon />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-medium text-[#68708A]">
                {stat.title}
              </p>

              <h2 className="mt-1 text-[28px] font-bold leading-none text-[#0B0F19]">
                {values[index]}
              </h2>

              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="text-[13px] text-[#68708A]">
                  {stat.description}
                </span>

                <span className="text-[12px] font-semibold text-[#1B3A6B]">
                  {stat.increase}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}