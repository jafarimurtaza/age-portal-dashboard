export default function RoleBadge({ role }) {
  return (
    <span
      className="
        block
        max-w-[180px]
        truncate
        text-right
        text-sm
        font-medium
        text-[#1B3A6B]

        md:max-w-full
        md:text-left
      "
      title={role}
    >
      {role}
    </span>
  );
}