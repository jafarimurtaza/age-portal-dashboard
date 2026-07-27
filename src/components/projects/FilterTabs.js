export default function FilterTabs() {
  const tabs = ["All", "Published", "In Review", "Draft", "Archived"];
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap ${
            i === 0
              ? "bg-teal-500 text-white"
              : "bg-slate-800 text-slate-400 hover:bg-slate-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
