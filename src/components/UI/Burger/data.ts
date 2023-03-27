import HomeSvg from "../../../assets/svg/icon/control/home.svg";
import ListSvg from "../../../assets/svg/icon/control/list.svg";
import FavoritesSvg from "../../../assets/svg/icon/control/favorite_border.svg";
import MyOrdersSvg from "../../../assets/svg/icon/general/inventory_2.svg";

import ContactSvg from "../../../assets/svg/icon/general/headset_mic.svg";
import AboutSvg from "../../../assets/svg/icon/general/business.svg";

export const linksOptions: {
  value: string;
  label: string;
  icon: any;
}[] = [
  { value: "Home", label: "Home", icon: HomeSvg },
  { value: "Categories", label: "Categories", icon: ListSvg },
  { value: "Favorites", label: "Favorites", icon: FavoritesSvg },
  { value: "My Orders", label: "My Orders", icon: MyOrdersSvg },
];

export const additionalOptions: { value: string; label: string; icon: any }[] =
  [
    { value: "Contact Us", label: "Contact Us", icon: ContactSvg },
    { value: "About", label: "About", icon: AboutSvg },
  ];

export const infoOptions: { value: string; label: string }[] = [
  { value: "User agreement", label: "User agreement" },
  { value: "Partnership", label: "Partnership" },
  { value: "Privacy policy", label: "Privacy policy" },
];
