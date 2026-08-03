import ActivityItem from "./ActivityItem";
import { activities } from "@/data/overviewData";

export default function ActivityList() {
  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-white shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Recent Activity</p>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </ul>
    </div>
  );
}
