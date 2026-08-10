// components/graduates/GraduateTable.jsx

"use client";

import EmptyState from "./EmptyState";
import TableContainer from "./TableContainer";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import GraduateCard from "./GraduateCard";

export default function GraduateTable({
  graduates,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  if (graduates.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      {/* Desktop */}

      <div className="hidden lg:block">

        <TableContainer>

          <table className="min-w-full">

            <TableHeader />

            <TableBody
              graduates={graduates}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              onFavorite={onFavorite}
              onComment={onComment}
            />

          </table>

        </TableContainer>

      </div>

      {/* Mobile */}

      <div className="grid gap-5 lg:hidden">

        {graduates.map((graduate) => (

          <GraduateCard
            key={graduate.id}
            graduate={graduate}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
            onFavorite={onFavorite}
            onComment={onComment}
          />

        ))}

      </div>
    </>
  );
}