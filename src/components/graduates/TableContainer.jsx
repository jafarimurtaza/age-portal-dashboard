"use client";

export default function TableContainer({
  children,
}) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white shadow-lg">
      {children}
    </div>
  );
}