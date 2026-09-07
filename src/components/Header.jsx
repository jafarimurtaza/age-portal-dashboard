"use client";
import { FaMagnifyingGlass, FaBell } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-[#1B3A6B] to-[#0B0F19] border-b border-[#C8955A]/20 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md ml-14 md:ml-0">
        <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C8955A] text-sm" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-[#FAF7F2] placeholder-white/30 outline-none focus:ring-2 focus:ring-[#C8955A]/40 focus:border-[#C8955A] transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <button
          type="button"
          aria-label="Notifications"
          className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors"
        >
          <FaBell className="text-sm" />
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-[#C8955A]" />
        </button>

        <div className="flex items-center gap-2.5 border-l border-white/10 pl-3 sm:pl-4">
          <span className="w-8 h-8 rounded-full bg-[#C8955A] flex items-center justify-center text-[#0B0F19] text-xs font-bold shrink-0">
            A
          </span>
          <div className="hidden sm:block text-left leading-tight">
            <p className="text-sm font-medium text-[#FAF7F2]">Admin User</p>
            <p className="text-xs text-[#FAF7F2]/40">admin@afghangeeks.dev</p>
          </div>
        </div>
      </div>
    </header>
  );
}
