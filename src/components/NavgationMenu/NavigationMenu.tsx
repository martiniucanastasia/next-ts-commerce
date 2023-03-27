"use client";

import {
  navigationMenuStyles as S,
  mobileStyles as M,
} from "./styles/navigationMenuStyles";

import { Category } from "@/types/types";
import { Container } from "@/styles/_common";
import { Burger } from "../UI/Burger/Burger";
import {
  languageOptions,
  deliveryOptions,
  linksOptions,
  navBarOptions,
  helpOptions,
} from "./data";
import { createElement, useState } from "react";

import LogoSvg from "@/assets/svg/icon/general/logo.svg";
import MobileCartSvg from "@/assets/svg/icon/general/shopping_cart.svg";
import MobilePersonSvg from "@/assets/svg/icon/control/person.svg";
import MenuSvg from "@/assets/svg/icon/control/menu.svg";

export const NavigationMenu = ({ categories }: Category) => {
  const [languageFlag, setLanguageFlag] = useState(deliveryOptions[0].icon);

  return (
    <>
      <Burger />
      <Container>
        <S.HeaderWrapper>
          <S.LogoWrapper href="">
            <LogoSvg />
          </S.LogoWrapper>

          <S.HeaderSearchWrapper>
            <S.InputWrapper>
              <S.HeaderInput placeholder="Search" />
            </S.InputWrapper>
            <S.HeaderSelect
              classNamePrefix="Select"
              placeholder="All categories"
              options={categories}
              onChange={(e) => console.log(e)}
            />

            <S.Button visual="right">Search</S.Button>
          </S.HeaderSearchWrapper>

          <S.HeaderLinksWrapper>
            {linksOptions.map((link) => (
              <S.HeaderLink key={link.value}>
                <S.IconLink>{createElement(link.icon)}</S.IconLink>
                <S.TextLink href="">{link.label}</S.TextLink>
              </S.HeaderLink>
            ))}
          </S.HeaderLinksWrapper>

          <M.MobileLinksWrapper>
            <M.MobileLink href="">
              <MobileCartSvg />
            </M.MobileLink>

            <M.MobileLink href="">
              <MobilePersonSvg />
            </M.MobileLink>
          </M.MobileLinksWrapper>
        </S.HeaderWrapper>
        <M.MobileSearch placeholder="Search" />
      </Container>

      <S.NavbarWrapper>
        <S.NavbarContainer>
          <S.NavbarLinksWrapper>
            <S.NavLinksWrapper>
              <S.SVGWrapper>
                <MenuSvg />
              </S.SVGWrapper>
              <S.LinksList>
                {navBarOptions.map((link) => {
                  return (
                    <S.NavLink key={link.value}>
                      <S.NavTextLink href="">{link.label}</S.NavTextLink>
                    </S.NavLink>
                  );
                })}
              </S.LinksList>
              <S.HelpSelect
                classNamePrefix="Select"
                placeholder="Help"
                isSearchable={false}
                options={helpOptions}
                onChange={(e) => console.log(e)}
              />
            </S.NavLinksWrapper>
            <S.NavSelectWrapper>
              <S.NavSelect
                classNamePrefix="Select"
                isSearchable={false}
                placeholder={`${languageOptions[0].label}`}
                options={languageOptions}
                onChange={(e) => console.log(e)}
              />
              <S.ShippingSelectWrapper>
                <S.FlagWrapper>{languageFlag}</S.FlagWrapper>
                <S.NavSelect
                  classNamePrefix="Select"
                  isSearchable={false}
                  placeholder={`${deliveryOptions[0].label}`}
                  options={deliveryOptions}
                  onChange={(value) => setLanguageFlag(value?.icon)}
                />
              </S.ShippingSelectWrapper>
            </S.NavSelectWrapper>
          </S.NavbarLinksWrapper>
        </S.NavbarContainer>
      </S.NavbarWrapper>
    </>
  );
};
