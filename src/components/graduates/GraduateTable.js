// components/graduates/GraduateTable.js

import GraduateRow from "./GraduateRow";

export default function GraduateTable({ graduates }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr className="text-left text-sm font-semibold text-gray-600">
            <th className="px-6 py-4">Graduate</th>
            <th className="px-6 py-4">Cohort</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Skills</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {graduates.length > 0 ? (
            graduates.map((graduate) => (
              <GraduateRow
                key={graduate.id}
                graduate={graduate}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-gray-500"
              >
                No graduates found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}