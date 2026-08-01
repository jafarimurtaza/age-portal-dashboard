import { GrUserManager } from "react-icons/gr";
import { TbChartCohort } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
export default function QuickLinkItem() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="flex flex-col gap-3">
        <a className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-50">
          <GrUserManager className="text-2xl text-indigo-600" />
          <span className="text-base font-medium text-slate-900">
            Manage Graduates
          </span>
        </a>

        <a className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-50">
          <TbChartCohort className="text-2xl text-indigo-600" />
          <span className="text-base font-medium text-slate-900">
            Manage Cohorts
          </span>
        </a>

        <a className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-50">
          <GoProjectRoadmap className="text-2xl text-indigo-600" />
          <span className="text-base font-medium text-slate-900">
            Manage Projects
          </span>
        </a>

        <a className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-50">
          <GiSkills className="text-2xl text-indigo-600" />
          <span className="text-base font-medium text-slate-900">
            Manage Skills
          </span>
        </a>
      </div>
    </div>
  );
}
