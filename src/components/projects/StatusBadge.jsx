export default function StatusBadge({ status }) {
  const styles = {
    Published: { dot: "bg-emerald-500", text: "text-emerald-600" },
    "In Review": { dot: "bg-[#C8955A]", text: "text-[#b3814c]" },
    Draft: { dot: "bg-amber-500", text: "text-amber-600" },
    Archived: { dot: "bg-[#0B0F19]/30", text: "text-[#0B0F19]/45" },
  };
  const s = styles[status] || styles.Draft;

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`}></span>
      <span className={`text-xs font-medium ${s.text}`}>{status}</span>
    </span>
  );
}
