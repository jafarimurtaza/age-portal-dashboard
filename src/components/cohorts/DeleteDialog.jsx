"use client";

import React from "react";

function TrashIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v5M14 11v5" />
    </svg>
  );
}

export default function DeleteDialog({
  open,
  cohort,
  onClose,
  onConfirm,
}) {
  if (!open || !cohort) return null;

  const handleDelete = () => {
    onConfirm(cohort);
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-[200]
        flex items-center justify-center
        bg-[#020817]/80
        px-4
        backdrop-blur-sm
      "
    >
      <div
        className="
          relative w-full max-w-[440px]
          overflow-hidden rounded-2xl
          border border-[#C8955A]/30
          bg-gradient-to-br
          from-[#0B0F19]
          via-[#101C2E]
          to-[#07101F]
          p-8
          shadow-[0_25px_80px_rgba(0,0,0,0.7)]
        "
      >
        {/* Gold top line */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8955A] to-transparent" />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-5 top-4
            flex h-9 w-9 items-center justify-center
            rounded-lg text-xl text-[#AAB2C0]
            transition
            hover:bg-white/10 hover:text-white
          "
        >
          ×
        </button>

        {/* Icon */}
        <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.12)]">
          <TrashIcon />
        </div>

        {/* Title */}
        <h2 className="mt-5 text-center text-[23px] font-semibold text-white">
          Delete Cohort?
        </h2>

        {/* Text */}
        <div className="mt-4 text-center">
          <p className="text-[14px] leading-6 text-[#B7BFCC]">
            Are you sure you want to delete
          </p>

          <p className="mt-1 text-[15px] font-semibold text-[#E5B873]">
            "{cohort.name}"?
          </p>

          <p className="mt-3 text-[13px] text-[#7E8797]">
            This action cannot be undone.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg
              border border-white/15
              bg-white/[0.03]
              px-5 py-3
              text-[14px] font-semibold text-white
              transition
              hover:border-[#C8955A]/60
              hover:bg-white/[0.06]
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="
              flex items-center justify-center gap-2
              rounded-lg
              bg-[#C9342F]
              px-5 py-3
              text-[14px] font-semibold text-white
              shadow-[0_6px_20px_rgba(201,52,47,0.25)]
              transition
              hover:bg-[#E0443E]
              hover:scale-[1.02]
            "
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
            </svg>

            Delete
          </button>
        </div>
      </div>
    </div>
  );
}