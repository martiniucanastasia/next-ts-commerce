import Select from "react-select";
import { useId } from "react";
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
      instanceId={useId()}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={selectStyles}
      isClearable={true}
    />
  );
};
