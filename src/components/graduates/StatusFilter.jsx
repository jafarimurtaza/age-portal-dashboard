"use client";

export default function StatusFilter({
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <select
      value={selectedStatus}
      onChange={(e) =>
        setSelectedStatus(e.target.value)
      }
      className="w-full border border-[#F5F0E8] bg-white px-4 py-3 text-sm text-[#0B0F19] outline-none transition focus:border-[#C8955A] sm:w-auto sm:min-w-44 sm:py-3.5"
    >
      <option value="All">All Status</option>
      <option value="Active">Active</option>
      <option value="Alumni">Alumni</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}