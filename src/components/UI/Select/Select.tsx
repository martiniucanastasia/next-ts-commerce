import { FunctionComponent } from "react";
import Select, { Props as SelectProps, StylesConfig } from "react-select";
import { selectStyles } from "./styles/selectStyles";
import { OptionType } from "./types";

interface Props extends SelectProps<OptionType> {}

export const SelectComponent: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <Select
      instanceId="select-box-id"
      menuPlacement="auto"
      isClearable={false}
      styles={selectStyles as StylesConfig<OptionType>}
      {...props}
    />
  );
};
