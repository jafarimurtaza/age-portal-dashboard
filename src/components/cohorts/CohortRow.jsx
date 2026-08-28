"use client";

import React from "react";
import StatusBadge from "./StatusBadge";

function EditIcon() {
  return (
    <svg
      width="18"
      height="18"
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
      width="18"
      height="18"
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
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      width="23"
      height="23"
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

function DataIcon() {
  return (
    <svg
      width="23"
      height="23"
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

function DesignIcon() {
  return (
    <svg
      width="23"
      height="23"
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
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 8a5 5 0 0 0 1 10Z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m4 12 16-7v14L4 12Z" />
      <path d="M8 14v5" />
      <path d="M20 10a3 3 0 0 1 0 4" />
    </svg>
  );
}

function CohortIcon({ type }) {
  let Icon = MonitorIcon;

  if (type === "mobile") Icon = MobileIcon;
  if (type === "data") Icon = DataIcon;
  if (type === "design") Icon = DesignIcon;
  if (type === "cloud") Icon = CloudIcon;
  if (type === "database") Icon = DatabaseIcon;
  if (type === "marketing") Icon = MarketingIcon;

  return (
    <div
      className="
        flex
        h-[44px]
        w-[44px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#D5E1EE]
        bg-[#DCE8F3]
        text-[#0B2A4A]
        transition-all
        duration-200
        group-hover:border-[#D9A441]
        group-hover:bg-[#F3E5C5]
        group-hover:text-[#8A641D]
      "
    >
      <Icon />
    </div>
  );
}

function formatDate(date) {
  if (!date) return "-";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function getCategoryClass(category) {
  if (category === "Technology") {
    return "border-[#315B83] text-[#78B8F5]";
  }

  if (category === "Data Science") {
    return "border-[#8A6832] text-[#E5B85C]";
  }

  if (category === "Design") {
    return "border-[#356B61] text-[#8BD0BA]";
  }

  return "border-[#35516C] text-[#B7C3D2]";
}

export default function CohortRow({
  cohort,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="
        group
        grid
        min-w-[1050px]
        grid-cols-[2fr_1.15fr_1.35fr_0.75fr_0.75fr_1fr_1fr_0.85fr]
        items-center
        border-t
        border-[#28445F]
        px-5
        py-[13px]
        transition-all
        duration-200
        hover:bg-[#0A2A4A]
      "
    >

      {/* COHORT */}

      <div className="flex items-center gap-4">

        <CohortIcon type={cohort.iconType} />

        <div className="min-w-0">

          <p className="truncate text-[14px] font-semibold text-white">
            {cohort.name}
          </p>

        </div>

      </div>

      {/* CODE */}

      <div className="text-[13px] text-[#B8C4D2]">
        {cohort.code}
      </div>

      {/* DATES */}

      <div className="text-[13px] leading-5 text-[#C3CDD8]">
        <div>{formatDate(cohort.start)}</div>
        <div>– {formatDate(cohort.end)}</div>
      </div>

      {/* GRADUATES */}

      <div className="text-[14px] font-medium text-white">
        {cohort.graduates}
      </div>

      {/* PROJECTS */}

      <div className="text-[14px] font-medium text-white">
        {cohort.projects}
      </div>

      {/* CATEGORY */}

      <div>
        <span
          className={`
            inline-flex
            rounded-[7px]
            border
            px-3
            py-1
            text-[11px]
            font-semibold
            ${getCategoryClass(cohort.category)}
          `}
        >
          {cohort.category}
        </span>
      </div>

      {/* STATUS */}

      <div>
        <StatusBadge status={cohort.status} />
      </div>

      {/* ACTIONS */}

      <div className="flex items-center justify-center gap-2">

        <button
          type="button"
          onClick={() => onEdit?.(cohort)}
          title="Edit cohort"
          className="
            flex
            h-[34px]
            w-[34px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#405B74]
            bg-[#061B35]
            text-[#D9A441]
            transition-all
            duration-200
            hover:border-[#D9A441]
            hover:bg-[#D9A441]
            hover:text-[#061B35]
          "
        >
          <EditIcon />
        </button>

        <button
          type="button"
          onClick={() => onDelete?.(cohort.id)}
          title="Delete cohort"
          className="
            flex
            h-[34px]
            w-[34px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#713A43]
            bg-[#061B35]
            text-[#F26A6A]
            transition-all
            duration-200
            hover:border-[#EF5350]
            hover:bg-[#EF5350]
            hover:text-white
          "
        >
          <DeleteIcon />
        </button>

      </div>

    </div>
  );
}