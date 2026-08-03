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
      <button className="bg-[#C8955A] hover:bg-[#b3814c] text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm w-full sm:w-auto">
        + Add Project
      </button>
    </div>
  );
}
