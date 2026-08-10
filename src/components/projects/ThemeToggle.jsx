export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium border transition ${
        dark
          ? "border-[#C8955A]/40 text-[#C8955A] hover:bg-[#C8955A]/10"
          : "border-[#0B0F19]/15 text-[#0B0F19]/60 hover:bg-[#F5F0E8]"
      }`}
    >
      {dark ? "☀ Light" : "☾ Dark"}
    </button>
  );
}
