"use client";

import React from "react";

export default function StatusBadge({ status }) {
  const styles = {
    Active: "bg-[#E8F1E8] text-[#1B3A6B]",
    Completed: "bg-[#EAF1FB] text-[#1B3A6B]",
    Upcoming: "bg-[#FFF1D7] text-[#A66A28]",
    Pending: "bg-[#FFF1D7] text-[#A66A28]",
    Archived: "bg-[#FCE8E3] text-[#B85C4A]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold ${
        styles[status] || "bg-[#F5F0E8] text-[#68708A]"
      }`}
    >
      {status}
    </span>
  );
}