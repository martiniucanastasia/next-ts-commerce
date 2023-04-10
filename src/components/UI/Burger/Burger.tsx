"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Languages, BurgerContents } from "@/types/types";
import { StyledBurger, StyledMenu as S } from "./styles/burgerStyles";

import Image from "next/image";
import MenuSvg from "@/assets/svg/icon/control/menu.svg";
import AvatarSvg from "@/assets/svg/icon/general/avatar.svg";
import LanguageSvg from "@/assets/svg/icon/general/language.svg";

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Burger = ({
  languages,
  burgerContents,
}: {
  languages: Languages;
  burgerContents: BurgerContents;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const { general, additional, info } = burgerContents;

  const BurgerBase = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <MenuSvg />
      </StyledBurger>
    );
  };

  const BurgerMenu = ({ open, setOpen }: BurgerProps) => {
    return (
      <>
        <S.BurgerMenuWrapper open={open} onClick={() => setOpen(!open)} />
        <S.MenuWrapper open={open}>
          <S.UserLogInWrapper>
            <AvatarSvg />
            <S.LinksWrapper>
              <S.Link href="">Sign In</S.Link>
              <>&#x7C;</>
              <S.Link href="">Register</S.Link>
            </S.LinksWrapper>
          </S.UserLogInWrapper>
          <S.OptionsWrapper>
            <S.GeneralOptionsList>
              {general.map((link) => {
                return (
                  <S.OptionLink key={link.value}>
                    <S.Link href="">
                      <Image
                        src={link.icon}
                        width={20}
                        height={20}
                        alt={link.label}
                      />
                      {link.label}
                    </S.Link>
                  </S.OptionLink>
                );
              })}
            </S.GeneralOptionsList>

            <S.GeneralOptionsList>
              <S.BurgerSelectWrapper>
                <LanguageSvg />

                <S.BurgerSelect
                  classNamePrefix="Select"
                  isSearchable={false}
                  placeholder={languages[0].label}
                  options={languages}
                  onChange={(e) => console.log(e)}
                />
              </S.BurgerSelectWrapper>
              {additional.map((link) => {
                return (
                  <S.OptionLink key={link.value}>
                    <S.Link href="">
                      <Image
                        src={link.icon}
                        width={20}
                        height={20}
                        alt={link.label}
                      />
                      {link.label}
                    </S.Link>
                  </S.OptionLink>
                );
              })}
            </S.GeneralOptionsList>

            <S.InfoWrapper>
              {info.map((link) => {
                return (
                  <S.OptionLink key={link.value}>
                    <S.Link href="">{link.label}</S.Link>
                  </S.OptionLink>
                );
              })}
            </S.InfoWrapper>
          </S.OptionsWrapper>
        </S.MenuWrapper>
      </>
    );
  };
  return (
    <>
      <BurgerBase open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </>
  );
};
