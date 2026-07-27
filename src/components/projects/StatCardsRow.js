import StatCard from "./StatCard";

export default function StatCardsRow({ stats }) {
  return (
    <div className="flex gap-4 mb-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
