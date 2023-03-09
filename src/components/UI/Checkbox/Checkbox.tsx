import {
  checkboxStyles as S,
  checkboxStylesMask as M,
} from "./styles/checkboxStyles";
import CheckboxArrowSvg from "@/assets/svg/icon/control/checkbox_arrow.svg";

export interface CheckboxProps {
  label?: string;
  value: string;
  isChecked: boolean;
  onChange: () => void;
}

export const Checkbox = ({
  label,
  value,
  isChecked,
  onChange,
}: CheckboxProps) => {
  return (
    <>
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
      <S.CheckboxWrapper>
        <S.Label>
          <S.Input
            type="checkbox"
            name={value}
            onChange={onChange}
            checked={isChecked}
          />
          {value}
          <M.CheckboxMask isChecked={isChecked}>
            <CheckboxArrowSvg />
          </M.CheckboxMask>
        </S.Label>
      </S.CheckboxWrapper>
    </>
  );
};
