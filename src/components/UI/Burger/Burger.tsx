"use client";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { createElement, Dispatch, SetStateAction, useState } from "react";
import { additionalOptions, infoOptions, linksOptions } from "./data";
import { languageOptions } from "@/components/NavgationMenu/data";
import { StyledBurger, StyledMenu as S } from "./styles/burgerStyles";

import MenuSvg from "@/assets/svg/icon/control/menu.svg";
import AvatarSvg from "@/assets/svg/icon/general/avatar.svg";
import LangiageSvg from "@/assets/svg/icon/general/language.svg";

interface BurgerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  const BurgerBase = ({ open, setOpen }: BurgerProps) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <MenuSvg />
      </StyledBurger>
    );
  };

  const BugerMenu = ({ open, setOpen }: BurgerProps) => {
    const handleClickOutside = () => setOpen(false);
    const ref = useOutsideClick(handleClickOutside);
    return (
      <>
        <S.MenuWrapper ref={ref} open={open}>
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
              {linksOptions.map((link) => {
                return (
                  <S.OptionLink key={link.value}>
                    <S.Link href="">
                      {createElement(link.icon)}
                      {link.label}
                    </S.Link>
                  </S.OptionLink>
                );
              })}
            </S.GeneralOptionsList>

            <S.GeneralOptionsList>
              <S.BurgerSelectWrapper>
                <LangiageSvg />
                <S.BurgerSelect
                  classNamePrefix="Select"
                  isSearchable={false}
                  placeholder={languageOptions[0].label}
                  options={languageOptions}
                  onChange={(e) => console.log(e)}
                />
              </S.BurgerSelectWrapper>
              {additionalOptions.map((link) => {
                return (
                  <S.OptionLink key={link.value}>
                    <S.Link href="">
                      {createElement(link.icon)}
                      {link.label}
                    </S.Link>
                  </S.OptionLink>
                );
              })}
            </S.GeneralOptionsList>

            <S.InfoWrapper>
              {infoOptions.map((link) => {
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
      <BugerMenu open={open} setOpen={setOpen} />
    </>
  );
};
