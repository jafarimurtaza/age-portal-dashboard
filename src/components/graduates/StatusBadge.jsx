// components/graduates/StatusBadge.jsx

"use client";

export default function StatusBadge({
  status,
}) {
  const styles = {
    Active: {
      background: "#F5F0E8",
      color: "#1B3A6B",
    },

    Alumni: {
      background: "#F5F0E8",
      color: "#C8955A",
    },

    Inactive: {
      background: "#F5F0E8",
      color: "#0B0F19",
    },
  };

  const style =
    styles[status] || styles.Active;

  return (
    <span
      className="rounded-full px-4 py-2 text-sm font-semibold"
      style={{
        background: style.background,
        color: style.color,
      }}
    >
      {status}
    </span>
  );
}