import styled from "styled-components";
import Link from "next/link";
import { pxToRem } from "@/styles/_common";

import { Input } from "@/components/UI/Input/Input";
import { SelectComponent } from "@/components/UI/Select/Select";
import { Button } from "@/components/UI/Buttons/Button";
import { device } from "@/styles/_sizes";

export const navigationMenuStyles = {
  HeaderWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: ${pxToRem(22)} 0;

    @media ${device.mobile} {
      justify-content: space-between;
      padding: ${pxToRem(12)} 0;
    }
  `,

  LogoWrapper: styled(Link)`
    margin-right: ${pxToRem(45)};

    @media ${device.mobile} {
      margin-right: 0;
      margin-left: ${pxToRem(50)};

      svg {
        width: ${pxToRem(116)};
        height: ${pxToRem(36)};
      }
    }
  `,

  HeaderSearchWrapper: styled.div`
    display: flex;
    width: 100%;
    max-height: ${pxToRem(40)};

    @media ${device.mobile} {
      display: none;
    }
  `,

  InputWrapper: styled.div`
    display: flex;
    flex: 1;
  `,

  HeaderInput: styled(Input)`
    max-height: ${pxToRem(40)};

    border: 2px solid var(--primary);
    border-width: ${pxToRem(2)} ${pxToRem(1)} ${pxToRem(2)} ${pxToRem(2)};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,

  HeaderSelect: styled(SelectComponent)`
    & .Select__control {
      max-height: ${pxToRem(40)};

      border: 2px solid var(--primary);
      border-width: ${pxToRem(2)} 0;
      border-radius: 0;

      &:hover {
        border-color: var(--primary);
      }
    }
  `,

  Button: styled(Button)`
    padding-left: ${pxToRem(23)};
    padding-right: ${pxToRem(23)};
  `,

  LinksWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    text-align: center;

    margin-left: ${pxToRem(90)};
    gap: ${pxToRem(20)};

    @media ${device.mobile} {
      display: none;
    }
  `,

  HeaderLink: styled(Link)`
    white-space: nowrap;
  `,

  TextLink: styled.p`
    text-align: center;
    padding-top: ${pxToRem(3)};
    color: var(--gray-500);
    font-size: var(--text-xxxs);
  `,

  NavbarWrapper: styled.div`
    padding: ${pxToRem(22)} 0;
    border: 1px solid var(--gray-200);

    @media ${device.mobile} {
      padding: ${pxToRem(15)} 0;
      border: none;
    }
  `,

  NavbarLinksWrapper: styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    gap: ${pxToRem(25)};

    @media ${device.mobile} {
      gap: ${pxToRem(3)};
    }
  `,

  NavLinksWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.mobile} {
      overflow-y: auto;
    }
  `,

  NavLink: styled(Link)`
    display: flex;
    align-items: center;

    @media ${device.mobile} {
      white-space: nowrap;
      padding: ${pxToRem(9)};
      border-radius: ${pxToRem(6)};

      background-color: var(--gray-300);
      color: var(--primary);
    }

    :first-child {
      gap: ${pxToRem(10)};
      svg {
        @media ${device.mobile} {
          display: none;
        }
      }
    }

    :last-child {
      svg {
        path {
          fill: var(--gray-500);
        }

        @media ${device.mobile} {
          display: none;
        }
      }
    }
  `,

  NavTextLink: styled.p`
    font-weight: 500;

    @media ${device.mobile} {
      font-weight: 400;
    }
  `,

  NavSelectWrapper: styled.div`
    display: flex;
    gap: ${pxToRem(20)};

    @media ${device.mobile} {
      display: none;
    }
  `,

  NavSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
    }
  `,
};

export const mobileStyles = {
  MobileLinksWrapper: styled.div`
    display: none;

    @media ${device.mobile} {
      display: block;
      display: flex;

      padding-right: ${pxToRem(5)};
      gap: ${pxToRem(20)};
    }
  `,

  MobileSearch: styled(Input)`
    display: none;

    @media ${device.mobile} {
      display: block;
      position: relative;
      background-color: var(--gray-100);
      color: var(--gray-500);
      
    }
  `,
};
