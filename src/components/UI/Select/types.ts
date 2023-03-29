export interface Option {
  label: string;
  value: string | number;
  icon?: any;
}

export interface GroupOption {
  label: string;
  value: Option[];
  icon?: any;
}

export type OptionType = Option | GroupOption;
