export default function FilterDropdown({ label, options }) {
  return (
    <select className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-300">
      <option>{label}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
