import { Dispatch, SetStateAction } from "react";

export interface SwitchProps {
    label: string;
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
  }