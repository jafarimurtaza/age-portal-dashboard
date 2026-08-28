// components/graduates/LoadingSkeleton.jsx

"use client";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">

      {[1, 2, 3, 4, 5].map((item) => (

        <div
          key={item}
          className="animate-pulse rounded-2xl bg-white p-6 shadow"
        >

          <div className="flex items-center gap-5">

            <div className="h-16 w-16 rounded-full bg-[#F5F0E8]" />

            <div className="flex-1">

              <div className="mb-3 h-5 w-44 rounded bg-[#F5F0E8]" />

              <div className="h-4 w-64 rounded bg-[#F5F0E8]" />

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}