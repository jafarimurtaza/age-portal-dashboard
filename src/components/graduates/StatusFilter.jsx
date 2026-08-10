// components/graduates/StatusFilter.jsx

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
        rounded-xl
        border
        border-[#F5F0E8]
        bg-white
        px-4
        py-3
        text-[#0B0F19]
        outline-none
        transition
        focus:border-[#C8955A]
      "
    >
      <option value="All">
        All Status
      </option>

      <option value="Active">
        Active
      </option>

      <option value="Alumni">
        Alumni
      </option>

      <option value="Inactive">
        Inactive
      </option>

    </select>
  );
}