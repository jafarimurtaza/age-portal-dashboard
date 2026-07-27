export default function Avatar({ author }) {
  const photoUrl =`https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=random&color=fff&bold=true`;

  return (
    <div className="flex items-center gap-3">
      <img
        src={photoUrl}
        alt={author.name}
        className="w-9 h-9 rounded-full object-cover border border-slate-700"
      />
      <div>
        <p className="text-sm font-medium text-slate-100">{author.name}</p>
        <p className="text-xs text-slate-400">{author.role}</p>
      </div>
    </div>
  );
}