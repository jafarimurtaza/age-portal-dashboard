export default function QuickLinkItem({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-2.5 hover:bg-white/5 transition-colors group"
    >
      <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-[#C8955A]">
        <Icon className="text-[#0B0F19] text-sm" />
      </span>
      <span className="flex-1 text-sm font-medium text-[#FAF7F2]">{label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#FAF7F2]/30 group-hover:text-[#C8955A] group-hover:translate-x-0.5 transition"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  );
}
