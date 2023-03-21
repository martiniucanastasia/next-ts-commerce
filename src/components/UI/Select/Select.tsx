import Select from "react-select";
import { selectStyles } from "./styles/selectStyles";
import { OptionType, SelectProps } from "./types";

export function SelectComponent<T>({
  options,
  placeholder,
  className,
  classNamePrefix,
  isSearchable = true,
  onChange,
}: SelectProps<T>) {
  const handleChange = (selectedOption: OptionType<T> | null) => {
    onChange(selectedOption);
  };

  return (
    <Select<OptionType<T> | null>
      className={className}
      classNamePrefix={classNamePrefix}
      instanceId="select-box-id"
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      isClearable={false}
      isSearchable={isSearchable}
      menuPlacement="auto"
    />
  );
}
