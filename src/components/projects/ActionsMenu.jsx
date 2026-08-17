"use client";
import { useState, useRef, useEffect } from "react";

export default function ActionsMenu({
  onDelete,
  onEdit,
  projectName,
  variant = "light",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setConfirmingDelete(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setConfirmingDelete(false);
  };

  const triggerClass =
    variant === "dark"
      ? "text-white/50 hover:text-white hover:bg-white/10"
      : "text-[#0B0F19]/40 hover:text-[#0B0F19] hover:bg-[#0B0F19]/5";

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
          setConfirmingDelete(false);
        }}
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${triggerClass}`}
        title="Actions"
        type="button"
      >
        ⋮
      </button>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 mt-1 w-52 rounded-xl bg-white border border-[#0B0F19]/10 shadow-xl py-1 z-50"
        >
          {!confirmingDelete ? (
            <>
              <button
                onClick={() => {
                  closeMenu();
                  onEdit();
                }}
                className="w-full px-4 py-2 text-xs text-[#0B0F19] hover:bg-[#F5F0E8] flex items-center gap-2.5 transition-colors"
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8955A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
                </svg>

                <span>Edit Project</span>
              </button>

              <button
                onClick={() => setConfirmingDelete(true)}
                className="w-full px-4 py-2 text-xs text-rose-500 hover:bg-rose-50 flex items-center gap-2.5 transition-colors"
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>

                <span>Delete Project</span>
              </button>
            </>
          ) : (
            <div className="px-4 py-3">
              <p className="text-xs text-[#0B0F19]/80 leading-snug mb-3">
                Delete{" "}
                <span className="font-semibold text-[#0B0F19]">
                  {projectName}
                </span>
                ? This can’t be undone.
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmingDelete(false)}
                  className="flex-1 text-xs font-medium text-[#0B0F19]/70 border border-[#0B0F19]/15 rounded-lg py-1.5 hover:bg-[#F5F0E8] transition-colors"
                  type="button"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    closeMenu();
                    onDelete();
                  }}
                  className="flex-1 text-xs font-medium text-white bg-rose-500 hover:bg-rose-600 rounded-lg py-1.5 transition-colors"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
