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
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div
      className="
        mt-4
        flex
        flex-col
        gap-4
        rounded-[10px]
        border
        border-[#28445F]
        bg-[#08223F]
        px-5
        py-4
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >

      <p className="text-[13px] text-[#AAB7C8]">
        Showing {start} to {end} of {totalItems} cohorts
      </p>

      <div className="flex items-center gap-2">

        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="
            flex
            h-[38px]
            w-[38px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#35516C]
            bg-[#061B35]
            text-[#C1CBD7]
            transition-all
            hover:border-[#D9A441]
            hover:text-[#D9A441]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`
              flex
              h-[38px]
              w-[38px]
              items-center
              justify-center
              rounded-[7px]
              text-[14px]
              font-semibold
              transition-all
              ${
                currentPage === page
                  ? "border border-[#D9A441] bg-[#D9A441] text-[#061B35] shadow-[0_5px_15px_rgba(217,164,65,0.22)]"
                  : "border border-[#35516C] bg-[#061B35] text-[#C1CBD7] hover:border-[#D9A441] hover:text-[#D9A441]"
              }
            `}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            flex
            h-[38px]
            w-[38px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#35516C]
            bg-[#061B35]
            text-[#C1CBD7]
            transition-all
            hover:border-[#D9A441]
            hover:text-[#D9A441]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}