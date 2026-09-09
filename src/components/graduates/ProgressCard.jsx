"use client";

import {
  GraduationCap,
  BookOpen,
  UserRoundX,
  FileText,
} from "lucide-react";

const icons = {
  attended: GraduationCap,
  completed: BookOpen,
  absent: UserRoundX,
  quiz: FileText,
};

export default function ProgressCard({
  type,
  title,
  value,
  total,
  progress = 0,
}) {
  const Icon = icons[type] || GraduationCap;

  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (safeProgress / 100) * circumference;

  return (
    <div
      className="
        flex
        min-w-0
        items-center
        justify-between
        gap-4
        bg-[#1B3A6B]
        px-5
        py-5
        sm:px-6
        sm:py-6
      "
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#475b2d]
            bg-[#1B3A6B]
            text-[#C8955A]
            sm:h-14
            sm:w-14
          "
        >
          <Icon
            size={25}
            strokeWidth={1.8}
          />
        </div>

        <div className="min-w-0">
          <h3
            className="
              truncate
              text-sm
              font-semibold
              text-[#FAF7F2]
              sm:text-base
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-1
              whitespace-nowrap
              text-sm
              text-[#F5F0E8]
            "
          >
            {value} / {total}
          </p>
        </div>
      </div>

      <div
        className="
          relative
          h-16
          w-16
          shrink-0
          sm:h-[70px]
          sm:w-[70px]
        "
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 64 64"
          className="-rotate-90"
        >
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#0B0F19"
            strokeWidth="4"
          />

          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="#C8955A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-sm
            font-semibold
            text-[#FAF7F2]
          "
        >
          {safeProgress}%
        </div>
      </div>
    </div>
  );
}