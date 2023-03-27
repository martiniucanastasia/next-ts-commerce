import styled from "styled-components";
import { pxToRem } from "@/styles/_common";

export const dealsAndOffersStyles = {
  GeneralWrapper: styled.div`
    display: flex;
    border: 1px solid var(--gray-300);
    border-radius: ${pxToRem(6)};
  `,

  DealsAndOffersWrapper: styled.div`
    padding: ${pxToRem(20)};
  `,

  DealsAndOffersTextWrapper: styled.div`
    padding-bottom: ${pxToRem(18)};
  `,

  DealsAndOffersTitle: styled.h4`
    font-size: var(--text-l);
    font-weight: 600;
  `,

  DealsAndOffersText: styled.p`
    color: var(--gray-500);
  `,
  
  CountdownWrapper: styled.div`
    display: flex;

    gap: ${pxToRem(6)};
  `,

  Countdown: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray-600);
    color: white;

    border-radius: ${pxToRem(4)};
    padding: ${pxToRem(10)} ${pxToRem(8)};
  `,
};
