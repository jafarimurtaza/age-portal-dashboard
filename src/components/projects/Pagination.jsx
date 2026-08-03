export default function Pagination({ total, shown }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 text-sm text-[#0B0F19]/50">
      <p>
        Showing 1–{shown} of {total} projects
      </p>
      <div className="flex items-center gap-1 font-[family-name:var(--font-fraunces)]">
        <button className="w-8 h-8 rounded-full hover:bg-white transition">
          ‹
        </button>
        <button className="w-8 h-8 rounded-full bg-[#0B0F19] text-[#C8955A]">
          1
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-white transition">
          2
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-white transition">
          3
        </button>
        <span className="px-1 text-xs">···</span>
        <button className="w-8 h-8 rounded-full hover:bg-white transition">
          32
        </button>
        <button className="w-8 h-8 rounded-full hover:bg-white transition">
          ›
        </button>
      </div>
    </div>
  );
}
