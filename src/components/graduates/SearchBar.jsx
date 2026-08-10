// components/graduates/SearchBar.jsx

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
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1B3A6B]"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search graduates..."
        className="
          w-full
          rounded-xl
          border
          border-[#F5F0E8]
          bg-white
          py-3
          pl-12
          pr-4
          outline-none
          transition
          focus:border-[#C8955A]
        "
      />

    </div>
  );
}