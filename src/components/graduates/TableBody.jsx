import GraduateRow from "./GraduateRow";

export default function TableBody({
  graduates,
  onEdit,
  onDelete,
}) {
  return (
    <tbody>
      {graduates.map((graduate) => (
        <GraduateRow
          key={graduate.id}
          graduate={graduate}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </tbody>
  );
}