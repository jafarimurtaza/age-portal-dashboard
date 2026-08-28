import StatCard from "./StatCard";
import { stats } from "@/data/overviewStatsData";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.id} {...stat} index={index} />
      ))}
    </div>
  );
}
