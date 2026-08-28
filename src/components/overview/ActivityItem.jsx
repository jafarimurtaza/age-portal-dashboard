export default function ActivityItem({
  icon: Icon,
  name,
  action,
  target,
  time,
  index = 0,
}) {
  const badgeBg = index % 2 === 0 ? "bg-[#1B3A6B]" : "bg-[#C8955A]";

  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-3 border-b border-[#0B0F19]/6 last:border-b-0">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {Icon && (
          <span
            className={`inline-flex items-center justify-center shrink-0 rounded-full ${badgeBg} w-8 h-8`}
          >
            <Icon className="text-white text-sm" />
          </span>
        )}
        <p className="flex-1 min-w-0 text-sm text-[#0B0F19]/70">
          <span className="font-semibold text-[#8a6539]">{name}</span>
          <span className="mx-1">{action}</span>
          <span className="font-semibold text-[#8a6539]">{target}</span>
        </p>
      </div>
      <time className="text-xs text-[#0B0F19]/35 whitespace-nowrap shrink-0 pl-11 sm:pl-0">
        {time}
      </time>
    </li>
  );
}
