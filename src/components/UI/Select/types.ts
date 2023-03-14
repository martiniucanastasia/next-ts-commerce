export type OptionType<T> = { value: T; label: string };

export interface SelectProps {
  options: OptionType<string>[];
  placeholder?: string;
  onChange: (option: OptionType<string> | null) => void;
}
