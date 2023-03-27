import { OptionType } from "../UI/Select/types";

export const languageOptions: OptionType<string>[] = [
  { value: "EN", label: "English, USA" },
  { value: "RU", label: "Russian, EUR" },
  { value: "DK", label: "Denmark, DKK" },
];
export const deliveryOptions: OptionType<string>[] = [
  { value: "UK", label: "Ship to UK" },
  { value: "EU", label: "Ship to EU" },
  { value: "USA", label: "Ship to USA" },
];
