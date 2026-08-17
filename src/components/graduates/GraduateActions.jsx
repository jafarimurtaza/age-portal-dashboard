"use client";

import {
  Eye,
  Heart,
  MessageCircle,
  Pencil,
  Trash2,
} from "lucide-react";

export default function GraduateActions({
  graduate,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  return (
    <div className="flex items-center justify-end gap-2">
      <button
        type="button"
        onClick={() => onFavorite?.(graduate)}
        aria-label="Favorite graduate"
        className="cursor-pointer rounded-xl p-2.5 text-[#C8955A] transition-all duration-300 hover:bg-[#C8955A] hover:text-white"
      >
        <Heart size={18} />
      </button>

      <button
        type="button"
        onClick={() => onComment?.(graduate)}
        aria-label="Comment on graduate"
        className="cursor-pointer rounded-xl p-2.5 text-[#1B3A6B] transition-all duration-300 hover:bg-[#1B3A6B] hover:text-white"
      >
        <MessageCircle size={18} />
      </button>

      <button
        type="button"
        onClick={() => onView?.(graduate)}
        aria-label="View graduate"
        className="cursor-pointer rounded-xl p-2.5 text-[#1B3A6B] transition-all duration-300 hover:bg-[#1B3A6B] hover:text-white"
      >
        <Eye size={18} />
      </button>

      <button
        type="button"
        onClick={() => onEdit?.(graduate)}
        aria-label="Edit graduate"
        className="cursor-pointer rounded-xl p-2.5 text-[#C8955A] transition-all duration-300 hover:bg-[#C8955A] hover:text-white"
      >
        <Pencil size={18} />
      </button>

      <button
        type="button"
        onClick={() => onDelete?.(graduate)}
        aria-label="Delete graduate"
        className="cursor-pointer rounded-xl p-2.5 text-[#0B0F19] transition-all duration-300 hover:bg-[#0B0F19] hover:text-white"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}