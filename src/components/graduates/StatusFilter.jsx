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
      className="
        h-12
        w-full
        cursor-pointer
        border
        border-[#F5F0E8]
        bg-white
        px-4
        text-sm
        text-[#0B0F19]
        outline-none
        focus:border-[#C8955A]
        sm:w-full
      "
    >
      <option value="All">All Status</option>
      <option value="Active">Active</option>
      <option value="Alumni">Alumni</option>
      <option value="Graduated">Graduated</option>
      <option value="Inactive">Inactive</option>
      <option value="Looking for Job">
        Looking for Job
      </option>
    </select>
  );
}