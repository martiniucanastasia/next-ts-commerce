"use client";

import {
  navigationMenuStyles as S,
  mobileStyles as M,
} from "./styles/navigationMenuStyles";

import { Category } from "@/types/types";
import { Container } from "@/styles/_common";
import { Burger } from "../UI/Burger/Burger";
import { languageOptions, deliveryOptions } from "./data";

import LogoSvg from "../../assets/svg/icon/general/logo.svg";
import ProfileSvg from "../../assets/svg/icon/control/profile.svg";
import MessageSvg from "../../assets/svg/icon/control/message.svg";
import OrdersSvg from "../../assets/svg/icon/control/orders_heart.svg";
import MyCartSvg from "../../assets/svg/icon/control/my_cart.svg";

import MobileCartSvg from "../../assets/svg/icon/general/shopping_cart.svg";
import MobilePersonSvg from "../../assets/svg/icon/control/person.svg";

import MenuSvg from "../../assets/svg/icon/control/menu.svg";
import ArrowDownSvg from "../../assets/svg/icon/control/expand_more.svg";

export const NavigationMenu = ({ categories }: Category) => {
  return (
    <>
      <Container>
        <S.HeaderWrapper>
          <Burger />

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

          <S.LinksWrapper>
            <S.HeaderLink href="">
              <ProfileSvg />
              <S.TextLink>Profile</S.TextLink>
            </S.HeaderLink>

            <S.HeaderLink href="">
              <MessageSvg />
              <S.TextLink>Message</S.TextLink>
            </S.HeaderLink>

            <S.HeaderLink href="">
              <OrdersSvg />
              <S.TextLink>Orders</S.TextLink>
            </S.HeaderLink>

            <S.HeaderLink href="">
              <MyCartSvg />
              <S.TextLink>My cart</S.TextLink>
            </S.HeaderLink>
          </S.LinksWrapper>

          <M.MobileLinksWrapper>
            <S.HeaderLink href="">
              <MobileCartSvg />
            </S.HeaderLink>

            <S.HeaderLink href="">
              <MobilePersonSvg />
            </S.HeaderLink>
          </M.MobileLinksWrapper>
        </S.HeaderWrapper>
        <M.MobileSearch placeholder="Search" />
      </Container>

      <S.NavbarWrapper>
        <Container>
          <S.NavLinksWrapper>
            <S.NavbarLinksWrapper>
              <S.NavLink href="">
                <MenuSvg />
                <S.NavTextLink>All Categories</S.NavTextLink>
              </S.NavLink>
              <S.NavLink href="">
                <S.NavTextLink>Hot offers</S.NavTextLink>
              </S.NavLink>
              <S.NavLink href="">
                <S.NavTextLink>Gift boxes</S.NavTextLink>
              </S.NavLink>
              <S.NavLink href="">
                <S.NavTextLink>Projects</S.NavTextLink>
              </S.NavLink>
              <S.NavLink href="">
                <S.NavTextLink>Menu item</S.NavTextLink>
              </S.NavLink>
              <S.NavLink href="">
                <S.NavTextLink>Help</S.NavTextLink>
                <ArrowDownSvg />
              </S.NavLink>
            </S.NavbarLinksWrapper>

            <S.NavSelectWrapper>
              <S.NavSelect
                classNamePrefix="Select"
                placeholder={`${languageOptions[0].label}`}
                options={languageOptions}
                onChange={(e) => console.log(e)}
              />
              <S.NavSelect
                classNamePrefix="Select"
                placeholder={`${deliveryOptions[0].label}`}
                options={deliveryOptions}
                onChange={(e) => console.log(e)}
              />
            </S.NavSelectWrapper>
          </S.NavLinksWrapper>
        </Container>
      </S.NavbarWrapper>
    </>
  );
};
