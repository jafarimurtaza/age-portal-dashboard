import ActivityItem from "./ActivityItem";
import { activities } from "@/data/overviewData";

export default function ActivityList() {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl h-full">
      <p className="font-[family-name:var(--font-fraunces)] text-lg text-[#0B0F19]">
        Recent Activity
      </p>
      <span className="block w-8 h-0.5 bg-[#C8955A] mt-1.5 mb-3" />
      <ul>
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} {...activity} index={index} />
        ))}
      </ul>
    </div>
  );
}
