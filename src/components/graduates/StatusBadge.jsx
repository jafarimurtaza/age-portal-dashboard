export default function StatusBadge({ status }) {
  return (
    <span
      className="
        inline-flex
        shrink-0
        whitespace-nowrap
        items-center
        rounded-full
        bg-[#F5F0E8]
        px-3
        py-2
        text-xs
        font-medium
        text-[#1B3A6B]
        sm:text-sm
      "
    >
      {status}
    </span>
  );
}