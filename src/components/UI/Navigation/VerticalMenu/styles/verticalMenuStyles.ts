import styled from "styled-components";
import { pxToRem } from "@/styles/_common";
import Link from "next/link";

export const VerticalMenuStyles = {
  UnicCategory: styled(Link)`
    display: flex;
    flex-direction: column;

    padding: ${pxToRem(10)};
    border-radius: ${pxToRem(6)};
    color: var(--gray-600);

    font-size: var(--text-s);
    font-weight: 400;

    transition: background-color 0.3s linear;
    cursor: pointer;

    :hover {
      background-color: var(--primary-100);
      color: var(--gray-700);
      font-weight: 500;
    }
  `,
};
