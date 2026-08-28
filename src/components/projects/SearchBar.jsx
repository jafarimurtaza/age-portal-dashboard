export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0B0F19]/30"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search project..."
        className="rounded-none pl-10 pr-4 py-2.5 text-sm w-full outline-none focus:ring-2 focus:ring-[#C8955A]/40 border bg-white text-[#0B0F19] placeholder-[#0B0F19]/35 border-[#0B0F19]/10 shadow-sm"
      />
    </div>
  );
}
