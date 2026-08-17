export default function TableRowSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-[#0B0F19]/6 animate-pulse">
      <div className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex items-center gap-4 lg:w-[30%] min-w-0">
          <div className="w-11 h-11 rounded-xl bg-[#0B0F19]/8 shrink-0" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 bg-[#0B0F19]/8 rounded w-3/4" />
            <div className="h-3 bg-[#0B0F19]/6 rounded w-1/2" />
            <div className="flex gap-1.5 mt-2">
              <div className="h-4 w-14 bg-[#0B0F19]/8 rounded-full" />
              <div className="h-4 w-14 bg-[#0B0F19]/6 rounded-full" />
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px self-stretch bg-[#0B0F19]/6" />

        <div className="flex items-center gap-3 lg:w-[26%]">
          <div className="w-11 h-11 rounded-full bg-[#0B0F19]/8 shrink-0" />
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-4 bg-[#0B0F19]/8 rounded w-2/3" />
            <div className="h-3 bg-[#0B0F19]/6 rounded w-1/2" />
          </div>
        </div>

        <div className="hidden lg:block w-px self-stretch bg-[#0B0F19]/6" />

        <div className="lg:w-[16%] space-y-2">
          <div className="h-3.5 bg-[#0B0F19]/8 rounded w-16" />
          <div className="h-3 bg-[#0B0F19]/6 rounded w-20" />
        </div>

        <div className="flex items-center justify-between lg:w-[16%] lg:justify-end gap-3 lg:ml-auto">
          <div className="h-5 w-16 bg-[#0B0F19]/8 rounded-full" />
          <div className="w-8 h-8 bg-[#0B0F19]/6 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
