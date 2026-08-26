"use client";

import { Pencil, Trash2 } from "lucide-react";

export default function GraduateActions({
  graduate,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        type="button"
        onClick={() => onEdit(graduate)}
        aria-label={`Edit ${graduate.name}`}
        className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[#F5F0E8] text-[#1B3A6B] transition duration-200 hover:bg-[#1B3A6B] hover:text-white"
      >
        <Pencil size={18} />
      </button>

      <button
        type="button"
        onClick={() => onDelete(graduate)}
        aria-label={`Delete ${graduate.name}`}
        className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[#F5F0E8] text-[#0B0F19] transition duration-200 hover:bg-[#0B0F19] hover:text-white"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}