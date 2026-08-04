import { IoMdTrendingDown } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function StatCard({ label, value, trendValue, trendLabel }) {
  const isPositive = trendValue > 0;
  const isNegative = trendValue < 0;

  return (
    <div className="rounded bg-gray-200 p-4 sm:p-6 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-slate-900">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <p
        className={`mt-2 text-sm ${
          isPositive
            ? "text-green-600"
            : isNegative
              ? "text-red-600"
              : "text-slate-700"
        }`}
      >
        {isPositive && <FaArrowTrendUp className="inline-block mr-1" />}
        {isNegative && <IoMdTrendingDown className="inline-block mr-1" />}
        {trendValue !== null && trendValue > 0 && "+"}
        {trendValue !== null ? trendValue : ""} {trendLabel}
      </p>
    </div>
  );
}
