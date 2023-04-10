import { Button } from "@/components/UI/Buttons/Button";
import { Container, pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import Link from "next/link";
import styled from "styled-components";

export const bannerAndProductsStyles = {
  BannerAndProductsContainer: styled(Container)`
    @media ${device.mobileS} {
      padding: 0;
    }
  `,

  BannerAndProductsBody: styled.div`
    display: flex;
    flex-direction: column;

    gap: ${pxToRem(10)};
  `,

  BlockWrapper: styled.div`
    background-color: white;
    border-radius: ${pxToRem(6)};
  `,

  BannerAndProductsWrapper: styled.div`
    display: flex;

    border: 1px solid var(--gray-300);
    border-width: ${pxToRem(1)} ${pxToRem(1)} 0px ${pxToRem(1)};

    border-radius: ${pxToRem(6)};

    @media ${device.mobileS} {
      border: none;
      flex-direction: column;
    }
  `,

  BannerWrapper: styled.div`
    position: relative;
    display: flex;

    width: ${pxToRem(284)};
    height: ${pxToRem(256)};

    aspect-ratio: 71/64;

    border-bottom: 1px solid var(--gray-300);
    border-bottom-left-radius: 6px;

    img {
      position: absolute;
      object-fit: cover;

      width: 100%;
      height: 100%;

      border-top-left-radius: ${pxToRem(6)};
      border-bottom-left-radius: ${pxToRem(6)};

      @media ${device.mobileS} {
        display: none;
      }
    }

    @media ${device.mobileS} {
      border: none;
      aspect-ratio: unset;

      width: 100%;
      height: auto;

      border-bottom: 1px solid var(--gray-300);
    }
  `,

  InfoWrapper: styled.div`
    padding: ${pxToRem(20)} 0 0 ${pxToRem(20)};
    z-index: 10;

    @media ${device.mobileS} {
      padding: ${pxToRem(15)};
    }
  `,

  BannerName: styled.h3`
    padding-bottom: ${pxToRem(20)};

    width: ${pxToRem(150)};

    @media ${device.mobileS} {
      padding: 0;

      width: 100%;
    }
  `,

  Link: styled(Link)``,

  BannerLinkButton: styled(Button)`
    border: none;
    box-shadow: rgba(56, 56, 56, 0.08) 0 1px 2px 0;
    color: var(--dark-700);

    @media ${device.mobileS} {
      display: none;
    }
  `,

  ProductsWrapper: styled.div`
    width: 100%;
    overflow-x: auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    border-bottom-right-radius: ${pxToRem(6)};

    @media ${device.mobileXXS} {
      display: flex;
    }
  `,

  ProductWrapper: styled(Link)`
    display: flex;
    justify-content: space-between;

    padding: ${pxToRem(20)} ${pxToRem(1)} ${pxToRem(20)} ${pxToRem(16)};

    border: 1px solid var(--gray-300);
    border-width: 0 0 ${pxToRem(1)} ${pxToRem(1)};

    @media ${device.mobileXXS} {
      flex-direction: column-reverse;
      justify-content: center;

      align-items: center;
      text-align: center;

      padding: ${pxToRem(10)} ${pxToRem(20)};

      img {
        width: ${pxToRem(100)};
        height: ${pxToRem(100)};
      }
    }
  `,

  ProductInfo: styled.div`
    @media ${device.mobileXXS} {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  `,

  ProductName: styled.p`
    width: ${pxToRem(125)};
    padding-bottom: ${pxToRem(10)};

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,

  ProductPriceBlock: styled.div`
    display: flex;
    flex-wrap: wrap;

    span:first-of-type {
      width: 100%;
    }

    @media ${device.mobileXXS} {
      display: flex;
      gap: ${pxToRem(3)};

      span:first-of-type {
        width: auto;
      }
    }
  `,

  ProductPrice: styled.span`
    font-size: var(--text-xxs);
    color: var(--gray-500);
  `,

  MobileButton: styled(Button)`
    display: none;

    @media ${device.mobileS} {
      display: flex;
    }
  `,
};
