export default function StatusBadge({ status }) {
  const statusStyles = {
    Active: "bg-green-100 text-green-700",
    Graduated: "bg-blue-100 text-blue-700",
    "Looking for Job": "bg-yellow-100 text-yellow-700",
    Inactive: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}