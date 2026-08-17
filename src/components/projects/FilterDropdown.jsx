export default function FilterDropdown({ label, options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-none px-4 py-2.5 text-sm outline-none border bg-white text-[#0B0F19] border-[#0B0F19]/10 shadow-sm w-full sm:w-auto"
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
