import Select from "react-select";
import { selectStyles } from "./styles/selectStyles";
import { OptionType, SelectProps } from "./types";

export function SelectComponent<T>({
  options,
  placeholder,
  isSearchable = true,
  isClearable = true,
  onChange,
}: SelectProps<T>) {
  const handleChange = (selectedOption: OptionType<T> | null) => {
    onChange(selectedOption);
  };

  return (
    <Select<OptionType<T> | null>
      instanceId="select-box-id"
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      isClearable={isClearable}
      isSearchable={isSearchable}
    />
  );
}
