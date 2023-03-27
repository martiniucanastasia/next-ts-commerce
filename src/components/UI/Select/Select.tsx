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
  ...props
}: SelectProps<T>) {
  const handleChange = (selectedOption: OptionType<T> | null) => {
    onChange(selectedOption);
  };

  return (
    <Select<OptionType<T> | null>
      instanceId="select-box-id"
      menuPlacement="auto"
      onChange={handleChange}
      options={options}
      className={className}
      classNamePrefix={classNamePrefix}
      placeholder={placeholder}
      styles={selectStyles}
      isClearable={false}
      isSearchable={isSearchable}
      {...props}
    />
  );
}
