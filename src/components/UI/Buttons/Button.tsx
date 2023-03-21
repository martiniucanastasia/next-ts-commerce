import { buttonStyled as S } from "./styles/buttonStyles";
import { ButtonProps } from "./types";

export const Button = ({
  size = "normal",
  variant = "primary",
  visual,
  disabled,
  className,
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
    disabled={disabled}
    className={className}
  >
    {children}
  </S.Button>
);
