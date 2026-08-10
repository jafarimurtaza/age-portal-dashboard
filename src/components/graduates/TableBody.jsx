// components/graduates/TableBody.jsx

"use client";

import GraduateRow from "./GraduateRow";

export default function TableBody({
  graduates,
  onView,
  onEdit,
  onDelete,
  onFavorite,
  onComment,
}) {
  return (
    <tbody>

      {graduates.map((graduate) => (

        <GraduateRow
          key={graduate.id}
          graduate={graduate}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onFavorite={onFavorite}
          onComment={onComment}
        />

      ))}

    </tbody>
  );
}