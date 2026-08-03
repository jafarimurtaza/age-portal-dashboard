const colorMap = {
  navy: { bg: "bg-[#1B3A6B]/10", ring: "bg-[#1B3A6B]", stroke: "#1B3A6B" },
  gold: { bg: "bg-[#C8955A]/10", ring: "bg-[#C8955A]", stroke: "#C8955A" },
  success: {
    bg: "bg-emerald-500/10",
    ring: "bg-emerald-500",
    stroke: "#22c55e",
  },
  warning: { bg: "bg-amber-500/10", ring: "bg-amber-500", stroke: "#f59e0b" },
  dark: { bg: "bg-[#0B0F19]/10", ring: "bg-[#0B0F19]", stroke: "#0B0F19" },
};

const icons = {
  folder: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  send: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  clock: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  archive: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  star: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="white"
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

function StarRow({ rating }) {
  const fullStars = Math.round(rating);
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i <= fullStars ? "#C8955A" : "none"}
          stroke="#C8955A"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function StatCard({ label, value, change, trend, icon, color }) {
  const c = colorMap[color] || colorMap.navy;
  const isRating = icon === "star";

  return (
    <div
      className={`rounded-2xl border border-[#0B0F19]/10 p-4 sm:p-5 flex-1 min-w-[140px] bg-white shadow-sm`}
    >
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${c.ring} mb-3 sm:mb-4`}
      >
        {icons[icon]}
      </div>
      <p className="text-xs sm:text-sm text-[#0B0F19]/60 mb-1">{label}</p>
      <p className="text-xl sm:text-2xl font-bold text-[#0B0F19] mb-1">
        {value}
      </p>
      {change && (
        <p
          className={`not-last-of-type:text-xs mb-2 sm:mb-3 ${trend === "up" ? "text-emerald-600" : "text-red-500"}`}
        >
          {trend === "up" ? "↑" : "↓"} {change} from last month
        </p>
      )}
      <svg
        width="100%"
        height="24"
        viewBox="0 0 100 28"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C10,12 20,25 30,18 C40,10 50,20 60,8 C70,15 80,5 90,12 C95,14 98,8 100,10"
          fill="none"
          stroke={c.stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {isRating && <StarRow rating={value} />}
    </div>
  );
}
