import { Pencil, Trash2 } from "lucide-react";
import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";

export default function GraduateRow({ graduate }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      {/* Graduate */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-gray-900">
            {graduate.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {graduate.email}
          </p>
        </div>
      </td>

      {/* Cohort */}
      <td className="px-6 py-5 whitespace-nowrap">
        <span className="text-gray-700">
          {graduate.cohort}
        </span>
      </td>

      {/* Role */}
      <td className="px-6 py-5 whitespace-nowrap">
        <span className="text-gray-700">
          {graduate.role}
        </span>
      </td>

      {/* Skills */}
      <td className="px-6 py-5">
        <div className="flex flex-wrap gap-2">
          {graduate.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
            />
          ))}
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <StatusBadge status={graduate.status} />
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex justify-end items-center gap-4">
          <button
            className="text-gray-500 hover:text-green-700 transition-colors"
            title="Edit Graduate"
          >
            <Pencil size={18} />
          </button>

          <button
            className="text-gray-500 hover:text-red-600 transition-colors"
            title="Delete Graduate"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}