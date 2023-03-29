"use client";

import {
  navigationMenuStyles as S,
  mobileStyles as M,
} from "./styles/navigationMenuStyles";

import { createElement, useState } from "react";
import { Container } from "@/styles/_common";
import { Burger } from "../UI/Burger/Burger";
import {
  Categories,
  Languages,
  Shippings,
  HeaderLinks,
  BurgerContents,
} from "@/types/types";
import { navBarOptions, helpOptions } from "./data";

import Image from "next/image";
import LogoSvg from "@/assets/svg/icon/general/logo.svg";

export interface NavigationMenuProps {
  categories: Categories;
  languages: Languages;
  shippingInfo: Shippings;
  headerLinks: HeaderLinks;
  burgerContents: BurgerContents;
}

export const NavigationMenu = ({
  categories,
  languages,
  shippingInfo,
  headerLinks,
  burgerContents,
}: NavigationMenuProps) => {
  const [shippingFlag, setShippingFlag] = useState(shippingInfo[0].icon);

  return (
    <>
      <Burger languages={languages} burgerContents={burgerContents} />
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
            {headerLinks.map((link) => (
              <S.HeaderLinkList key={link.value}>
                <S.HeaderLink href="">
                  <Image
                    src={link.icon}
                    width={20}
                    height={20}
                    alt={link.label}
                  />
                  <S.HeaderTextLink>{link.label}</S.HeaderTextLink>
                </S.HeaderLink>
              </S.HeaderLinkList>
            ))}
          </S.HeaderLinksWrapper>

          <M.MobileLinksWrapper>
            {headerLinks
              .filter(
                (link) => link.value === "Profile" || link.value === "My Cart"
              )
              .reverse()
              .map((link) => (
                <M.MobileLink href="" key={link.value}>
                  <Image src={link.icon} width={20} height={20} alt="alt" />
                </M.MobileLink>
              ))}
          </M.MobileLinksWrapper>
        </S.HeaderWrapper>

        <M.MobileSearch placeholder="Search" />
      </Container>

      <S.NavbarWrapper>
        <S.NavbarContainer>
          <S.NavbarLinksWrapper>
            <S.NavLinksWrapper>
              <S.NavbarLinksList>
                {navBarOptions.map((link) => {
                  return (
                    <S.NavbarLink key={link.value}>
                      <S.NavLink href="">
                        {link?.icon && createElement(link?.icon)}
                        <S.NavText>{link.label}</S.NavText>
                      </S.NavLink>
                    </S.NavbarLink>
                  );
                })}
              </S.NavbarLinksList>
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
                placeholder={`${languages[0].label}`}
                options={languages}
                onChange={(e) => console.log(e)}
              />
              <S.ShippingSelectWrapper>
                <S.FlagWrapper>
                  <Image src={shippingFlag} width={20} height={20} alt="alt" />
                </S.FlagWrapper>
                <S.NavSelect
                  classNamePrefix="Select"
                  isSearchable={false}
                  placeholder={`${shippingInfo[0].label}`}
                  options={shippingInfo}
                  onChange={(value) => setShippingFlag(value?.icon)}
                />
              </S.ShippingSelectWrapper>
            </S.NavSelectWrapper>
          </S.NavbarLinksWrapper>
        </S.NavbarContainer>
      </S.NavbarWrapper>
    </>
  );
};
