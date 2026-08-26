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
      strokeLinecap="round"
      strokeLinejoin="round"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v6h6" />
    </svg>
  );
}

export default function SearchFilter({
  filters,
  onFilterChange,
  onReset,
}) {
  function updateFilter(key, value) {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  }

  return (
    <div
      className="
        rounded-[12px]
        border
        border-[#E6E0D7]
        bg-white
        px-5
        py-5
        shadow-[0_2px_8px_rgba(11,15,25,0.035)]
      "
    >
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-[1.55fr_1fr_1fr_1fr_auto]">
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#68708A]">
            <SearchIcon />
          </div>

          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              updateFilter("search", e.target.value)
            }
            placeholder="Search cohorts..."
            className="
              h-[43px]
              w-full
              rounded-[8px]
              border
              border-[#DED8CE]
              bg-white
              pl-10
              pr-4
              text-[14px]
              text-[#0B0F19]
              outline-none
              transition
              placeholder:text-[#8A90A3]
              focus:border-[#1B3A6B]
              focus:ring-2
              focus:ring-[#1B3A6B]/10
            "
          />
        </div>

        <select
          value={filters.status}
          onChange={(e) =>
            updateFilter("status", e.target.value)
          }
          className="
            h-[43px]
            rounded-[8px]
            border
            border-[#DED8CE]
            bg-white
            px-4
            text-[14px]
            text-[#0B0F19]
            outline-none
            transition
            focus:border-[#1B3A6B]
            focus:ring-2
            focus:ring-[#1B3A6B]/10
          "
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Upcoming</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) =>
            updateFilter("category", e.target.value)
          }
          className="
            h-[43px]
            rounded-[8px]
            border
            border-[#DED8CE]
            bg-white
            px-4
            text-[14px]
            text-[#0B0F19]
            outline-none
            transition
            focus:border-[#1B3A6B]
            focus:ring-2
            focus:ring-[#1B3A6B]/10
          "
        >
          <option>All Categories</option>
          <option>Technology</option>
          <option>Data Science</option>
          <option>Design</option>
        </select>

        <select
          value={filters.sort}
          onChange={(e) =>
            updateFilter("sort", e.target.value)
          }
          className="
            h-[43px]
            rounded-[8px]
            border
            border-[#DED8CE]
            bg-white
            px-4
            text-[14px]
            text-[#0B0F19]
            outline-none
            transition
            focus:border-[#1B3A6B]
            focus:ring-2
            focus:ring-[#1B3A6B]/10
          "
        >
          <option>Newest</option>
          <option>Oldest</option>
          <option>Most Graduates</option>
        </select>

        <button
          type="button"
          onClick={onReset}
          className="
            flex
            h-[43px]
            items-center
            justify-center
            gap-2
            rounded-[8px]
            border
            border-[#DED8CE]
            bg-white
            px-5
            text-[14px]
            font-semibold
            text-[#0B0F19]
            transition-all
            hover:border-[#C8955A]
            hover:bg-[#F5F0E8]
            hover:text-[#1B3A6B]
          "
        >
          <ResetIcon />
          Reset
        </button>
      </div>
    </div>
  );
}