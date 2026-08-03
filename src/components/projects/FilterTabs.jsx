export default function FilterTabs({ activeTab, setActiveTab }) {
  const tabs = ["All", "Published", "In Review", "Draft", "Archived"];
  return (
    <div className="flex gap-5 sm:gap-7 mb-5 overflow-x-auto border-b border-[#1B3A6B]/8 px-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative pb-3 text-sm whitespace-nowrap transition ${
            activeTab === tab
              ? "text-[#0B0F19] font-semibold"
              : "text-[#0B0F19]/40 hover:text-[#0B0F19]/70"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 right-0 -bottom-px h-[3px] bg-[#1B3A6B] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}