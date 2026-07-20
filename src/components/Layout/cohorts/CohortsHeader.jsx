import React from "react";

export default function CohortHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Cohorts
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all cohorts from one place.
        </p>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
        + Add Cohort
      </button>
    </div>
  );
}