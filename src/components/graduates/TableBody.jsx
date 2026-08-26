import GraduateRow from "./GraduateRow";

export default function TableBody({
  graduates,
  onEdit,
  onDelete,
}) {
  if (!graduates.length) {
    return (
      <tbody>
        <tr>
          <td
            colSpan="6"
            className="px-6 py-12 text-center text-[#1B3A6B]"
          >
            No graduates found.
          </td>
        </tr>
      </tbody>
    );
  }

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