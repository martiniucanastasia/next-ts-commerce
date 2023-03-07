import { iconButtonStyled as S } from "./styles/iconButtonStyles";
import { ButtonProps } from "./types";

export const IconButton = ({
  size = "normal",
  variant,
  onClick,
  children,
}: ButtonProps) => (
  <S.IconButton variant={variant} size={size} onClick={onClick}>
    {children}
  </S.IconButton>
);
