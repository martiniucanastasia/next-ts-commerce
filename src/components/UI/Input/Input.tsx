import { ReactElement, useState } from "react";
import { ButtonProps } from "../Buttons/types";
import { inputStyles as S } from "./styles/inputStyles";

export interface InputProps {
  isTextarea?: boolean;
  placeholder: string;
  button?: ReactElement<ButtonProps>;
  label?: string;
  hintTop?: string;
  hintBottom?: string;
}

export const Input = ({
  isTextarea = false,
  placeholder,
  button,
  label,
  hintTop,
  hintBottom,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const showHint = () => setIsFocused(true);

  const hideHint = () => setIsFocused(false);

  return (
    <div>
      <form>
        <S.InputWrapper>
          {label && <S.Label>{label}</S.Label>}
          {hintTop && isFocused && <S.Hint>{hintTop}</S.Hint>}
          {isTextarea ? (
            <S.Textarea
              rows={20}
              cols={30}
              onFocus={showHint}
              onBlur={hideHint}
              placeholder={placeholder}
            />
          ) : (
            <S.Input
              onFocus={showHint}
              onBlur={hideHint}
              type="text"
              placeholder={placeholder}
            />
          )}

          {hintBottom && isFocused && <S.Hint>{hintBottom}</S.Hint>}
          {button && <S.ButtonWrapper>{button}</S.ButtonWrapper>}
        </S.InputWrapper>
      </form>
    </div>
  );
};
