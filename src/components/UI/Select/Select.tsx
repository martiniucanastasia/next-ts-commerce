import Select from "react-select";
import { selectStyles } from "./styles/selectStyles";
import { OptionType, SelectProps } from "./types";

export const SelectComponent = ({
  options,
  placeholder,
  onChange,
}: SelectProps) => {
  const handleChange = (selectedOption: OptionType<string> | null) => {
    onChange(selectedOption);
  };

  return (
    <Select<OptionType<string> | null>
      instanceId="select-box-id"
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      isClearable={true}
    />
  );
};
