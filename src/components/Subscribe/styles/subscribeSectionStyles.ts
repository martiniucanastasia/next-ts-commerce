import { Input } from "@/components/UI/Input/Input";
import { pxToRem } from "@/styles/_common";
import styled from "styled-components";

export const subscribeSectionStyles = {
  SubscribeSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background-color: var(--gray-200);

    padding: ${pxToRem(40)} ${pxToRem(15)};
  `,

  SubscribeTitle: styled.h3``,

  SubscribeText: styled.p`
    color: var(--gray-600);

    margin: ${pxToRem(5)} 0 ${pxToRem(20)} 0;
  `,

  SubscribeInput: styled(Input)`
    padding-left: ${pxToRem(35)};
  `,

  InputWrapper: styled.div`
    position: relative;
    width: ${pxToRem(274)};

    svg {
      position: absolute;
      top: ${pxToRem(8)};
      left: ${pxToRem(8)};

      path {
        fill: var(--gray-500);
      }
    }
  `,

  SubscribeForm: styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: ${pxToRem(8)};
  `,
};
