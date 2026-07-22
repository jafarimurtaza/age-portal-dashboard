export default function Pagination({ total, shown }) {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-slate-400">
      <p>Showing 1 to {shown} of {total} projects</p>
      <div className="flex gap-2">
        <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700">‹</button>
        <button className="w-8 h-8 rounded-lg bg-teal-500 text-white">1</button>
        <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700">2</button>
        <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700">3</button>
        <span className="px-1">...</span>
        <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700">32</button>
        <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700">›</button>
      </div>
    </div>
  );
}