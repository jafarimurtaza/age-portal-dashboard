// components/graduates/FavoriteButton.jsx

"use client";

import { Heart } from "lucide-react";

export default function FavoriteButton({
  graduate,
  onFavorite,
}) {
  const favorite = Boolean(graduate.favorite);

  return (
    <button
      type="button"
      onClick={() => onFavorite(graduate)}
      aria-label={
        favorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
      className={`
        cursor-pointer
        rounded-xl
        p-2.5
        transition-all
        duration-300
        ${
          favorite
            ? "bg-[#C8955A] text-white"
            : "text-[#C8955A] hover:bg-[#C8955A] hover:text-white"
        }
      `}
    >
      <Heart
        size={18}
        fill={favorite ? "currentColor" : "none"}
      />
    </button>
  );
}