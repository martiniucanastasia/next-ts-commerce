"use client";

import { VerticalMenuStyles as S } from "./styles/verticalMenuStyles";
import { VerticalMenuProps } from "./types";

export const VerticalMenu = ({ categories }: VerticalMenuProps) => {
  return (
    <>
      {categories &&
        categories.map((item) => {
          return (
            <S.UnicCategory key={item.id} href="#">
              {item.name}
            </S.UnicCategory>
          );
        })}
    </>
  );
};
