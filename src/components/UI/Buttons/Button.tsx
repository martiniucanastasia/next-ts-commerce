import { buttonStyled as S } from "./styles/buttonStyles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "normal",
  variant = "primary",
  visual,
  onClick,
  children,
}: ButtonProps) => (
  <S.Button variant={variant} size={size} onClick={onClick} visual={visual}>
    {children}
  </S.Button>
);
