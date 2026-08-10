"use client";

export default function RoleBadge({ role }) {
  return (
    <span className="font-semibold text-[#1B3A6B]">
      {role || "—"}
    </span>
  );
}