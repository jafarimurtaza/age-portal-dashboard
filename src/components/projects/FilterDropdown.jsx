export default function FilterDropdown({
  label,
  options,
  value,
  onChange,
  dark,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-xl px-4 py-2.5 text-sm outline-none border ${
        dark
          ? "bg-white/5 text-[#FAF7F2] border-white/10"
          : "bg-white text-[#0B0F19] border-[#0B0F19]/10 shadow-sm"
      }`}
    >
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
