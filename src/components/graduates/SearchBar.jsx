"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#1B3A6B]
        "
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search graduates..."
        className="
          h-12
          w-full
          border
          border-[#F5F0E8]
          bg-white
          pl-11
          pr-4
          text-sm
          text-[#0B0F19]
          outline-none
          transition
          placeholder:text-[#0B0F19]/50
          focus:border-[#C8955A]
        "
      />
    </div>
  );
}