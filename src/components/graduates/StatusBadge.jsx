const statusStyles = {
  Active: {
    color: "bg-green-100 text-green-700",
    icon: "🟢",
  },

  Alumni: {
    color: "bg-blue-100 text-blue-700",
    icon: "🎓",
  },

  "Looking for Job": {
    color: "bg-yellow-100 text-yellow-700",
    icon: "💼",
  },

  Inactive: {
    color: "bg-red-100 text-red-700",
    icon: "🔴",
  },
};

export default function StatusBadge({ status }) {
  const current =
    statusStyles[status] || {
      color: "bg-gray-100 text-gray-700",
      icon: "⚪",
    };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${current.color}`}
    >
      <span>{current.icon}</span>

      {status}
    </span>
  );
}