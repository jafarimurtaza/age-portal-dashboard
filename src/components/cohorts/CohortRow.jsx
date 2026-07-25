import React from "react";
import StatusBadge from "./StatusBadge";

export default function CohortRow({ cohort }) {
  return (
    <tr className="border-t border-gray-100 transition hover:bg-gray-50">

      <td className="px-5 py-5">
        <div>
          <p className="font-semibold text-gray-800">
            {cohort.name}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {cohort.description}
          </p>
        </div>
      </td>

      <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-600">
        {cohort.date}
      </td>

      <td className="px-5 py-5 text-sm font-medium text-gray-700">
        {cohort.graduates}
      </td>

      <td className="px-5 py-5 text-sm font-medium text-gray-700">
        {cohort.projects}
      </td>

      <td className="px-5 py-5 text-sm text-gray-600">
        {cohort.category}
      </td>

      <td className="px-5 py-5">
        <StatusBadge status={cohort.status} />
      </td>

      <td className="px-5 py-5">
        <div className="flex items-center gap-4">

          <button
            type="button"
            className="text-blue-500 transition hover:text-blue-700"
            title="View"
          >
            ◉
          </button>

          <button
            type="button"
            className="text-green-500 transition hover:text-green-700"
            title="Edit"
          >
            ✎
          </button>

          <button
            type="button"
            className="text-red-500 transition hover:text-red-700"
            title="Delete"
          >
            ♜
          </button>

        </div>
      </td>

    </tr>
  );
}