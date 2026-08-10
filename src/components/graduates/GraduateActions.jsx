"use client";

import {
  Eye,
  Pencil,
  Trash2,
  Heart,
  MessageCircle,
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

      {/* Favorite */}
      <button
        type="button"
        onClick={() => onFavorite?.(graduate)}
        aria-label="Favorite graduate"
        className="
          cursor-pointer
          rounded-xl
          p-2.5
          text-[#C8955A]
          transition-all
          duration-300
          hover:bg-[#C8955A]
          hover:text-white
        "
      >
        <Heart
          size={18}
          fill={graduate.favorite ? "currentColor" : "none"}
        />
      </button>

      {/* Comment */}
      <button
        type="button"
        onClick={() => onComment?.(graduate)}
        aria-label="Comment"
        className="
          cursor-pointer
          rounded-xl
          p-2.5
          text-[#1B3A6B]
          transition-all
          duration-300
          hover:bg-[#1B3A6B]
          hover:text-white
        "
      >
        <MessageCircle size={18} />
      </button>

      {/* View */}
      <button
        type="button"
        onClick={() => onView?.(graduate)}
        aria-label="View graduate"
        className="
          cursor-pointer
          rounded-xl
          p-2.5
          text-[#1B3A6B]
          transition-all
          duration-300
          hover:bg-[#1B3A6B]
          hover:text-white
        "
      >
        <Eye size={18} />
      </button>

      {/* Edit */}
      <button
        type="button"
        onClick={() => onEdit?.(graduate)}
        aria-label="Edit graduate"
        className="
          cursor-pointer
          rounded-xl
          p-2.5
          text-[#C8955A]
          transition-all
          duration-300
          hover:bg-[#C8955A]
          hover:text-white
        "
      >
        <Pencil size={18} />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={() => onDelete?.(graduate)}
        aria-label="Delete graduate"
        className="
          cursor-pointer
          rounded-xl
          p-2.5
          text-[#C8955A]
          transition-all
          duration-300
          hover:bg-[#C8955A]
          hover:text-white
        "
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}