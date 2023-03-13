import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SwitchButton, Switch as S } from "./styles/switchStyles";

interface SwitchProps {
  label: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export const Switch = ({ label, isChecked, setIsChecked }: SwitchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
  };

  return (
    <S.Label>
      <S.SwitchWrapper>
        <S.Input type="checkbox" checked={isChecked} onChange={handleChange} />
        <SwitchButton />
      </S.SwitchWrapper>
        <S.SwitchName>{label}</S.SwitchName>
    </S.Label>
  );
};
