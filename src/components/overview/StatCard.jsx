import { IoMdTrendingDown } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function StatCard({
  label,
  value,
  trendValue,
  trendLabel,
  icon: Icon,
  index = 0,
}) {
  const isPositive = trendValue > 0;
  const isNegative = trendValue < 0;

  const accentColor = index % 2 === 0 ? "#C8955A" : "#1B3A6B";
  const iconBg = index % 2 === 0 ? "bg-[#C8955A]" : "bg-[#1B3A6B]";

  const trendColor = isPositive
    ? "text-emerald-600"
    : isNegative
      ? "text-rose-500"
      : "text-[#0B0F19]/40";

  return (
    <div
      className="bg-white rounded-xl p-4 sm:p-5 border-t-4"
      style={{ borderTopColor: accentColor }}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div
            className={`w-11 h-11 shrink-0 flex items-center justify-center rounded-lg ${iconBg}`}
          >
            <Icon className="text-white text-lg" />
          </div>
        )}
        <p className="text-sm text-[#0B0F19]/60">{label}</p>
      </div>

      <p className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl text-[#0B0F19]">
        {value}
      </p>

      <p className={`mt-1 text-xs font-medium ${trendColor}`}>
        {isPositive && <FaArrowTrendUp className="inline-block mr-1" />}
        {isNegative && <IoMdTrendingDown className="inline-block mr-1" />}
        {trendValue !== null && trendValue > 0 && "+"}
        {trendValue !== null ? trendValue : ""} {trendLabel}
      </p>
    </div>
  );
}
