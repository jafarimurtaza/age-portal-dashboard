const palettes = [
  "linear-gradient(135deg,#1B3A6B,#2c5296)",
  "linear-gradient(135deg,#C8955A,#e0b183)",
  "linear-gradient(135deg,#0B0F19,#232c42)",
];

const icons = {
  React: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="2.2" fill="white" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </svg>
  ),
  Python: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 11.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
    </svg>
  ),
  Express: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        transform="translate(2)"
      />
      <circle cx="9" cy="7" r="4" />
    </svg>
  ),
};

const defaultIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 4h16v4H4z" opacity="0.5" />
    <path d="M4 12h10" />
    <path d="M4 16h16" />
  </svg>
);

export default function ProjectIcon({ index = 0, stack = [] }) {
  const bg = palettes[index % palettes.length];
  const icon = icons[stack[0]] || defaultIcon;

  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md ring-2 ring-white"
      style={{ backgroundImage: bg }}
    >
      {icon}
    </div>
  );
}
