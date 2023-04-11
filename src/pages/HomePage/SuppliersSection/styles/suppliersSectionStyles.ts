import styled from "styled-components";
import Link from "next/link";
import { Container, pxToRem } from "@/styles/_common";
import { device } from "@/styles/_sizes";

export const suppliersSectionStyles = {
  SuppliersContainer: styled(Container)`
    @media ${device.mobileXXS} {
      padding: 0 ${pxToRem(10)};
    }
  `,

  SuppliersSectionTitle: styled.h4`
    padding: ${pxToRem(30)} 0 ${pxToRem(25)} 0;
  `,

  SuppliersWrapper: styled.ul`
    display: flex;
    justify-content: flex-start;

    flex-wrap: wrap;

    gap: ${pxToRem(18)};

    @media ${device.mobileXS} {
      justify-content: center;
    }
  `,

  SupplierWrapper: styled.li`
    display: flex;
    align-items: center;

    width: ${pxToRem(221)};
  `,

  SupplierInfo: styled.div`
    display: flex;
    flex-direction: column;

    margin-left: ${pxToRem(10)};
  `,

  SiteLink: styled(Link)`
    font-size: var(--text-xxs);
    color: var(--gray-500);
  `,
};
