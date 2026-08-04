export default function ActivityItem({ initials, name, action, target, time }) {
  return (
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
      <span className="inline-flex items-center justify-center shrink-0 rounded-full bg-cyan-100 text-cyan-700 font-medium w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm">
        {initials}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-medium text-gray-900">{name}</span>
          <span className="mx-1 text-gray-600">{action}</span>
          <span className="font-semibold text-cyan-600 truncate">{target}</span>
        </p>
      </div>
      <time className="text-xs text-gray-500 sm:ml-4">{time}</time>
    </li>
  );
}
