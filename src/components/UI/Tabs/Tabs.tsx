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
          <S.TabWrapper>
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
          {categories.map((tab) => {
            return (
              <S.TabContent key={tab.id}>
                {activeId === `${tab.id}` && <p>{tab.name}</p>}
              </S.TabContent>
            );
          })}
        </>
      ) : null}
    </>
  );
};
