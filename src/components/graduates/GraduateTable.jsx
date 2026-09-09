"use client";

import TableBody from "./TableBody";

export default function GraduateTable({
  graduates,
  onEdit,
  onDelete,
}) {
  return (
    <div className="w-full overflow-hidden bg-white">
      <table className="w-full table-fixed border-collapse">
        <thead className="hidden md:table-header-group">
          <tr className="bg-[#1B3A6B]">
            <th className="w-[25%] px-4 py-4 text-left text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Graduate
            </th>

            <th className="w-[17%] px-4 py-4 text-left text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Role
            </th>

            <th className="w-[13%] px-4 py-4 text-left text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Cohort
            </th>

            <th className="w-[20%] px-4 py-4 text-left text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Skills
            </th>

            <th className="w-[13%] px-4 py-4 text-left text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Status
            </th>

            <th className="w-[12%] px-4 py-4 text-right text-sm font-semibold text-[#FAF7F2] lg:px-6">
              Actions
            </th>
          </tr>
        </thead>

        <TableBody
          graduates={graduates}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </table>
    </div>
  );
}