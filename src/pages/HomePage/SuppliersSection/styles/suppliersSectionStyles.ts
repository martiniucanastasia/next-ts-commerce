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

    @media ${device.mobileXXS} {
      font-size: var(--text-m);
    }
  `,

  SuppliersWrapper: styled.ul`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    gap: ${pxToRem(18)};

    @media ${device.mobile} {
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

    padding-left: ${pxToRem(10)};
  `,

  CountryName: styled.p``,

  SiteLink: styled(Link)`
    font-size: var(--text-xxs);
    color: var(--gray-500);
  `,
};
