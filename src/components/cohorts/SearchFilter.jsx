"use client";

import React from "react";

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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
    <div
      className="
        mb-5
        rounded-[10px]
        border
        border-[#28445F]
        bg-[#08223F]
        p-4
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      "
    >
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto]">

        <div className="relative">

          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8495A9]">
            <SearchIcon />
          </div>

          <input
            type="text"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            placeholder="Search cohorts..."
            className="
              h-[48px]
              w-full
              rounded-[7px]
              border
              border-[#35516C]
              bg-[#061B35]
              pl-11
              pr-4
              text-[14px]
              text-white
              outline-none
              placeholder:text-[#8292A5]
              transition
              focus:border-[#D9A441]
              focus:ring-2
              focus:ring-[#D9A441]/10
            "
          />

        </div>

        <select
          value={filters.status}
          onChange={(e) =>
            updateFilter("status", e.target.value)
          }
          className="
            h-[48px]
            rounded-[7px]
            border
            border-[#35516C]
            bg-[#061B35]
            px-4
            text-[14px]
            text-white
            outline-none
            transition
            focus:border-[#D9A441]
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
            h-[48px]
            rounded-[7px]
            border
            border-[#35516C]
            bg-[#061B35]
            px-4
            text-[14px]
            text-white
            outline-none
            transition
            focus:border-[#D9A441]
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
            h-[48px]
            rounded-[7px]
            border
            border-[#35516C]
            bg-[#061B35]
            px-4
            text-[14px]
            text-white
            outline-none
            transition
            focus:border-[#D9A441]
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
            h-[48px]
            items-center
            justify-center
            gap-2
            rounded-[7px]
            border
            border-[#D9A441]
            bg-transparent
            px-5
            text-[14px]
            font-semibold
            text-[#D9A441]
            transition-all
            duration-200
            hover:bg-[#D9A441]
            hover:text-[#061B35]
          "
        >
          <ResetIcon />
          Reset
        </button>

      </div>
    </div>
  );
}