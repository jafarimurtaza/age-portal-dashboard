export default function Pagination({
  total,
  shown,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 text-sm text-[#0B0F19]/50">
      <p>
        Showing {shown} of {total} projects
      </p>
      <div className="flex items-center gap-1.5 flex-wrap justify-center font-[family-name:var(--font-fraunces)]">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-9 h-9 rounded-full hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed text-2xl font-bold text-[#0B0F19] flex items-center justify-center"
        >
          ‹
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition ${
              currentPage === page
                ? "bg-[#0B0F19] text-[#C8955A]"
                : "hover:bg-white text-[#0B0F19]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-9 h-9 rounded-full hover:bg-white transition disabled:opacity-40 disabled:cursor-not-allowed text-2xl font-bold text-[#0B0F19] flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}
