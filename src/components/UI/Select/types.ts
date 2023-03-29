import { GroupBase, Props } from "react-select";

export type OptionType<T> = { value: T; label: string; icon?: any };

export type SelectProps<
  T,
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & {
  
  options: OptionType<T>[];
  placeholder?: string;
  className?: string;
  classNamePrefix?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  onChange: (option: OptionType<T> | null) => void;
};
