import { buttonStyled as S } from "./styles/buttonStyles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "normal",
  variant = "primary",
  available = true,
  visual,
  disabled,
  className,
  children,
  onClick,
}: ButtonProps) => (
  <S.Button
    size={size}
    variant={variant}
    available={available}
    visual={visual}
    disabled={disabled}
    className={className}
    onClick={onClick}
  >
    {children}
  </S.Button>
);
