"use client";

import React from "react";

function UsersIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2 10 12 5l10 5-10 5L2 10Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function StatsCards({ cohorts = [] }) {
  const total = cohorts.length;

  const active = cohorts.filter(
    (cohort) => cohort.status === "Active"
  ).length;

  const completed = cohorts.filter(
    (cohort) => cohort.status === "Completed"
  ).length;

  const upcoming = cohorts.filter(
    (cohort) => cohort.status === "Upcoming"
  ).length;

  const stats = [
    {
      title: "TOTAL COHORTS",
      value: total,
      description: "All cohorts created",
      icon: <UsersIcon />,
    },
    {
      title: "ACTIVE COHORTS",
      value: active,
      description: "Currently running",
      icon: <GraduationIcon />,
    },
    {
      title: "COMPLETED COHORTS",
      value: completed,
      description: "Successfully completed",
      icon: <CheckIcon />,
    },
    {
      title: "UPCOMING COHORTS",
      value: upcoming,
      description: "Starting soon",
      icon: <ClockIcon />,
    },
  ];

  return (
    <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            group
            relative
            min-h-[158px]
            overflow-hidden
            rounded-[10px]
            border
            border-[#28445F]
            bg-[#08223F]
            px-6
            py-5
            shadow-[0_8px_25px_rgba(0,0,0,0.12)]
            transition-all
            duration-300
            hover:-translate-y-[5px]
            hover:border-[#D9A441]
            hover:bg-[#0A2848]
            hover:shadow-[0_16px_35px_rgba(0,0,0,0.24)]
          "
        >

          <div className="flex items-start gap-5">

            <div
              className="
                flex h-[60px] w-[60px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D9A441]
                bg-[#061B35]
                text-[#D9A441]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:bg-[#D9A441]
                group-hover:text-[#061B35]
              "
            >
              {stat.icon}
            </div>

            <div className="min-w-0">

              <p className="text-[13px] font-semibold tracking-wide text-[#D9A441]">
                {stat.title}
              </p>

              <h2 className="mt-2 font-[var(--font-fraunces)] text-[36px] font-semibold leading-none text-white">
                {stat.value}
              </h2>

              <p className="mt-3 text-[13px] text-[#B4C0CF]">
                {stat.description}
              </p>

            </div>
          </div>

          <div
            className="
              absolute
              bottom-4
              left-6
              h-[4px]
              w-[88px]
              rounded-full
              bg-[#D9A441]
              transition-all
              duration-300
              group-hover:w-[125px]
            "
          />

        </div>
      ))}

    </div>
  );
}