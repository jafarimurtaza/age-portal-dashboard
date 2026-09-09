"use client";

import ProgressCard from "./ProgressCard";

export default function StatisticsCards({
  total,
  active,
  alumni,
  averageProgress,
}) {
  const classAttended = total > 0 ? active : 0;

  return (
    <section
      className="
        mt-10
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      <div className="overflow-hidden rounded-2xl">
        <ProgressCard
          type="attended"
          title="Class Attended"
          value={classAttended}
          total={total}
          progress={
            total > 0
              ? Math.round((classAttended / total) * 100)
              : 0
          }
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <ProgressCard
          type="completed"
          title="Course Completed"
          value={averageProgress}
          total={100}
          progress={averageProgress}
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <ProgressCard
          type="absent"
          title="Absent"
          value={0}
          total={total}
          progress={0}
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <ProgressCard
          type="quiz"
          title="Quiz Practised"
          value={averageProgress}
          total={100}
          progress={averageProgress}
        />
      </div>
    </section>
  );
}