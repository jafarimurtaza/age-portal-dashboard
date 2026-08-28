import {
  FaUserGraduate,
  FaLayerGroup,
  FaFolderOpen,
  FaClock,
} from "react-icons/fa6";

export const stats = [
  {
    id: 1,
    label: "Total Graduates",
    value: 14,
    trendValue: 2,
    trendLabel: "this month",
    icon: FaUserGraduate,
  },
  {
    id: 2,
    label: "Active Cohorts",
    value: 1,
    trendValue: null,
    trendLabel: "3 total",
    icon: FaLayerGroup,
  },
  {
    id: 3,
    label: "Projects Shipped",
    value: 17,
    trendValue: 4,
    trendLabel: "this month",
    icon: FaFolderOpen,
  },
  {
    id: 4,
    label: "Pending Applications",
    value: 6,
    trendValue: -1,
    trendLabel: "this week",
    icon: FaClock,
  },
];
