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
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 14h10l1-14" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      {/* BACKDROP */}

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-[#0B0F19]/75
          backdrop-blur-[3px]
        "
      />

      {/* MODAL CARD */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[460px]
          overflow-hidden
          rounded-[18px]
          border
          border-[#C8955A]/30
          bg-gradient-to-br
          from-[#1B3A6B]
          via-[#142F57]
          to-[#0B0F19]
          p-7
          shadow-[0_25px_70px_rgba(0,0,0,0.5)]
          animate-in
          fade-in
          zoom-in-95
          duration-200
        "
      >
        {/* TOP DECORATION */}

        <div
          className="
            absolute
            left-0
            top-0
            h-[3px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#C8955A]
            to-transparent
          "
        />

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-[38px]
            w-[38px]
            items-center
            justify-center
            rounded-full
            border
            border-[#FAF7F2]/15
            text-[#F5F0E8]/70
            transition-all
            duration-200
            hover:border-[#C8955A]
            hover:bg-[#C8955A]
            hover:text-[#0B0F19]
          "
        >
          <CloseIcon />
        </button>

        {/* ICON */}

        <div
          className="
            flex
            h-[64px]
            w-[64px]
            items-center
            justify-center
            rounded-full
            border
            border-[#C8955A]/50
            bg-[#0B0F19]/30
            text-[#C8955A]
          "
        >
          <TrashIcon />
        </div>

        {/* CONTENT */}

        <div className="mt-6">

          <h2
            className="
              text-[25px]
              font-bold
              tracking-tight
              text-[#FAF7F2]
            "
          >
            Delete Cohort?
          </h2>

          <p
            className="
              mt-3
              text-[15px]
              leading-7
              text-[#F5F0E8]/65
            "
          >
            Are you sure you want to delete{" "}
            <span className="font-semibold text-[#FAF7F2]">
              {cohort.name}
            </span>
            ?
          </p>

          <p
            className="
              mt-2
              text-[13px]
              text-[#C8955A]/80
            "
          >
            This action cannot be undone.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="mt-8 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="
              h-[44px]
              rounded-[8px]
              border
              border-[#FAF7F2]/20
              px-6
              text-[14px]
              font-semibold
              text-[#F5F0E8]
              transition-all
              duration-200
              hover:border-[#C8955A]
              hover:text-[#C8955A]
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(cohort.id)}
            className="
              h-[44px]
              rounded-[8px]
              bg-[#C8955A]
              px-6
              text-[14px]
              font-semibold
              text-[#0B0F19]
              shadow-[0_8px_20px_rgba(200,149,90,0.2)]
              transition-all
              duration-200
              hover:-translate-y-[2px]
              hover:bg-[#D5A66F]
              hover:shadow-[0_12px_25px_rgba(200,149,90,0.3)]
            "
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}