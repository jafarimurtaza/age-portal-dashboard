const illustrations = {
  React: (color) => (
    <svg viewBox="0 0 300 140" className="w-full h-full">
      <g stroke={color} strokeWidth="1" opacity="0.6">
        <line x1="40" y1="100" x2="120" y2="50" />
        <line x1="120" y1="50" x2="200" y2="80" />
        <line x1="200" y1="80" x2="260" y2="40" />
        <line x1="120" y1="50" x2="90" y2="20" />
        <line x1="200" y1="80" x2="230" y2="110" />
      </g>
      {[
        [40, 100],
        [120, 50],
        [200, 80],
        [260, 40],
        [90, 20],
        [230, 110],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 2 === 0 ? 5 : 3.5}
          fill={color}
          opacity="0.85"
        />
      ))}
    </svg>
  ),
  "Next.js": (color) => (
    <svg viewBox="0 0 300 140" className="w-full h-full">
      <polyline
        points="30,110 90,70 150,90 210,40 270,55"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.7"
      />
      {[95, 60, 80, 35, 110].map((h, i) => (
        <rect
          key={i}
          x={30 + i * 55}
          y={140 - h}
          width="18"
          height={h}
          fill={color}
          opacity={0.25 + i * 0.12}
          rx="2"
        />
      ))}
    </svg>
  ),
  Python: (color) => (
    <svg viewBox="0 0 300 140" className="w-full h-full">
      {[30, 70, 110, 150, 190, 230, 270].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="20"
          x2="150"
          y2="70"
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
      {[30, 70, 110, 150, 190, 230, 270].map((x, i) => (
        <circle key={i} cx={x} cy="20" r="3" fill={color} opacity="0.8" />
      ))}
      <circle
        cx="150"
        cy="70"
        r="10"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
      {[30, 70, 110, 150, 190, 230, 270].map((x, i) => (
        <line
          key={i}
          x1="150"
          y1="70"
          x2={x}
          y2="120"
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
    </svg>
  ),
  Express: (color) => (
    <svg viewBox="0 0 300 140" className="w-full h-full">
      <circle
        cx="150"
        cy="50"
        r="16"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.9"
      />
      {[100, 130, 170, 200].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy="105"
          r="11"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          opacity="0.5"
        />
      ))}
      <path
        d="M150 66 C150 85, 150 90, 150 105"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  ),
};

export default function CardIllustration({ stack, color, large }) {
  const render = illustrations[stack?.[0]] || illustrations.React;
  return (
    <div className={`w-full ${large ? "h-40" : "h-28"}`}>{render(color)}</div>
  );
}
