"use client";

import { useState } from "react";
import { TabsProps } from "./types";
import { tabsStyles as S } from "./styles/tabsStyles";

export const Tabs = ({ categories, variant }: TabsProps) => {
  const [activeId, setActive] = useState("0");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    setActive(button.id);
  };
  return (
    <>
      {categories ? (
        <>
          <S.TabWrapper variant={variant}>
            {categories.map((tab) => {
              return (
                <S.TabButton
                  key={tab.id}
                  id={tab.id.toString()}
                  disabled={activeId === `${tab.id}`}
                  variant={variant}
                  onClick={handleClick}
                >
                  {tab.name}
                </S.TabButton>
              );
            })}
          </S.TabWrapper>
          <S.TabContent>{activeId === "0" && <p>0</p>}</S.TabContent>
          <S.TabContent>{activeId === "1" && <p>1</p>}</S.TabContent>
          <S.TabContent>{activeId === "2" && <p>2</p>}</S.TabContent>
          <S.TabContent>{activeId === "3" && <p>3</p>}</S.TabContent>
        </>
      ) : null}
    </>
  );
};
