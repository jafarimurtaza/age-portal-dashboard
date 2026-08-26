"use client";

import React from "react";

export default function DeleteDialog({
  open,
  cohort,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B0F19]/40 px-4 backdrop-blur-[2px]">

      <div className="w-full max-w-[420px] rounded-[12px] bg-white p-6 shadow-2xl">

        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#FCE8E3] text-[#C94B42]">
          <svg
            width="22"
            height="22"
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
        </div>

        <h2 className="mt-5 text-[20px] font-semibold text-[#0B0F19]">
          Delete Cohort
        </h2>

        <p className="mt-2 text-[14px] leading-6 text-[#68708A]">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-[#0B0F19]">
            {cohort?.name}
          </span>
          ? This action cannot be undone.
        </p>

        <div className="mt-6 flex gap-3">

          <button
            type="button"
            onClick={onClose}
            className="h-[44px] flex-1 rounded-[8px] border border-[#DED8CE] bg-white text-[14px] font-semibold text-[#0B0F19] hover:bg-[#FAF7F2]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="h-[44px] flex-1 rounded-[8px] bg-[#C94B42] text-[14px] font-semibold text-white hover:bg-[#AF3932]"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}