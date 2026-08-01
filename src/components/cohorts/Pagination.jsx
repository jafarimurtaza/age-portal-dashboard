"use client";

import React, { useState } from "react";

function ChevronLeft() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Pagination() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex items-center justify-between rounded-[12px] border border-[#E7E8F0] bg-white px-5 py-4">
      <p className="text-[13px] text-[#68708A]">
        Showing 1 to 5 of 12 cohorts
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#E1E3EC] text-[#11142D] transition hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
        >
          <ChevronLeft />
        </button>

        {[1, 2, 3].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-[9px] text-[14px] font-semibold transition ${
              page === number
                ? "bg-[#4B21E8] text-white shadow-[0_5px_12px_rgba(75,33,232,0.22)]"
                : "border border-[#E1E3EC] text-[#11142D] hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => setPage(Math.min(3, page + 1))}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#E1E3EC] text-[#11142D] transition hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}