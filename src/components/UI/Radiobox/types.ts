export interface RadioboxProps {
    groupLabel?: string;
    label: string;
    value: string;
    isChecked: boolean;
    onChange: (value: string) => void;
  }