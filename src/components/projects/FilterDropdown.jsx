export default function FilterDropdown({ label, options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-[#FAF7F2] border-none rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] w-full sm:w-auto outline-none"
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
