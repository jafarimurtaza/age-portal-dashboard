"use client";

import React from "react";

export default function CohortHeader() {
  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Cohorts
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and monitor all cohorts in the system.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#4f46e5] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4338ca]"
      >
        <span className="text-lg leading-none">+</span>
        Add Cohort
      </button>
    </section>
  );
}