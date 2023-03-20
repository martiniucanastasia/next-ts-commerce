"use client";

import { Container } from "@/styles/_common";
import { footerStyled as S } from "./styles/footerStyles";
import { footerLanguage } from "./data";

import LogoSvg from "@/assets/svg/icon/general/logo.svg";
import FacebookSvg from "../../assets/svg/icon-contact/social/facebook3.svg";
import TwitterSvg from "../../assets/svg/icon-contact/social/twitter3.svg";
import LinkedInSvg from "../../assets/svg/icon-contact/social/linkedin3.svg";
import InstagramSvg from "../../assets/svg/icon-contact/social/instagram3.svg";
import YouTubeSvg from "../../assets/svg/icon-contact/social/youtube3.svg";

import Image from "next/image";
import AppStorePng from "../../assets/png/additional/market-button-1.png";
import GooglePlayPng from "../../assets/png/additional/market-button.png";

export const Footer = () => {
  return (
    <S.GeneralWrapper>
      
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
            <S.ColimnsWrapper>
              <S.ColumnsName>About</S.ColumnsName>
              <S.LinksWrapper>
                <S.LinksName>
                  <S.Link href="">About Us</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Find Store</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Categories</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Blogs</S.Link>
                </S.LinksName>
              </S.LinksWrapper>
            </S.ColimnsWrapper>

            <S.ColimnsWrapper>
              <S.ColumnsName>Partnership</S.ColumnsName>
              <S.LinksWrapper>
                <S.LinksName>
                  <S.Link href="">About Us</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Find Store</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Categories</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Blogs</S.Link>
                </S.LinksName>
              </S.LinksWrapper>
            </S.ColimnsWrapper>

            <S.ColimnsWrapper>
              <S.ColumnsName>Information</S.ColumnsName>
              <S.LinksWrapper>
                <S.LinksName>
                  <S.Link href="">Help Center</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Money Refund</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Shipping</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Contact Us</S.Link>
                </S.LinksName>
              </S.LinksWrapper>
            </S.ColimnsWrapper>

            <S.ColimnsWrapper>
              <S.ColumnsName>For users</S.ColumnsName>
              <S.LinksWrapper>
                <S.LinksName>
                  <S.Link href="">Login</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Register</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">Settings</S.Link>
                </S.LinksName>
                <S.LinksName>
                  <S.Link href="">My Orders</S.Link>
                </S.LinksName>
              </S.LinksWrapper>
            </S.ColimnsWrapper>
          </S.InfoWrapper>

          <S.GetAppWrapper>
            <S.ColumnsName>Get App</S.ColumnsName>
            <S.GetAppLinks>
              <S.GetAppLink href="">
                <Image src={AppStorePng} alt="App Store" />
              </S.GetAppLink>
              <S.GetAppLink href="">
                <Image src={GooglePlayPng} alt="Google Play" />
              </S.GetAppLink>
            </S.GetAppLinks>
          </S.GetAppWrapper>
        </S.FooterWrapper>
      </Container>

      <S.CopyrightWrapper>
        <Container>
          <S.InnerCopyrightWrapper>
            <S.CopyrightInfo> &#169; 2023 Ecommerce.</S.CopyrightInfo>
            <S.FooterSelect
              classNamePrefix="Select"
              placeholder={footerLanguage[0].label}
              options={footerLanguage}
              onChange={(value) => console.log(value)}
            />
          </S.InnerCopyrightWrapper>
        </Container>
      </S.CopyrightWrapper>
    </S.GeneralWrapper>
  );
};
