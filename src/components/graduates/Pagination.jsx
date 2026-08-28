// components/graduates/Pagination.jsx

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-between">

      <button
        onClick={() =>
          setCurrentPage((page) =>
            Math.max(page - 1, 1)
          )
        }
        className="
          flex
          cursor-pointer
          items-center
          gap-2
          rounded-xl
          bg-[#1B3A6B]
          px-5
          py-3
          text-white
          transition-all
          hover:bg-[#C8955A]
        "
      >
        <ChevronLeft size={18} />

        Previous

      </button>

      <div className="flex items-center gap-3">

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`h-10 w-10 rounded-full font-semibold transition-all ${
                currentPage === index + 1
                  ? "bg-[#1B3A6B] text-white"
                  : "bg-white text-[#1B3A6B]"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

      </div>

      <button
        onClick={() =>
          setCurrentPage((page) =>
            Math.min(page + 1, totalPages)
          )
        }
        className="
          flex
          cursor-pointer
          items-center
          gap-2
          rounded-xl
          bg-[#1B3A6B]
          px-5
          py-3
          text-white
          transition-all
          hover:bg-[#C8955A]
        "
      >
        Next

        <ChevronRight size={18} />

      </button>

    </div>
  );
}