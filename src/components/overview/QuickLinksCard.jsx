import QuickLinkItem from "./QuickLinkItem";
import { quickLinks } from "@/data/overviewQuickLinksData";

export default function QuickLinksList() {
  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-[#1B3A6B] to-[#0B0F19] rounded-xl h-full flex flex-col">
      <p className="font-[family-name:var(--font-fraunces)] text-lg text-[#FAF7F2]">
        Quick Links
      </p>
      <span className="block w-8 h-0.5 bg-[#C8955A] mt-1.5 mb-3" />
      <div className="flex flex-col gap-1">
        {quickLinks.map((link) => (
          <QuickLinkItem key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
}
