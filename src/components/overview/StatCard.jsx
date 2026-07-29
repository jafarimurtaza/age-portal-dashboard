import { IoMdTrendingDown } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function StatCard() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 shadow-lg shadow-slate-100">
      <div className="rounded bg-gray-200 p-4 sm:p-6 shadow-sm ">
        <p className="text-sm uppercase tracking-wide text-slate-900">
          Total Graduates
        </p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">14</p>
        <p className="mt-2 text-sm text-slate-700">
          <FaArrowTrendUp className="inline-block mr-1" />
          +2 this month
        </p>
      </div>

      <div className="rounded  bg-gray-200  p-4 sm:p-6 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-900">
          Active Cohorts
        </p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">1</p>
        <p className="mt-2 text-sm text-slate-700">3 total</p>
      </div>

      <div className="rounded  bg-gray-200  p-4 sm:p-6 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-900">
          Projects Shipped
        </p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">17</p>
        <p className="mt-2 text-sm text-slate-700">
          <FaArrowTrendUp className="inline-block mr-1" />
          +4 this month
        </p>
      </div>

      <div className="rounded  bg-gray-200  p-4 sm:p-6 shadow-sm">
        <p className="text-sm uppercase tracking-wide text-slate-900">
          Pending Applications
        </p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">6</p>
        <p className="mt-2 text-sm text-slate-700">
          <IoMdTrendingDown className="inline-block mr-1" />
          -1 this week
        </p>
      </div>
    </div>
  );
}
