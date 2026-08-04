export default function QuickLinkItem({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-slate-50"
    >
      <Icon className="text-2xl text-cyan-600" />
      <span className="text-base font-medium text-slate-900">{label}</span>
    </a>
  );
}
