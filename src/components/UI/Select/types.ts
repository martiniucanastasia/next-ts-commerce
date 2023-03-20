import { MenuPosition } from "react-select";

export type OptionType<T> = { value: T; label: string };

export interface SelectProps<T> {
  options: OptionType<T>[];
  placeholder?: string;
  className?: string;
  classNamePrefix?: string;
  onChange: (option: OptionType<T> | null) => void;
}
