import styled from "styled-components";
import Link from "next/link";

import { pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import { SelectComponent } from "@/components/UI/Select/Select";

export const footerStyled = {
  InitialFooterWrapper: styled.div`` ,
  GeneralWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  FooterWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    padding: ${pxToRem(40)} 0 ${pxToRem(60)} 0;

    @media ${device.mobile} {
      align-items: center;
      text-align: center;
      flex-direction: column;
    }

    @media ${device.mobileXS} {
      padding: ${pxToRem(30)} 0;
    }
  `,

  BrandWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-right: ${pxToRem(20)};
    width: 30%;

    @media ${device.mobile} {
      width: 100%;
      align-items: center;
      font-size: var(--text-m);
      padding: 0;
    }
  `,

  BrandInfo: styled.span`
    padding: ${pxToRem(17)} 0;
    color: var(--gray-600);
    line-height: ${pxToRem(24)};
  `,

  SocialLinks: styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 0;

    color: var(--gray-400);
    gap: ${pxToRem(12)};

    svg path {
      fill: currentColor;
    }
  `,

  InfoWrapper: styled.div`
    display: flex;
    width: 60%;

    @media ${device.mobile} {
      text-align: center;
      padding: ${pxToRem(20)} 0 ${pxToRem(40)} 0;
      width: 100%;
    }

    @media ${device.mobileXS} {
      flex-wrap: wrap;
      max-width: 60%;
      padding-bottom: 0;
    }
  `,

  LinksWrapper: styled.ul`
    display: flex;
    flex-direction: column;

    gap: ${pxToRem(7)};
  `,

  ColumnsName: styled.h4`
    flex-wrap: wrap;
    color: var(--gray-700);
    font-weight: 500;
    font-size: var(--text-s);

    padding-bottom: ${pxToRem(10)};

    @media ${device.mobile} {
      font-size: var(--text-m);
      padding-bottom: ${pxToRem(15)};
    }
  `,

  ColumnsWrapper: styled.div`
    width: 25%;

    @media ${device.mobileXS} {
      width: 50%;
      padding-bottom: ${pxToRem(20)};
    }

    @media ${device.mobileXXS} {
      width: 100%;
    }
  `,

  LinksName: styled.li`
    color: var(--gray-500);
    flex-wrap: wrap;
    -webkit-font-smoothing: antialiased;

    @media ${device.mobile} {
      :not(:last-child) {
        margin-bottom: ${pxToRem(10)};
      }
    }
  `,

  Link: styled.a``,

  GetAppWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;

    @media ${device.mobile} {
      width: 100%;
      align-items: center;
    }
  `,

  GetAppLinks: styled.div`
    display: flex;
    flex-direction: column;

    padding-top: ${pxToRem(5)};
    gap: ${pxToRem(8)};

    @media ${device.mobile} {
      flex-direction: row;
      gap: ${pxToRem(15)};
    }

    @media ${device.mobileXS} {
      flex-direction: column;
    }
  `,

  GetAppLink: styled(Link)``,

  CopyrightWrapper: styled.div`
    padding: ${pxToRem(22)} 0;

    background-color: var(--gray-200);
    border-top: 1px solid var(--gray-300);
  `,

  InnerCopyrightWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,

  CopyrightInfo: styled.p`
    color: var(--gray-600);
  `,

  LanguageSelectWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  FlagWrapper: styled.div`
    height: ${pxToRem(17)};
    width: ${pxToRem(24)};
    svg {
      height: ${pxToRem(17)};
      width: ${pxToRem(24)};
    }
  `,

  FooterSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
      background-color: var(--gray-200);

      &:hover {
        border-color: var(--primary);
      }
    }

    & .Select__placeholder {
      color: var(--gray-600);
    }
  `,
};
