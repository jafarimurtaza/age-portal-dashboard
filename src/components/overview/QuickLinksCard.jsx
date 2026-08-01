import QuickLinkItem from "./QuickLinkItem";
export default function QuickLinksCard() {
  return (
    <div className="rounded bg-white p-2 sm:p-2 shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Quick Links</p>
      <QuickLinkItem />
    </div>
  );
}
