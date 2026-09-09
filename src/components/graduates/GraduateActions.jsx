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
        className="
          flex
          h-9
          w-9
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          bg-[#F5F0E8]
          text-[#1B3A6B]
          transition-all
          duration-200
          hover:bg-[#C8955A]
          hover:text-[#0B0F19]
        "
      >
        <Pencil size={17} />
      </button>

      <button
        type="button"
        onClick={() => onDelete(graduate)}
        aria-label={`Delete ${graduate.name}`}
        className="
          flex
          h-9
          w-9
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          bg-[#F5F0E8]
          text-[#1B3A6B]
          transition-all
          duration-200
          hover:bg-[#C8955A]
          hover:text-[#0B0F19]
        "
      >
        <Trash2 size={17} />
      </button>
    </div>
  );
}