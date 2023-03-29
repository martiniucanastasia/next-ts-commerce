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

    padding-bottom: ${pxToRem(10)};
    gap: ${pxToRem(10)};
  `,

  BlockWrapper: styled.div`
    background-color: white;

    border-top-left-radius: ${pxToRem(6)};
    border-bottom-left-radius: ${pxToRem(6)};
  `,

  BannerAndProductsWrapper: styled.div`
    display: flex;

    border: 0.5px solid var(--gray-300);
    border-radius: ${pxToRem(6)};

    @media ${device.mobileS} {
      border: none;
      flex-direction: column;
    }
  `,

  BannerWrapper: styled.div`
    position: relative;
    display: flex;

    aspect-ratio: 256/235;

    width: ${pxToRem(284)};
    height: ${pxToRem(256)};

    border-right: 0.5px solid var(--gray-300);

    border-top-left-radius: ${pxToRem(6)};
    border-bottom-left-radius: ${pxToRem(6)};

    img {
      position: absolute;
      object-fit: cover;

      width: 100%;
      height: 100%;

      @media ${device.mobileS} {
        display: none;
      }
    }

    @media ${device.mobileS} {
      border: none;
      width: 100%;
      height: ${pxToRem(50)};
    }
  `,

  InfoWrapper: styled.div`
    padding: ${pxToRem(20)} 0 0 ${pxToRem(20)};
    z-index: 10;
    width: ${pxToRem(150)};

    @media ${device.mobileS} {
      padding: ${pxToRem(15)} 0 0 ${pxToRem(15)};
      width: auto;
    }
  `,

  BannerName: styled.h3`
    padding-bottom: ${pxToRem(20)};
  `,

  BannerButton: styled(Button)`
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

    @media ${device.mobileS} {
      border: 0.5px solid var(--gray-300);
    }

    @media ${device.mobileXXS} {
      display: flex;
    }
  `,

  ProductWrapper: styled(Link)`
    display: flex;
    justify-content: space-between;

    padding: ${pxToRem(20)} ${pxToRem(1)} ${pxToRem(20)} ${pxToRem(16)};
    border: 0.5px solid var(--gray-300);

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

  ProductPrice: styled.span`
    display: flex;
    width: ${pxToRem(60)};

    font-size: var(--text-xxs);
    color: var(--gray-500);
  `,

  MobileButton: styled(Button)`
    display: none;

    @media ${device.mobileS} {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;

      border: none;
      border-bottom: 1px solid var(--gray-300);

      padding: ${pxToRem(20)};
    }
  `,
};

