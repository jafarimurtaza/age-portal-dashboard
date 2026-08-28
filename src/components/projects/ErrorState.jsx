export default function ErrorState({ message, onRetry }) {
  return (
    <div className="bg-white rounded-2xl border border-rose-200 p-10 flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="13" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-[#0B0F19]">
          Couldn’t load projects
        </p>
        <p className="text-xs text-[#0B0F19]/45 mt-1 max-w-xs">
          {message || "Something went wrong while fetching the project list."}
        </p>
      </div>
      <button
        onClick={onRetry}
        type="button"
        className="mt-1 text-sm font-medium bg-[#0B0F19] text-white px-5 py-2 rounded-xl hover:bg-[#1B3A6B] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
