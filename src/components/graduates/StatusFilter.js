export default function StatusFilter({
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div>
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition-all focus:border-green-600 focus:ring-2 focus:ring-green-200"
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Graduated">Graduated</option>
        <option value="Looking for Job">Looking for Job</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}