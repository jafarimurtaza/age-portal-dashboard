"use client";

import { Plus } from "lucide-react";

export default function GraduatesHeader({
  onAddGraduate,
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h1 className="text-3xl font-bold text-[#0B0F19] md:text-4xl">
          Graduates
        </h1>

        <p className="mt-2 mb-4 text-sm text-[#1B3A6B] md:text-base">
          Manage Afghan Geeks graduates professionally.
        </p>
      </div>

      <button
        type="button"
        onClick={onAddGraduate}
        className="flex mb-4 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#1B3A6B] px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#C8955A] hover:shadow-xl active:scale-95 sm:px-6"
      >
        <Plus size={20} />

        <span>
          Add Graduate
        </span>
      </button>

    </div>
  );
}