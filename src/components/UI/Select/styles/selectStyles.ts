import { StylesConfig } from "react-select";
import { OptionType } from "../types";

export const selectStyles: StylesConfig<OptionType> = {
  control: (base, state) => {
    return {
      ...base,
      borderColor: state.isFocused ? "var(--primary)" : "var(--gray-300)",
      borderRadius: 6,
      borderWidth: 1,
      minHeight: 40,
      boxShadow: "none",
      fontSize: "var(--text-s)",
      fontWeight: "400",
      cursor: "pointer",
    };
  },
  
  placeholder: (provided) => ({
    ...provided,
    color: "var(--gray-700)",
  }),

  menu: (base) => ({
    ...base,
    width: "auto",
    borderRadius: 6,
    marginTop: 0,
    color: "var(--gray-700)",
    fontSize: "var(--text-s)",
  }),

  menuList: (base) => ({
    ...base,
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 5,
    color: "var(--gray-500)",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  input: (provided) => ({
    ...provided,

    "&:focus": {
      outline: "none",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    paddingRight: 0,
  }),

  option: (styles, { isSelected, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "var(--primary-100)" : undefined,
      color: isSelected ? "var(--gray-700)" : undefined,
      cursor: "pointer",
      "&:hover": {
        transition: "all .2s ease",
      },
    };
  },

  noOptionsMessage: (provided) => ({
    ...provided,
    color: "var(--primary)",
  }),
};
