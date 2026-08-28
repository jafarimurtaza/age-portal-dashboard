import {
  UsersRound,
  BookOpen,
  TrendingDown,
  FileText,
} from "lucide-react";

const icons = {
  attended: UsersRound,
  completed: BookOpen,
  absent: TrendingDown,
  quiz: FileText,
};

export default function ProgressCard({
  type,
  title,
  value,
  total,
  progress,
}) {
  const Icon = icons[type] || UsersRound;

  const safeProgress = Math.min(
    Math.max(Number(progress) || 0, 0),
    100
  );

  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  const strokeOffset =
    circumference -
    (safeProgress / 100) * circumference;

  return (
    <div className="flex min-w-0 items-center justify-between gap-3 bg-white px-4 py-5 sm:gap-5 sm:px-6 sm:py-6">
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F5F0E8] sm:h-16 sm:w-16">
          <Icon
            size={28}
            strokeWidth={1.8}
            className="text-[#1B3A6B]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#0B0F19] sm:text-xl">
            {title}
          </h3>

          <p className="mt-1 text-xs text-[#1B3A6B] sm:text-base">
            {value}/{total}
          </p>
        </div>
      </div>

      <div className="relative h-16 w-16 shrink-0 sm:h-24 sm:w-24">
        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#F5F0E8"
            strokeWidth="5"
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#C8955A"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#0B0F19] sm:text-lg">
          {safeProgress}%
        </div>
      </div>
    </div>
  );
}