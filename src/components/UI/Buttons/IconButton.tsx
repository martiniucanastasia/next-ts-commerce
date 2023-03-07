import { iconButtonStyled as S } from "./styles/iconButtonStyles";
import { ButtonProps } from "./types";

export const IconButton = ({
  size = "normal",
  variant,
  visual,
  onClick,
  children,
}: ButtonProps) => (
  <S.IconButton variant={variant} size={size} onClick={onClick} visual={visual}>
    {children}
  </S.IconButton>
);
