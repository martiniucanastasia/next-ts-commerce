import { iconButtonStyled as S } from "./styles/iconButtonStyles";
import { ButtonProps } from "./types";

export const IconButton = ({
  size = "normal",
  variant = "primary",
  visual,
  onClick,
  children,
}: ButtonProps) => (
  <S.IconButton variant={variant} size={size} onClick={onClick} visual={visual}>
    {children}
  </S.IconButton>
);
