import { checkboxStyles as S } from "./styles/checkboxStyles";
import CheckboxArrowSvg from "@/assets/svg/icon/control/checkbox_arrow.svg";

export interface CheckboxProps {
  groupLabel?: string;
  value: string;
  isChecked: boolean;
  onChange: () => void;
}

export const Checkbox = ({
  groupLabel,
  value,
  isChecked,
  onChange,
}: CheckboxProps) => {
  return (
    <>
      {groupLabel && <S.CheckboxLabel>{groupLabel}</S.CheckboxLabel>}
      <S.CheckboxWrapper>
        <S.Label>
          <S.Checkbox
            type="checkbox"
            name={value}
            onChange={onChange}
            checked={isChecked}
          />
          {value}
          <S.CheckboxMask>
            <CheckboxArrowSvg />
          </S.CheckboxMask>
        </S.Label>
      </S.CheckboxWrapper>
    </>
  );
};
