// components/graduates/StatisticsCards.jsx

"use client";

import ProgressCircle from "./ProgressCircle";

export default function StatisticsCards({
  total,
  active,
  alumni,
  averageProgress,
}) {
  const cards = [
    {
      title: "Graduates",
      number: total,
      progress: 100,
    },

    {
      title: "Active",
      number: active,
      progress:
        total === 0
          ? 0
          : Math.round(
              (active / total) * 100
            ),
    },

    {
      title: "Alumni",
      number: alumni,
      progress:
        total === 0
          ? 0
          : Math.round(
              (alumni / total) * 100
            ),
    },

    {
      title: "Average Progress",
      number: `${averageProgress}%`,
      progress: averageProgress,
    },
  ];

  return (
    <div className="mb-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-3xl bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >

          <div className="flex justify-center">

            <ProgressCircle
              value={card.progress}
            />

          </div>

          <div className="mt-5 text-center">

            <h3 className="text-lg font-semibold text-[#0B0F19]">

              {card.title}

            </h3>

            <p className="mt-2 text-4xl font-bold text-[#1B3A6B]">

              {card.number}

            </p>

          </div>

        </div>

      ))}

    </div>
  );
}