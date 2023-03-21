export type OptionType<T> = { value: T; label: string };

export interface SelectProps<T> {
  options: OptionType<T>[];
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  onChange: (option: OptionType<T> | null) => void;
}
