import {
  FaGaugeHigh,
  FaUserGraduate,
  FaLayerGroup,
  FaFolderOpen,
  FaWandMagicSparkles,
  FaGear,
} from "react-icons/fa6";

export const navGroups = [
  {
    label: "Main",
    items: [
      { label: "Overview", href: "/overview", icon: FaGaugeHigh },
      { label: "Graduates", href: "/graduates", icon: FaUserGraduate },
      { label: "Cohorts", href: "/cohorts", icon: FaLayerGroup },
    ],
  },
  {
    label: "Content",
    items: [
      { label: "Projects", href: "/projects", icon: FaFolderOpen },
      { label: "Skills", href: "/skills", icon: FaWandMagicSparkles },
    ],
  },
  {
    label: "System",
    items: [{ label: "Settings", href: "/settings", icon: FaGear }],
  },
];
