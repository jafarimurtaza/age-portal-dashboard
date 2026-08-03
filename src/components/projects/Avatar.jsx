export default function Avatar({ author }) {
  const photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(author.name)}&background=1B3A6B&color=FAF7F2&bold=true`;

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <img
        src={photoUrl}
        alt={author.name}
        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#C8955A]/40 shrink-0"
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#0B0F19] truncate">
          {author.name}
        </p>
        <p className="text-xs text-[#0B0F19]/45 truncate">{author.role}</p>
      </div>
    </div>
  );
}
