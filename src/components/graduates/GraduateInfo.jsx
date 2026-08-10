"use client";

export default function GraduateInfo({ graduate }) {
  if (!graduate) return null;

  const avatar =
    graduate.avatar ||
    `https://ui-avatars.com/api/?background=C8955A&color=fff&name=${encodeURIComponent(
      graduate.name || "Graduate"
    )}`;

  return (
    <div className="flex min-w-0 items-center gap-4">

      <img
        src={avatar}
        alt={graduate.name || "Graduate"}
        className="
          h-14
          w-14
          shrink-0
          rounded-full
          border-2
          border-[#C8955A]
          object-cover
        "
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