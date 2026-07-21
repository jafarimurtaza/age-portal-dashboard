"use client";

import React from "react";

export default function Pagination() {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

      <p className="text-sm text-gray-500">
        Showing <span className="font-medium text-gray-700">1-5</span> of{" "}
        <span className="font-medium text-gray-700">24</span> cohorts
      </p>

      <div className="flex items-center gap-2">

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50"
        >
          ‹
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white"
        >
          1
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50"
        >
          2
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50"
        >
          3
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50"
        >
          ›
        </button>

      </div>

    </section>
  );
}