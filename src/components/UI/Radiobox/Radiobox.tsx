import { radioboxStyles as S } from "./styles/radioboxStyles";
import { ChangeEvent } from "react";

export interface RadioboxProps {
  label?: string;
  valueName: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}
export const Radiobox = ({
  label,
  valueName,
  isChecked,
  onChange,
}: RadioboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(valueName);
  };

  return (
    <>
      <S.RadioLabel>{label}</S.RadioLabel>
      <S.RadioWrapper>
        <S.Label>
          <S.Radio
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={isChecked}
          />
          {valueName}
          <S.RadioMask />
        </S.Label>
      </S.RadioWrapper>
    </>
  );
};
