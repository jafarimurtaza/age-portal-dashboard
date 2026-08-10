// components/graduates/ProgressCircle.jsx

"use client";

export default function ProgressCircle({
  value = 0,
  title = "",
}) {
  const radius = 42;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const offset =
    circumference -
    (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">

      <div className="relative h-28 w-28">

        <svg
          className="-rotate-90"
          width="112"
          height="112"
        >
          <circle
            cx="56"
            cy="56"
            r={normalizedRadius}
            stroke="#F5F0E8"
            strokeWidth={stroke}
            fill="transparent"
          />

          <circle
            cx="56"
            cy="56"
            r={normalizedRadius}
            stroke="#C8955A"
            strokeWidth={stroke}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition:
                "stroke-dashoffset .7s ease",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-2xl font-bold text-[#0B0F19]">
            {value}%
          </span>

        </div>

      </div>

      {title && (
        <p className="mt-3 text-center text-sm font-medium text-[#1B3A6B]">
          {title}
        </p>
      )}

    </div>
  );
}