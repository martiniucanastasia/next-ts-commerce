import { Container } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import { pxToRem } from "@/styles/_common";
import Link from "next/link";
import styled from "styled-components";

export const recommendationSectionStyles = {
  RecommendContainer: styled(Container)`
    @media ${device.mobileXXS} {
      padding: 0 ${pxToRem(10)};
    }
  `,
  RecommendSectionTitle: styled.h4`
    padding: ${pxToRem(30)} 0 ${pxToRem(25)} 0;

    @media ${device.mobileXXS} {
      font-size: var(--text-m);
    }
  `,

  RecommendProductsWrapper: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: ${pxToRem(20)};

    @media ${device.mobileXXS} {
      gap: ${pxToRem(8)};
    }
  `,

  ProductWrapper: styled(Link)`
    max-width: ${pxToRem(220)};
    height: ${pxToRem(310)};

    background-color: white;
    border: 1px solid var(--gray-200);
    border-radius: ${pxToRem(6)};

    padding: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(15)};

    @media ${device.mobileXXS} {
      max-width: ${pxToRem(165)};
      max-height: ${pxToRem(240)};

      padding: ${pxToRem(6)} ${pxToRem(6)} ${pxToRem(14)};

      img {
        width: ${pxToRem(152)};
        height: ${pxToRem(152)};
      }
    }
  `,

  ProductInfoBlock: styled.div`
    display: flex;
    flex-direction: column;

    padding-top: ${pxToRem(15)};
    padding-left: ${pxToRem(6)};

    @media ${device.mobileXXS} {
      padding-top: ${pxToRem(10)};
    }
  `,

  ProductPrice: styled.p`
    font-weight: 500;

    padding-bottom: ${pxToRem(5)};
  `,

  ProductInfo: styled.span`
    display: block;
    width: ${pxToRem(140)};

    color: var(--gray-500);

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    @media ${device.mobileXXS} {
      font-size: var(--text-xxs);
    }
  `,
};
