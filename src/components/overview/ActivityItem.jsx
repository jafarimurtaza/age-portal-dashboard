export default function ActivityItem() {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <span className="inline-flex items-center justify-center shrink-0 rounded-full bg-indigo-100 text-indigo-700 font-medium w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm">
            SA
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-medium text-gray-900">Sana Ahmadi</span>
              <span className="mx-1 text-gray-600">
                submitted a new project
              </span>
              <span className="font-semibold text-indigo-600 truncate">
                Skills Graph Visualizer
              </span>
            </p>
          </div>
          <time className="text-xs text-gray-500 sm:ml-4">2 hours ago</time>
        </li>

        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <span className="inline-flex items-center justify-center shrink-0 rounded-full bg-indigo-100 text-indigo-700 font-medium w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm">
            AD
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-medium text-gray-900">Admin</span>
              <span className="mx-1 text-gray-600">
                marked cohort as completed
              </span>
              <span className="font-semibold text-indigo-600 truncate">
                Cohort 2
              </span>
            </p>
          </div>
          <time className="text-xs text-gray-500 sm:ml-4">1 day ago</time>
        </li>

        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <span className="inline-flex items-center justify-center shrink-0 rounded-full bg-indigo-100 text-indigo-700 font-medium w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm">
            OR
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-medium text-gray-900">Omid Rahimi</span>
              <span className="mx-1 text-gray-600">
                updated graduate profile
              </span>
              <span className="font-semibold text-indigo-600 truncate">
                Omid Rahimi
              </span>
            </p>
          </div>
          <time className="text-xs text-gray-500 sm:ml-4">2 days ago</time>
        </li>

        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <span className="inline-flex items-center justify-center shrink-0 rounded-full bg-indigo-100 text-indigo-700 font-medium w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm">
            AD
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-medium text-gray-900">Admin</span>
              <span className="mx-1 text-gray-600">approved application</span>
              <span className="font-semibold text-indigo-600 truncate">
                Freshta Noori
              </span>
            </p>
          </div>
          <time className="text-xs text-gray-500 sm:ml-4">3 days ago</time>
        </li>
      </ul>
    </div>
  );
}
