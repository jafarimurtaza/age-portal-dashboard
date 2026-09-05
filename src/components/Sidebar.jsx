"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaShieldHalved,
  FaGraduationCap,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { navGroups } from "@/data/sidebarNav";

function SidebarContent({ pathname, onNavigate }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-[#C8955A] flex items-center justify-center">
            <FaGraduationCap className="text-[#0B0F19] text-lg" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold leading-tight truncate">
              Afghan Geeks
            </p>
            <p className="text-[10px] tracking-[0.15em] text-[#C8955A] uppercase mt-0.5">
              Admin Console
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mx-5" />

      <nav className="flex-1 px-3 py-4 flex flex-col gap-6 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="px-3 mb-2 text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase">
              {group.label}
            </p>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    className={`relative flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-white/5 text-white font-medium"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1 bottom-1 w-1 bg-[#C8955A] rounded-r" />
                    )}
                    <Icon
                      className={isActive ? "text-[#C8955A]" : "text-white/40"}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-5">
        <div className="flex items-center gap-3 bg-[#1B3A6B]/60 border border-white/10 rounded-xl p-3">
          <span className="w-9 h-9 shrink-0 rounded-lg bg-[#1B3A6B] flex items-center justify-center">
            <FaShieldHalved className="text-[#C8955A]" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              Admin access
            </p>
            <p className="text-xs text-white/40 truncate">Preview build</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-40 w-10 h-10 flex items-center justify-center rounded-lg bg-[#0B0F19] text-white shadow-lg"
      >
        <FaBars />
      </button>

      <aside className="hidden md:flex md:w-64 md:fixed md:inset-y-0 md:left-0 md:z-30 bg-gradient-to-b from-[#1B3A6B] to-[#0B0F19]">
        <SidebarContent pathname={pathname} />
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      <aside
        className={`md:hidden fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-gradient-to-b from-[#1B3A6B] to-[#0B0F19] z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          aria-label="Close menu"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10"
        >
          <FaXmark />
        </button>
        <SidebarContent
          pathname={pathname}
          onNavigate={() => setIsOpen(false)}
        />
      </aside>
    </>
  );
}
