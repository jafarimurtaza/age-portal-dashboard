export default function StatusBadge({ status }) {
  const styles = {
    Published: { dot: "bg-emerald-400", text: "text-emerald-300" },
    "In Review": { dot: "bg-[#e0b183]", text: "text-[#e0b183]" },
    Draft: { dot: "bg-amber-400", text: "text-amber-300" },
    Archived: { dot: "bg-[#FAF7F2]/40", text: "text-[#FAF7F2]/50" },
  };
  const s = styles[status] || styles.Draft;

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`}></span>
      <span className={`text-xs font-medium ${s.text}`}>{status}</span>
    </span>
  );
}
