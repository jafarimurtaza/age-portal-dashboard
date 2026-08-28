import ProgressCard from "./ProgressCard";

export default function StatisticsCards({
  total = 0,
  active = 0,
  alumni = 0,
  averageProgress = 0,
}) {
  const safeTotal = Number(total) || 0;
  const safeActive = Number(active) || 0;
  const safeAlumni = Number(alumni) || 0;
  const safeAverageProgress = Math.min(
    Math.max(Number(averageProgress) || 0, 0),
    100
  );

  const attendedProgress =
    safeTotal > 0
      ? Math.round((safeActive / safeTotal) * 100)
      : 0;

  const absentProgress =
    safeTotal > 0
      ? Math.round((safeAlumni / safeTotal) * 100)
      : 0;

  return (
    <section className="mt-10 w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProgressCard
          type="attended"
          title="Class Attended"
          value={safeActive}
          total={safeTotal}
          progress={attendedProgress}
        />

        <ProgressCard
          type="completed"
          title="Course Completed"
          value={safeAverageProgress}
          total={100}
          progress={safeAverageProgress}
        />

        <ProgressCard
          type="absent"
          title="Absent"
          value={safeAlumni}
          total={safeTotal}
          progress={absentProgress}
        />

        <ProgressCard
          type="quiz"
          title="Quiz Practised"
          value={safeAverageProgress}
          total={100}
          progress={safeAverageProgress}
        />
      </div>
    </section>
  );
}