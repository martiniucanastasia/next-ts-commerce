import { OptionType } from "../UI/Select/types";

import MenuSvg from "@/assets/svg/icon/control/menu.svg";

export const navBarOptions: OptionType<string>[] = [
  { value: "All Categories", label: "All Categories", icon: MenuSvg },
  { value: "Hot offers", label: "Hot offers" },
  { value: "Gift boxes", label: "Gift boxes" },
  { value: "Projects", label: "Projects" },
  { value: "Menu item", label: "Menu item" },
];

export const helpOptions: OptionType<string>[] = [
  { value: "Refund", label: "Refund" },
  { value: "Support", label: "Support" },
  { value: "Clients", label: "Clients" },
];
