// components/graduates/EmptyState.jsx

"use client";

import { Users } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-24 shadow-lg">

      <Users
        size={70}
        color="#C8955A"
      />

      <h2 className="mt-6 text-2xl font-bold text-[#0B0F19]">

        No Graduates Found

      </h2>

      <p className="mt-3 text-center text-gray-500">

        Try another search or add a new graduate.

      </p>

    </div>
  );
}