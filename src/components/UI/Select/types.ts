export type OptionType<T> = { value: T; label: string };

export interface SelectProps<T> {
  options: OptionType<T>[];
  placeholder?: string;
  onChange: (option: OptionType<T> | null) => void;
}
