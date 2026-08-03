export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search project..."
      className="bg-[#FAF7F2] border-none rounded-xl px-4 py-2.5 text-sm text-[#000000] placeholder-[#0B0F19]/35 flex-1 w-full focus:ring-2 focus:ring-[#051364]/40 outline-none"
    />
  );
}
