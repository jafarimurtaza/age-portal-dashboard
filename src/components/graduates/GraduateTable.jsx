// components/graduates/GraduateTable.js
import GraduateCard from "./GraduateCard";
import GraduateRow from "./GraduateRow";

  export default function GraduateTable({
  graduates,
  onDelete,
  onEdit,
  onView,
  onFavorite,
  onComment,
}) {
  return (
    <>
  {/* Desktop Table */}
  <div className="hidden lg:block overflow-x-auto rounded-3xl bg-white shadow-xl">
    <table className="min-w-full">
      {/* Your existing table head */}

      <tbody>
        {graduates.map((graduate) => (
          <GraduateRow
            key={graduate.id}
            graduate={graduate}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
            onFavorite={onFavorite}
            onComment={onComment}
          />
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile Cards */}
  <div className="grid gap-5 lg:hidden">
    {graduates.map((graduate) => (
      <GraduateCard
        key={graduate.id}
        graduate={graduate}
        onDelete={onDelete}
        onEdit={onEdit}
        onView={onView}
        onFavorite={onFavorite}
        onComment={onComment}
      />
    ))}
  </div>
</>
  );
}