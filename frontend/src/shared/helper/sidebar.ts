import { CubeIcon, TrophyIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";

export const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    current: true,
    action: "DASHBOARD",
    activeMenu: "/dashboard",
  },
  {
    name: "Achivements",
    href: "/achivements",
    icon: TrophyIcon,
    current: false,
    action: "ACHIVEMENTS",
    activeMenu: "/achivements",
  },
  {
    name: "Achivement List",
    href: "/achivement-list",
    icon: CubeIcon,
    current: false,
    action: "GENERATE_ACHIVEMENT",
    activeMenu: "/achivement-list",
  },
  // {
  //   name: "ID Cards",
  //   href: "/id-cards",
  //   icon: CreditCardIcon,
  //   current: false,
  //   action: "ID_CARDS",
  //   activeMenu: "/id-cards",
  // },
];
