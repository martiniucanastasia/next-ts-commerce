import { buttonStyled as S } from "./styles/buttonStyles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "base",
  variant,
  onClick,
  children,
}: ButtonProps) => (
  <S.Button variant={variant} size={size} onClick={onClick}>
    {children}
  </S.Button>
);
