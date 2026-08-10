export default function PageHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#0B0F19]">
          Projects
        </h1>
        <p className="text-sm text-[#0B0F19]/60 mt-1">
          Manage all graduate projects, track progress and review submissions.
        </p>
      </div>
      <button
        onClick={onAddClick}
        className="bg-[#1B3A6B] hover:bg-[#234a87] text-white transition text-sm font-semibold px-6 py-3 rounded-full shrink-0 shadow-lg shadow-[#1B3A6B]/30 border border-[#C8955A]/30"
      >
        + Add Project
      </button>
    </div>
  );
}
