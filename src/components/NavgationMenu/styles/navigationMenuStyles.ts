import styled from "styled-components";
import Link from "next/link";
import { Container, pxToRem } from "@/styles/_common";

import { Input } from "@/components/UI/Input/Input";
import { SelectComponent } from "@/components/UI/Select/Select";
import { Button } from "@/components/UI/Buttons/Button";
import { device } from "@/styles/_sizes";

export const navigationMenuStyles = {
  HeaderWrapper: styled.div`
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
    width: ${pxToRem(145)};

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

  HeaderLinksWrapper: styled.ul`
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

  HeaderLink: styled.li`
    white-space: nowrap;

    svg path {
      fill: var(--gray-500);
    }

    @media ${device.mobile} {
      svg path {
        fill: var(--gray-700);
      }
    }
  `,
  IconLink: styled.div``,

  TextLink: styled(Link)`
    text-align: center;
    padding-top: ${pxToRem(3)};
    color: var(--gray-500);
    font-size: var(--text-xxxs);
  `,

  NavbarWrapper: styled.div`
    padding: ${pxToRem(7)} 0;
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);

    @media ${device.mobile} {
      padding: ${pxToRem(15)} 0;
      border: none;
    }
  `,

  SVGWrapper: styled.div`
    display: flex;
    margin-right: ${pxToRem(9)};

    @media ${device.mobile} {
      display: none;
    }
  `,

  NavbarLinksWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.mobile} {
      overflow-y: auto;
    }
  `,

  NavLinksWrapper: styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    @media ${device.mobile} {
      svg {
        display: none;
      }
    }
  `,
  LinksList: styled.ul`
    display: flex;

    @media ${device.mobile} {
      gap: ${pxToRem(3)};
    }
  `,

  NavLink: styled.li`
    display: flex;
    align-items: center;

    margin-right: ${pxToRem(25)};

    @media ${device.mobile} {
      margin: 0;
      white-space: nowrap;
      padding: ${pxToRem(9)};

      background-color: var(--gray-200);
      border-radius: ${pxToRem(6)};
      color: var(--primary);
    }
  `,

  NavTextLink: styled(Link)`
    font-weight: 500;

    @media ${device.mobile} {
      font-weight: 400;
    }
  `,
  HelpSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
      font-weight: 500;
    }

    @media ${device.mobile} {
      display: none;
    }
  `,

  NavSelectWrapper: styled.div`
    display: flex;
    gap: ${pxToRem(20)};

    @media ${device.mobile} {
      display: none;
    }
  `,

  ShippingSelectWrapper: styled.div`
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

  NavSelect: styled(SelectComponent)`
    & .Select__control {
      border: none;
    }
  `,
  NavbarContainer: styled(Container)`
    padding-right: 0;
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
  MobileLink: styled(Link)``,

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
