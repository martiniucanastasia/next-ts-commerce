"use client";

import { Container } from "@/styles/_common";
import { footerStyled as S } from "./styles/footerStyles";
import { footerLanguage, footerList } from "./data";
import { useState } from "react";

import LogoSvg from "@/assets/svg/icon/general/logo.svg";
import FacebookSvg from "../../assets/svg/icon-contact/social/facebook3.svg";
import TwitterSvg from "../../assets/svg/icon-contact/social/twitter3.svg";
import LinkedInSvg from "../../assets/svg/icon-contact/social/linkedin3.svg";
import InstagramSvg from "../../assets/svg/icon-contact/social/instagram3.svg";
import YouTubeSvg from "../../assets/svg/icon-contact/social/youtube3.svg";

import AppStorePng from "../../assets/svg/icon/general/market-button-app.svg";
import GooglePlayPng from "../../assets/svg/icon/general/market-button-google.svg";

export const Footer = () => {
  const [languageFlag, setLanguageFlag] = useState(footerLanguage[0].icon);

  return (
    <S.GeneralWrapper>
      <>
        <Container>
          <S.FooterWrapper>
            <S.BrandWrapper>
              <LogoSvg />
              <S.BrandInfo>
                Best information about the company gies here but now lorem ipsum
                is
              </S.BrandInfo>
              <S.SocialLinks>
                <S.Link href="https://www.facebook.com/" target="_blank">
                  <FacebookSvg />
                </S.Link>
                <S.Link href="https://twitter.com/?lang=en" target="_blank">
                  <TwitterSvg />
                </S.Link>
                <S.Link href="https://www.linkedin.com/" target="_blank">
                  <LinkedInSvg />
                </S.Link>
                <S.Link href="https://www.instagram.com/" target="_blank">
                  <InstagramSvg />
                </S.Link>
                <S.Link href="https://www.youtube.com/" target="_blank">
                  <YouTubeSvg />
                </S.Link>
              </S.SocialLinks>
            </S.BrandWrapper>

            <S.InfoWrapper>
              {footerList.map((column) => {
                return (
                  <S.ColumnsWrapper key={column.name}>
                    <S.ColumnsName>{column.name}</S.ColumnsName>
                    <S.LinksWrapper>
                      {column.links.map((link) => {
                        return (
                          <S.LinksName key={link}>
                            <S.Link href="">{link}</S.Link>
                          </S.LinksName>
                        );
                      })}
                    </S.LinksWrapper>
                  </S.ColumnsWrapper>
                );
              })}
            </S.InfoWrapper>

            <S.GetAppWrapper>
              <S.ColumnsName>Get App</S.ColumnsName>
              <S.GetAppLinks>
                <S.GetAppLink href="">
                  <GooglePlayPng />
                </S.GetAppLink>
                <S.GetAppLink href="">
                  <AppStorePng />
                </S.GetAppLink>
              </S.GetAppLinks>
            </S.GetAppWrapper>
          </S.FooterWrapper>
        </Container>
      </>
      <S.CopyrightWrapper>
        <Container>
          <S.InnerCopyrightWrapper>
            <S.CopyrightInfo> &#169; 2023 Ecommerce.</S.CopyrightInfo>

            <S.LanguageSelectWrapper>
              <S.FlagWrapper>{languageFlag}</S.FlagWrapper>

              <S.FooterSelect
                classNamePrefix="Select"
                isSearchable={false}
                placeholder={footerLanguage[0].label}
                options={footerLanguage}
                onChange={(value) => {
                  setLanguageFlag(value?.icon);
                }}
              />
            </S.LanguageSelectWrapper>
          </S.InnerCopyrightWrapper>
        </Container>
      </S.CopyrightWrapper>
    </S.GeneralWrapper>
  );
};
