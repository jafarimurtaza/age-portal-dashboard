"use client";

import { useEffect, useState } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import GraduateCard from "./GraduateCard";

export default function GraduateTable({
  graduates = [],
  onEdit,
  onDelete,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[200px] w-full bg-white" />
    );
  }

  if (graduates.length === 0) {
    return (
      <div className="w-full bg-white px-6 py-12 text-center text-[#1B3A6B]">
        No graduates found.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto bg-white lg:block">
        <table className="w-full min-w-[1000px] border-collapse">
          <TableHeader />

          <TableBody
            graduates={graduates}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </table>
      </div>

      {/* Mobile and Tablet Cards */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {graduates.map((graduate) => (
          <GraduateCard
            key={graduate.id}
            graduate={graduate}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}