"use client";

import { useState } from "react";

export default function GraduateInfo({ graduate }) {
  const [imageError, setImageError] = useState(false);

  const avatar =
    graduate?.avatar || "";

  const fallback = `https://ui-avatars.com/api/?background=C8955A&color=fff&name=${encodeURIComponent(
    graduate?.name || "Graduate"
  )}`;

  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <img
        src={!imageError && avatar ? avatar : fallback}
        alt={graduate?.name || "Graduate"}
        onError={() => setImageError(true)}
        className="h-12 w-12 shrink-0 rounded-full border-2 border-[#C8955A] object-cover sm:h-14 sm:w-14"
      />

      <div className="min-w-0">
        <h3 className="truncate font-semibold text-[#0B0F19]">
          {graduate?.name || "Unnamed Graduate"}
        </h3>

        <p className="truncate text-xs text-[#1B3A6B] sm:text-sm">
          {graduate?.email || "No email"}
        </p>
      </div>
    </div>
  );
}