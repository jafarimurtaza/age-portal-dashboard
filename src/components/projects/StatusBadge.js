export default function StatusBadge({ status }) {
  const styles = {
    Published: {
      dot: "bg-emerald-400",
      text: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    "In Review": {
      dot: "bg-orange-400",
      text: "text-orange-400",
      bg: "bg-orange-400/10",
    },
    Draft: {
      dot: "bg-yellow-400",
      text: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    Archived: {
      dot: "bg-gray-400",
      text: "text-gray-400",
      bg: "bg-gray-400/10",
    },
  };
  const style = styles[status] || styles.Draft;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>
      {status}
    </span>
  );
}
