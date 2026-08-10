// components/graduates/TableHeader.jsx

"use client";

export default function TableHeader() {
  return (
    <thead className="bg-[#1B3A6B] text-white">

      <tr>

        <th className="px-6 py-5 text-left">
          Graduate
        </th>

        <th className="px-6 py-5 text-left">
          Role
        </th>

        <th className="px-6 py-5 text-left">
          Cohort
        </th>

        <th className="px-6 py-5 text-left">
          Skills
        </th>

        <th className="px-6 py-5 text-left">
          Status
        </th>

        <th className="px-6 py-5 text-right">
          Actions
        </th>

      </tr>

    </thead>
  );
}