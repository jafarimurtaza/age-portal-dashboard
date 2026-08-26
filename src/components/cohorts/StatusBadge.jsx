"use client";

import React from "react";

export default function StatusBadge({ status }) {
  const styles = {
    Active: {
      wrapper:
        "border-[#2E654E] bg-[#0C3027] text-[#77D4A8]",
    },

    Completed: {
      wrapper:
        "border-[#315B83] bg-[#0B2947] text-[#78B8F5]",
    },

    Upcoming: {
      wrapper:
        "border-[#80612D] bg-[#3A2D16] text-[#E5B85C]",
    },

    Pending: {
      wrapper:
        "border-[#80612D] bg-[#3A2D16] text-[#E5B85C]",
    },

    Archived: {
      wrapper:
        "border-[#713A43] bg-[#351E25] text-[#F28A8A]",
    },
  };

  const style =
    styles[status] || {
      wrapper:
        "border-[#405B74] bg-[#102B46] text-[#B7C3D2]",
    };

  return (
    <span
      className={`
        inline-flex
        rounded-[7px]
        border
        px-3
        py-1
        text-[11px]
        font-semibold
        ${style.wrapper}
      `}
    >
      {status}
    </span>
  );
}