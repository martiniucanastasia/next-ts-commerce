import { OptionType } from "../UI/Select/types";

import DenmarkFlagSvg from "@/assets/svg/icon/general/dk_flag.svg";
import USAFlagSvg from "@/assets/svg/icon/general/usa_flag.svg";
import FranceFlagSvg from "@/assets/svg/icon/general/france_flag.svg";

import ProfileSvg from "../../assets/svg/icon/control/person.svg";
import MessageSvg from "../../assets/svg/icon/general/chat.svg";
import OrdersSvg from "../../assets/svg/icon/control/favorite_border.svg";
import MyCartSvg from "../../assets/svg/icon/general/shopping_cart.svg";

export const languageOptions: OptionType<string>[] = [
  { value: "EN", label: "English, USA" },
  { value: "FR", label: "France, FR" },
  { value: "DK", label: "Denmark, DKK" },
];
export const deliveryOptions: { value: string; label: string; icon: any }[] = [
  { value: "DK", label: "Ship to DK", icon: DenmarkFlagSvg },
  { value: "FR", label: "Ship to FR", icon: FranceFlagSvg },
  { value: "USA", label: "Ship to USA", icon: USAFlagSvg },
];

export const linksOptions: {
  value: string;
  label: string;
  icon: any;
}[] = [
  { value: "Profile", label: "Profile", icon: ProfileSvg },
  { value: "Message", label: "Message", icon: MessageSvg },
  { value: "Orders", label: "Orders", icon: OrdersSvg },
  { value: "My Cart", label: "My Cart", icon: MyCartSvg },
];

export const navBarOptions: OptionType<string>[] = [
  { value: "All Categories", label: "All Categories" },
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
