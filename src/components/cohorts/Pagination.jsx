"use client";

import React from "react";

function ChevronLeft() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange,
}) {
  const safeTotalPages = Math.max(1, totalPages);

  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const end =
    totalItems === 0
      ? 0
      : Math.min(currentPage * itemsPerPage, totalItems);

  function goToPage(page) {
    const nextPage = Math.min(
      safeTotalPages,
      Math.max(1, page)
    );

    if (onPageChange) {
      onPageChange(nextPage);
    }
  }

  return (
    <div className="flex items-center justify-between rounded-[12px] border border-[#E5DED3] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(11,15,25,0.025)]">
      <p className="text-[13px] text-[#68708A]">
        Showing {start} to {end} of {totalItems} cohorts
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => goToPage(currentPage - 1)}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#DED8CE] text-[#0B0F19] transition hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft />
        </button>

        {Array.from(
          { length: safeTotalPages },
          (_, index) => index + 1
        ).map((number) => (
          <button
            key={number}
            type="button"
            onClick={() => goToPage(number)}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[9px] text-[14px] font-semibold transition ${
              currentPage === number
                ? "bg-[#1B3A6B] text-white shadow-[0_5px_12px_rgba(27,58,107,0.22)]"
                : "border border-[#DED8CE] bg-white text-[#0B0F19] hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage >= safeTotalPages}
          onClick={() => goToPage(currentPage + 1)}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#DED8CE] text-[#0B0F19] transition hover:border-[#1B3A6B] hover:text-[#1B3A6B] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}