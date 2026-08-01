export default function ProgressCircle({ progress }) {
  const radius = 28;
  const stroke = 6;

  const normalizedRadius = radius - stroke * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (progress >= 90) return "#22c55e";
    if (progress >= 70) return "#C8955A";
    if (progress >= 50) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={getColor()}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition:
              "stroke-dashoffset 0.7s ease-in-out",
          }}
        />
      </svg>

      <span className="absolute text-xs font-bold text-[#0B0F19]">
        {progress}%
      </span>
    </div>
  );
}