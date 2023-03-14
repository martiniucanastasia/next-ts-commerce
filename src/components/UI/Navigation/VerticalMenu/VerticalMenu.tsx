"use client";

import { VerticalMenuStyles as S } from "./styles/verticalMenuStyles";

export interface VerticalMenuProps {
  categories: [
    {
      id: number;
      name: string;
    }
  ];
}

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
