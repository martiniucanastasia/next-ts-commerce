import { iconButtonStyled as S } from "./styles/iconButtonStyles";
import { IconButtonProps } from "./types";

export const IconButton = ({ props }: { props: IconButtonProps }) => {
  return <S.Button {...props} />;
};
