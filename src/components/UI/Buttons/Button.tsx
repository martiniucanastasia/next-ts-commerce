import { buttonStyled as S } from "./styles/buttonStyles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "normal",
  variant = "primary",
  visual,
  onClick,
  children,
  available = true,
}: ButtonProps) => (
  <S.Button
    size={size}
    variant={variant}
    visual={visual}
    onClick={onClick}
    available={available}
  >
    {children}
  </S.Button>
);
