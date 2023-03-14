import {
  checkboxStyles as S,
  checkboxStylesMask as M,
} from "./styles/checkboxStyles";
import CheckboxArrowSvg from "@/assets/svg/icon/control/checkbox_arrow.svg";
import { Dispatch, SetStateAction, useState } from "react";

export interface CheckboxProps {
  value: {
    id: number;
    name: string;
  };
  isChecked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export const Checkbox = ({ value, isChecked, onChange }: CheckboxProps) => {
  const [array, setArray] = useState();

  const handleChange = (e) => {
    setArray(e.target.checked);
  };

  return (
    <S.Label htmlFor={value.name}>
      <S.Input
        id={value.id.toString()}
        type="checkbox"
        name={value.name}
        value={value.name}
        onChange={handleChange}
        checked={isChecked}
      />
      {value.name}
      <M.CheckboxMask isChecked={isChecked}>
        <CheckboxArrowSvg />
      </M.CheckboxMask>
    </S.Label>
  );
};
