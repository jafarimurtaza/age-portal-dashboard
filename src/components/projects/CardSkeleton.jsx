export default function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-[#0B0F19]/8 bg-white overflow-hidden animate-pulse">
      <div className="h-40 bg-[#0B0F19]/5" />
      <div className="px-4 pb-4">
        <div className="w-14 h-14 -mt-2 mb-3 rounded-full bg-[#0B0F19]/8" />
        <div className="h-4 bg-[#0B0F19]/10 rounded w-3/4 mb-2" />
        <div className="h-3 bg-[#0B0F19]/6 rounded w-1/2 mb-3" />
        <div className="flex gap-1.5">
          <div className="h-5 w-14 bg-[#0B0F19]/8 rounded-lg" />
          <div className="h-5 w-14 bg-[#0B0F19]/6 rounded-lg" />
        </div>
        <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-[#0B0F19]/6">
          <div className="w-8 h-8 rounded-full bg-[#0B0F19]/8" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-[#0B0F19]/8 rounded w-2/3" />
            <div className="h-2.5 bg-[#0B0F19]/6 rounded w-1/2" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="space-y-1.5">
            <div className="h-3 bg-[#0B0F19]/8 rounded w-14" />
            <div className="h-2.5 bg-[#0B0F19]/6 rounded w-16" />
          </div>
          <div className="h-3 w-16 bg-[#0B0F19]/8 rounded" />
        </div>
      </div>
    </div>
  );
}
