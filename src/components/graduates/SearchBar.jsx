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
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Search graduates..."
        className="
        w-full
        rounded-xl
        border
        border-gray-300
        bg-white
        py-3
        pl-11
        pr-4
        shadow-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#C8955A]
        focus:ring-2
        focus:ring-[#C8955A]
      "
      />

    </div>
  );
}