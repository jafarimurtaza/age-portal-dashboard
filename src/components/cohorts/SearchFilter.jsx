"use client";

import React from "react";

export default function SearchFilter() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr]">

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search cohorts..."
            className="h-11 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <select className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-600 outline-none focus:border-indigo-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Archived</option>
        </select>

        <select className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-600 outline-none focus:border-indigo-500">
          <option>All Categories</option>
          <option>Development</option>
          <option>Mobile</option>
          <option>Design</option>
          <option>Data</option>
          <option>Cloud</option>
        </select>

        <select className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-600 outline-none focus:border-indigo-500">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Most Graduates</option>
          <option>Most Projects</option>
        </select>

      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600"
        >
          <span>⚱</span>
          Filter cohorts
        </button>

        <button
          type="button"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          ↻ Reset Filters
        </button>

      </div>

    </section>
  );
}