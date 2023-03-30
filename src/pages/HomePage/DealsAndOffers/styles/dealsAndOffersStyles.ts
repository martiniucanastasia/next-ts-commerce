import styled from "styled-components";
import { Container, pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";
import Link from "next/link";

export const dealsAndOffersStyles = {
  DealsAndOffersContainer: styled(Container)`
    @media ${device.mobileS} {
      padding: 0;
    }
  `,
  GeneralWrapper: styled.div`
    display: flex;

    border: 1px solid var(--gray-300);
    border-radius: ${pxToRem(6)};
    margin-bottom: ${pxToRem(22)};

    background-color: white;

    @media ${device.mobileS} {
      flex-direction: column;
      margin-bottom: ${pxToRem(10)} 0;
    }
  `,

  DealsAndOffersWrapper: styled.div`
    display: flex;
    flex-direction: column;

    border-right: 1px solid var(--gray-300);
    padding: ${pxToRem(20)} ${pxToRem(63)} ${pxToRem(20)} ${pxToRem(20)};

    @media ${device.mobileS} {
      flex-direction: row;
      justify-content: space-between;

      border-right: 0;

      padding: ${pxToRem(15)} ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(15)};
    }
  `,

  DealsAndOffersInfoWrapper: styled.div`
    padding-bottom: ${pxToRem(18)};

    @media ${device.mobileS} {
      padding: 0;
    }
  `,

  DealsAndOffersTitle: styled.h4`
    @media ${device.mobileXXS} {
      font-size: var(--text-m);
    }
  `,

  DealsAndOffersText: styled.p`
    color: var(--gray-500);

    @media ${device.mobileXXS} {
      font-size: var(--text-xs);
    }
  `,

  CountdownWrapper: styled.ul`
    display: flex;

    gap: ${pxToRem(6)};
  `,

  Countdown: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray-600);
    color: white;
    
    min-width: ${pxToRem(45)};
    border-radius: ${pxToRem(4)};
    padding: ${pxToRem(8)};

    @media ${device.mobileS} {
      max-height: ${pxToRem(45)};

      background-color: var(--gray-200);
      color: var(--gray-500);

      border-radius: 0;
      padding: ${pxToRem(6)} ${pxToRem(9)};

      :first-child {
        display: none;
      }
    }
  `,

  ExpiredAlert: styled.p`
    font-weight: 500;
    color: var(--danger);
    text-align: center;
  `,

  CountNumber: styled.p`
    font-weight: 700;

    @media ${device.mobileS} {
      font-weight: 600;
    }
  `,

  CountLabel: styled.span`
    font-size: var(--text-xxs);
  `,

  ProductsWrapper: styled.div`
    display: flex;

    overflow-x: auto;

    @media ${device.mobileS} {
      border-width: 1px 0 1px 0;
      border-style: solid;
      border-color: var(--gray-300);
    }
  `,

  ProductWrapper: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: ${pxToRem(179)};

    border-right: 1px solid var(--gray-300);

    padding: ${pxToRem(8)} ${pxToRem(20)} ${pxToRem(17)} ${pxToRem(20)};

    :last-child {
      border-right: 0;
    }
  `,

  ProductName: styled.p`
    width: ${pxToRem(150)};
    text-align: center;
    padding: ${pxToRem(10)} 0;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,

  SaleWrapper: styled.div`
    text-align: center;

    background-color: var(--danger-100);
    color: var(--danger);
    border-radius: ${pxToRem(30)};

    font-weight: 500;
    font-size: var(--text-xs);
    padding: ${pxToRem(5)} ${pxToRem(13)};
  `,
};
