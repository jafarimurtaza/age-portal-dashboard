"use client";

import { useState } from "react";

export default function GraduateInfo({
  graduate,
}) {
  const [imageError, setImageError] = useState(false);

  if (!graduate) return null;

  const fallbackAvatar = `https://ui-avatars.com/api/?background=C8955A&color=fff&name=${encodeURIComponent(
    graduate.name || "Graduate"
  )}`;

  const imageSource =
    graduate.avatar && !imageError
      ? graduate.avatar
      : fallbackAvatar;

  return (
    <div className="flex min-w-0 items-center gap-4">
      <img
        src={imageSource}
        alt={graduate.name || "Graduate"}
        onError={() => setImageError(true)}
        className="h-14 w-14 shrink-0 rounded-full border-2 border-[#C8955A] object-cover"
      />

      <div className="min-w-0">
        <h3 className="truncate font-semibold text-[#0B0F19]">
          {graduate.name || "Unnamed Graduate"}
        </h3>

        <p className="truncate text-sm text-[#1B3A6B]">
          {graduate.email || "No email"}
        </p>
      </div>
    </div>
  );
}