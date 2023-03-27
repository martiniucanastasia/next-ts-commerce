import styled from "styled-components";
import { pxToRem } from "@/styles/_common";

export const dealsAndOffersStyles = {
  GeneralWrapper: styled.div`
    display: flex;

    border: 1px solid var(--gray-300);
    border-radius: ${pxToRem(6)};
  `,

  DealsAndOffersWrapper: styled.div`
    width: 26%;
    border-right: 1px solid var(--gray-300);
    padding: ${pxToRem(20)};
  `,

  DealsAndOffersInfoWrapper: styled.div`
    padding-bottom: ${pxToRem(18)};
  `,

  DealsAndOffersTitle: styled.h4`
    font-size: var(--text-l);
    font-weight: 600;
  `,

  DealsAndOffersText: styled.p`
    color: var(--gray-500);
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
  `,

  CountNumber: styled.p`
    font-weight: 700;
  `,

  CountValue: styled.span`
    font-size: var(--text-xxs);
  `,

  ProductsWrapper: styled.div`
    display: flex;
    width: 74%;
    overflow-y: auto;
  `,

  ProductWrapper: styled.div`
    text-align: center;
    border-width: 0px 1px 0px 0px;
    border-style: solid;
    border-color: var(--gray-300);

    padding: 8px 20px 17px 20px;
  `,

  ProductName: styled.p`
    padding: 10px 0;

    text-overflow: ellipsis;
    overflow: hidden;

    white-space: nowrap;
  `,

  SaleWrapper: styled.div`
    background-color: var(--danger-100);
    border-radius: 30px;
    font-weight: 500;
    padding: 5px 13px;
    font-size: var(--text-xxs);
    color: var(--danger);
  `,
};
