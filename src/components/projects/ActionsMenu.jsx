"use client";
import { useState, useRef, useEffect } from "react";
import { FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ActionsMenu({ onDelete, onEdit, projectName }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors"
        title="Actions"
        type="button"
      >
        <FiMoreVertical className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
          <button
            onClick={() => {
              setIsOpen(false);
              onEdit();
            }}
            className="w-full px-4 py-2 text-xs text-[#FAF7F2] hover:bg-white/10 flex items-center gap-2.5 transition-colors"
            type="button"
          >
            <FiEdit2 className="w-4 h-4 text-[#C8955A]" />
            <span>Edit Project</span>
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onDelete();
            }}
            className="w-full px-4 py-2 text-xs text-rose-400 hover:bg-rose-500/10 flex items-center gap-2.5 transition-colors"
            type="button"
          >
            <FiTrash2 className="w-4 h-4" />
            <span>Delete Project</span>
          </button>
        </div>
      )}
    </div>
  );
}