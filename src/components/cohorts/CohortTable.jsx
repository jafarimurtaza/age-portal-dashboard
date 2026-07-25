import React from "react";
import CohortRow from "./CohortRow";

const cohorts = [
  {
    name: "Web Development",
    description: "Frontend & Backend Development",
    date: "Jan 10 - Mar 25",
    graduates: 45,
    projects: 12,
    category: "Development",
    status: "Active",
  },
  {
    name: "Mobile App",
    description: "Flutter & React Native",
    date: "Feb 01 - Apr 18",
    graduates: 38,
    projects: 10,
    category: "Mobile",
    status: "Completed",
  },
  {
    name: "UI / UX Design",
    description: "Figma & Adobe XD",
    date: "Mar 12 - Jun 05",
    graduates: 30,
    projects: 8,
    category: "Design",
    status: "Active",
  },
  {
    name: "Data Science",
    description: "Python & Machine Learning",
    date: "Apr 02 - Jul 20",
    graduates: 50,
    projects: 15,
    category: "Data",
    status: "Pending",
  },
  {
    name: "Cloud Computing",
    description: "AWS & Azure",
    date: "May 15 - Aug 30",
    graduates: 28,
    projects: 7,
    category: "Cloud",
    status: "Archived",
  },
];

export default function CohortTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-[1000px] w-full border-collapse">

          <thead>
            <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">

              <th className="px-5 py-4">
                Cohort
              </th>

              <th className="px-5 py-4">
                Date Range
              </th>

              <th className="px-5 py-4">
                Graduates
              </th>

              <th className="px-5 py-4">
                Projects
              </th>

              <th className="px-5 py-4">
                Category
              </th>

              <th className="px-5 py-4">
                Status
              </th>

              <th className="px-5 py-4">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>
            {cohorts.map((cohort) => (
              <CohortRow
                key={cohort.name}
                cohort={cohort}
              />
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}