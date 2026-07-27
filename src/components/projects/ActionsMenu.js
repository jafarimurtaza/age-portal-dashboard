"use client";
import { useState } from "react";

export default function ActionsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 transition"
      >
        ⋮
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-slate-800 border border-slate-700 rounded-xl shadow-lg z-10 overflow-hidden">
          <button className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">
            Edit
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
