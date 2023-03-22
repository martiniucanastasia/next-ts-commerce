import DenmarkFlagSvg from "@/assets/svg/icon/general/dk_flag.svg";
import USAFlagSvg from "@/assets/svg/icon/general/usa_flag.svg";
import RussiaFlagSvg from "@/assets/svg/icon/general/ru-flag.svg";

export const footerLanguage: { value: string; label: string; icon: any }[] = [
  {
    value: "English",
    label: "English",
    icon: USAFlagSvg,
  },
  {
    value: "Russian",
    label: "Russian",
    icon: RussiaFlagSvg,
  },
  {
    value: "Danish",
    label: "Danish",
    icon: DenmarkFlagSvg,
  },
];

export const footerList: { name: string; links: string[] }[] = [
  {
    name: "About",
    links: ["About Us", "Find Store", "Categories", "Blogs"],
  },
  {
    name: "Partnership",
    links: ["About Us", "Find Store", "Categories", "Blogs"],
  },
  {
    name: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact Us"],
  },
  {
    name: "For Users",
    links: ["Login", "Register", "Settings", "My Orders"],
  },
];
