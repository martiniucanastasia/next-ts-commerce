import { inputStyles as S } from "./styles/inputStyles";
import { InputProps } from "./types";

export const Input = ({
  placeholder,
  button,
  label,
  visual,
  className,
  hint = { message: "", position: "bottom" },
  type = "text",
  ...props
}: InputProps) => {
  return (
    <>
      <S.GeneralWrapper>
        {label && <S.Label>{label}</S.Label>}
        {hint?.position === "top" && <S.Hint>{hint.message}</S.Hint>}

        <S.InputWrapper>
          <S.Input
            {...props}
            placeholder={placeholder}
            visual={visual}
            className={className}
            type={type}
          />
          {button && <>{button}</>}
        </S.InputWrapper>

        {hint?.position === "bottom" && <S.Hint>{hint.message}</S.Hint>}
      </S.GeneralWrapper>
    </>
  );
};
