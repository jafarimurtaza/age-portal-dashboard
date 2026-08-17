export default function FilterTabs({ activeTab, setActiveTab }) {
  const tabs = ["All", "Published", "In Review", "Draft", "Archived"];
  return (
    <div className="flex gap-5 sm:gap-7 mb-5 overflow-x-auto border-b px-1 border-[#0B0F19]/8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative pb-3 text-sm whitespace-nowrap transition ${
            activeTab === tab
              ? "text-[#C8955A] font-semibold"
              : "text-[#0B0F19] hover:text-[#0B0F19]"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 right-0 -bottom-px h-[3px] rounded-full bg-[#C8955A]" />
          )}
        </button>
      ))}
    </div>
  );
}
