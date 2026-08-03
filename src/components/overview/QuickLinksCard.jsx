import QuickLinkItem from "./QuickLinkItem";
import { quickLinks } from "@/data/overviewQuickLinksData";

export default function QuickLinksList() {
  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-white shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Quick Links</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickLinks.map((link) => (
          <QuickLinkItem key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
}
