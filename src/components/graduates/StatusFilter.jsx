"use client";

export default function StatusFilter({
  selectedStatus,
  setSelectedStatus,
}) {
  const statuses = [
    "All",
    "Active",
    "Alumni",
    "Graduated",
    "Looking for Job",
    "Inactive",
  ];

  return (
    <select
      value={selectedStatus}
      onChange={(e) => setSelectedStatus(e.target.value)}
      className="cursor-pointer rounded-xl border border-[#F5F0E8] bg-white px-4 py-3 text-sm font-medium text-[#0B0F19] outline-none transition-all duration-300 focus:border-[#C8955A] focus:ring-2 focus:ring-[#C8955A]/20"
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status === "All" ? "All Statuses" : status}
        </option>
      ))}
    </select>
  );
}