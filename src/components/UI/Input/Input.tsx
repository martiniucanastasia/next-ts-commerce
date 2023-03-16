import { inputStyles as S } from "./styles/inputStyles";
import { InputProps } from "./types";

export const Input = ({
  isTextarea = false,
  placeholder,
  button,
  label,
  visual,
  hint = { message: "", position: "bottom" },
}: InputProps) => {
  return (
    <>
      <S.GeneratWrapper>
        {label && <S.Label>{label}</S.Label>}
        {hint?.position === "top" && <S.Hint>{hint.message}</S.Hint>}

        {isTextarea ? (
          <S.Textarea rows={5} cols={30} placeholder={placeholder} />
        ) : (
          <S.InputWrapper>
            <S.Input type="text" placeholder={placeholder} visual={visual} />
            {button && <>{button}</>}
          </S.InputWrapper>
        )}

        {hint?.position === "bottom" && <S.Hint>{hint.message}</S.Hint>}
      </S.GeneratWrapper>
    </>
  );
};
