"use client";

import React from "react";

export default function StatusBadge({ status }) {
  const styles = {
    Active: "bg-[#E4F8EA] text-[#159447]",
    Completed: "bg-[#E5F0FF] text-[#2563EB]",
    Pending: "bg-[#FFF4D6] text-[#C58A00]",
    Archived: "bg-[#FDE7E7] text-[#D64545]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[12px] font-semibold ${styles[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}