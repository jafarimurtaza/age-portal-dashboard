export default function PageHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Projects</h1>
        <p className="text-sm text-slate-400 mt-1">
          Manage all graduate projects, track progress and review submissions.
        </p>
      </div>
      <button className="bg-gradient-to-r from-teal-400 to-violet-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-sm flex items-center gap-2">
        + Add Project
      </button>
    </div>
  );
}
