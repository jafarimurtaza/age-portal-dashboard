"use client";

import React from "react";
import StatusBadge from "./StatusBadge";

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

const iconStyles = {
  purple: "bg-[#EAF1FB] text-[#1B3A6B]",
  green: "bg-[#E8F1E8] text-[#3F704F]",
  orange: "bg-[#FFF1D7] text-[#C8955A]",
  pink: "bg-[#FCE8E3] text-[#B85C4A]",
  blue: "bg-[#EAF1FB] text-[#1B3A6B]",
};

function CohortIcon({ color = "purple", type = "web" }) {
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
      className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] ${
        iconStyles[color] || iconStyles.purple
      }`}
    >
      <Icon />
    </div>
  );
}

export default function CohortRow({
  cohort,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid min-w-[1050px] grid-cols-[2.2fr_1.25fr_0.8fr_0.8fr_1fr_1fr_1.2fr] items-center border-t border-[#EEE8DF] px-5 py-4 transition hover:bg-[#FCFAF7]">

      <div className="flex items-center gap-4">
        <CohortIcon
          color={cohort.iconColor}
          type={cohort.iconType}
        />

        <div>
          <p className="text-[14px] font-semibold text-[#0B0F19]">
            {cohort.name}
          </p>

          <p className="mt-1 text-[13px] text-[#68708A]">
            {cohort.code}
          </p>
        </div>
      </div>

      <div className="text-[13px] leading-6 text-[#68708A]">
        {cohort.start}
        <br />
        – {cohort.end}
      </div>

      <div className="text-[14px] text-[#0B0F19]">
        {cohort.graduates}
      </div>

      <div className="text-[14px] text-[#0B0F19]">
        {cohort.projects}
      </div>

      <div>
        <span
          className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
            cohort.categoryColor ||
            "bg-[#EAF1FB] text-[#1B3A6B]"
          }`}
        >
          {cohort.category}
        </span>
      </div>

      <div>
        <StatusBadge status={cohort.status} />
      </div>

      <div className="flex items-center gap-2">

        <button
          type="button"
          aria-label="View cohort"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#DED8CE] text-[#0B0F19] transition hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
        >
          <EyeIcon />
        </button>

        <button
          type="button"
          aria-label="Edit cohort"
          onClick={() => onEdit?.(cohort)}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#DED8CE] text-[#0B0F19] transition hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
        >
          <EditIcon />
        </button>

        <button
          type="button"
          aria-label="Delete cohort"
          onClick={() => onDelete?.(cohort)}
          className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-[#E9D1CB] text-[#B85C4A] transition hover:bg-[#FCE8E3]"
        >
          <DeleteIcon />
        </button>

      </div>
    </div>
  );
}