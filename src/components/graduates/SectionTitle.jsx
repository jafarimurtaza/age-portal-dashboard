// components/graduates/SectionTitle.jsx

"use client";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-6">

      <h2 className="text-2xl font-bold text-[#0B0F19]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[#1B3A6B]">
          {subtitle}
        </p>
      )}

    </div>
  );
}