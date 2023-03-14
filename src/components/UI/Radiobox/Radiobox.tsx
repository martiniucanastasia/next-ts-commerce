import { radioboxStyles as S } from "./styles/radioboxStyles";
import { ChangeEvent } from "react";

export interface RadioboxProps {
  groupLabel?: string;
  label: string;
  value: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}
export const Radiobox = ({
  groupLabel,
  label,
  value,
  isChecked,
  onChange,
}: RadioboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };

  return (
    <>
      {groupLabel && <S.GroupLabel>{groupLabel}</S.GroupLabel>}
      <S.RadioWrapper>
        <S.Label>
          <S.Radio
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={isChecked}
          />
          {label}
          <S.RadioMask />
        </S.Label>
      </S.RadioWrapper>
    </>
  );
};
