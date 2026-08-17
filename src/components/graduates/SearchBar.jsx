"use client";

import { Search, X } from "lucide-react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1B3A6B]"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search graduates..."
        className="w-full rounded-xl border border-[#F5F0E8] bg-white py-3 pl-12 pr-10 text-[#0B0F19] outline-none transition-all duration-300 placeholder:text-[#1B3A6B]/60 focus:border-[#C8955A] focus:ring-2 focus:ring-[#C8955A]/20"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-lg p-1.5 text-[#1B3A6B] transition hover:bg-[#F5F0E8]"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}