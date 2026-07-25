import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search graduates..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
}