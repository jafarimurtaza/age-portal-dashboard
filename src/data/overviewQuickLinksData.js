import { GrUserManager } from "react-icons/gr";
import { TbChartCohort } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { GiSkills } from "react-icons/gi";

export const quickLinks = [
  {
    id: 1,
    icon: GrUserManager,
    label: "Manage Graduates",
    href: "/graduates",
  },
  {
    id: 2,
    icon: TbChartCohort,
    label: "Manage Cohorts",
    href: "/cohorts",
  },
  {
    id: 3,
    icon: GoProjectRoadmap,
    label: "Manage Projects",
    href: "/projects",
  },
  {
    id: 4,
    icon: GiSkills,
    label: "Manage Skills",
    href: "/skills",
  },
];
