"use client";

import React from "react";
import StatusBadge from "./StatusBadge";

/* =========================
   ACTION ICONS
========================= */

function EyeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

/* =========================
   COHORT ICONS
========================= */

function MonitorIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10 5h4M11 18.5h2" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <rect x="7" y="12" width="2.5" height="5" rx="1" />
      <rect x="11" y="8" width="2.5" height="9" rx="1" />
      <rect x="15" y="5" width="2.5" height="12" rx="1" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h2a7 7 0 0 0 0-10Z" />

      <circle cx="7.5" cy="10" r="1" />

      <circle cx="9" cy="6.5" r="1" />

      <circle cx="14" cy="6" r="1" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 8a5 5 0 0 0 1 10Z" />
    </svg>
  );
}

/* =========================
   ICON COLORS
========================= */

const iconStyles = {
  purple: "bg-[#EEE8FF] text-[#5B2BEE]",

  green: "bg-[#E4F8EA] text-[#16A34A]",

  orange: "bg-[#FFF1D7] text-[#F59E0B]",

  pink: "bg-[#FFE8EE] text-[#E5486D]",

  blue: "bg-[#E5F0FF] text-[#2563EB]",
};

/* =========================
   COHORT ICON COMPONENT
========================= */

function CohortIcon({ color, type }) {
  const Icon =
    type === "mobile"
      ? MobileIcon
      : type === "data"
        ? ChartIcon
        : type === "design"
          ? PaletteIcon
          : type === "cloud"
            ? CloudIcon
            : MonitorIcon;

  return (
    <div
      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] ${iconStyles[color]}`}
    >
      <Icon />
    </div>
  );
}

/* =========================
   COHORT ROW
========================= */

export default function CohortRow({ cohort }) {
  return (
    <div className="grid min-w-[1050px] grid-cols-[2.2fr_1.25fr_0.8fr_0.8fr_1fr_1fr_1.2fr] items-center border-t border-[#EEF0F5] px-5 py-4 transition hover:bg-[#FBFBFE]">

      {/* Cohort */}
      <div className="flex items-center gap-4">

        <CohortIcon
          color={cohort.iconColor}
          type={cohort.iconType}
        />

        <div>
          <p className="text-[14px] font-semibold text-[#11142D]">
            {cohort.name}
          </p>

          <p className="mt-1 text-[13px] text-[#68708A]">
            {cohort.code}
          </p>
        </div>

      </div>

      {/* Date Range */}
      <div className="text-[13px] leading-6 text-[#68708A]">
        {cohort.start}

        <br />

        – {cohort.end}
      </div>

      {/* Graduates */}
      <div className="text-[14px] text-[#11142D]">
        {cohort.graduates}
      </div>

      {/* Projects */}
      <div className="text-[14px] text-[#11142D]">
        {cohort.projects}
      </div>

      {/* Category */}
      <div>
        <span
          className={`rounded-full px-3 py-1 text-[12px] font-semibold ${cohort.categoryColor}`}
        >
          {cohort.category}
        </span>
      </div>

      {/* Status */}
      <div>
        <StatusBadge status={cohort.status} />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">

        <button
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#E5E7EF] text-[#11142D] transition hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
        >
          <EyeIcon />
        </button>

        <button
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#E5E7EF] text-[#11142D] transition hover:border-[#5B2BEE] hover:text-[#5B2BEE]"
        >
          <EditIcon />
        </button>

        <button
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#F1D9DE] text-[#E5486D] transition hover:bg-[#FFF1F3]"
        >
          <DeleteIcon />
        </button>

      </div>

    </div>
  );
}