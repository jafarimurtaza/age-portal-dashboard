"use client";

import React from "react";

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v6h6" />
    </svg>
  );
}

export default function SearchFilter({ filters, onFilterChange, onReset }) {
  function updateFilter(key, value) {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  }

  return (
    <div className="rounded-[12px] border border-[#E7E8F0] bg-white px-5 py-5 shadow-[0_2px_8px_rgba(17,20,45,0.025)]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68708A]">
            <SearchIcon />
          </div>

          <input
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            placeholder="Search cohorts..."
            className="h-[43px] w-full rounded-[8px] border border-[#E1E3EC] bg-white pl-10 pr-4 text-[14px] text-[#11142D] outline-none transition placeholder:text-[#8A90A3] focus:border-[#5B2BEE] focus:ring-2 focus:ring-[#5B2BEE]/10"
          />
        </div>

        <select
          value={filters.status}
          onChange={(e) => updateFilter("status", e.target.value)}
          className="h-[43px] rounded-[8px] border border-[#E1E3EC] bg-white px-4 text-[14px] text-[#11142D] outline-none focus:border-[#5B2BEE]"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Archived</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          className="h-[43px] rounded-[8px] border border-[#E1E3EC] bg-white px-4 text-[14px] text-[#11142D] outline-none focus:border-[#5B2BEE]"
        >
          <option>All Categories</option>
          <option>Technology</option>
          <option>Data Science</option>
          <option>Design</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) => updateFilter("sort", e.target.value)}
          className="h-[43px] rounded-[8px] border border-[#E1E3EC] bg-white px-4 text-[14px] text-[#11142D] outline-none focus:border-[#5B2BEE]"
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Most Graduates</option>
        </select>

        <button
          onClick={onReset}
          className="flex h-[43px] items-center justify-center gap-2 rounded-[8px] border border-[#E1E3EC] px-5 text-[14px] font-semibold text-[#11142D] transition hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
        >
          <ResetIcon />
          Reset
        </button>
      </div>
    </div>
  );
}