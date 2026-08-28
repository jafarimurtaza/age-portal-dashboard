"use client";
import { useState, useRef, useEffect } from "react";

export default function FilterDropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue = value || label;

  return (
    <div ref={ref} className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full sm:w-auto sm:min-w-[150px] rounded-none px-4 py-2.5 text-sm border bg-white text-[#0B0F19] border-[#0B0F19]/10 shadow-sm flex items-center justify-between gap-3 cursor-pointer"
      >
        <span className="truncate">{displayValue}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-[#0B0F19]/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 sm:right-auto sm:min-w-[170px] mt-1 bg-white border border-[#0B0F19]/10 shadow-xl z-20 py-1 max-h-56 overflow-y-auto">
          <button
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              !value
                ? "bg-[#C8955A]/15 text-[#8a6539] font-medium"
                : "text-[#0B0F19] hover:bg-[#F5F0E8]"
            }`}
          >
            {label}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                opt === value
                  ? "bg-[#C8955A]/15 text-[#8a6539] font-medium"
                  : "text-[#0B0F19] hover:bg-[#F5F0E8]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
