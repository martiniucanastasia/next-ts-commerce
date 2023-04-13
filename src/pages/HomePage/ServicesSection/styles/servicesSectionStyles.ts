import { Container, pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import Link from "next/link";
import styled from "styled-components";

export const servicesSectionStyles = {
  ServicesContainer: styled(Container)`
    @media ${device.mobileXXS} {
      padding: 0 ${pxToRem(10)};
    }
  `,

  ServicesSectionTitle: styled.h4`
    padding: ${pxToRem(30)} 0 ${pxToRem(25)} 0;

    @media ${device.mobileXXS} {
      font-size: var(--text-m);
    }
  `,

  ServicesWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: ${pxToRem(20)};
  `,

  ServiceWrapper: styled(Link)`
    position: relative;

    width: ${pxToRem(280)};
    background-color: white;

    border-radius: ${pxToRem(6)};
    border: 1px solid var(--gray-300);
  `,

  BlockText: styled.p`
    max-width: ${pxToRem(185)};

    padding: ${pxToRem(20)} 0 ${pxToRem(20)} ${pxToRem(20)};
  `,

  IconWrapper: styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    right: ${pxToRem(20)};
    top: ${pxToRem(92)};

    width: ${pxToRem(55)};
    height: ${pxToRem(55)};

    background-color: var(--primary-100);
    border-radius: 50%;
    border: 2px solid white;

    padding: ${pxToRem(15)};
  `,
};
