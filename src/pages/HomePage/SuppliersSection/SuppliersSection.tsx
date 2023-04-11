"use client";

import { Suppliers } from "@/types/types";
import { suppliersSectionStyles as S } from "./styles/suppliersSectionStyles";
import Image from "next/image";

export const SuppliersSection = ({ suppliers }: { suppliers: Suppliers }) => {
  return (
    <S.SuppliersContainer>
      <S.SuppliersSectionTitle>Suppliers by region</S.SuppliersSectionTitle>
      <S.SuppliersWrapper>
        {suppliers.map(({ value, label, icon, site }) => {
          return (
            <S.SupplierWrapper key={value}>
              <Image src={icon} width={28} height={20} alt={label} />
              <S.SupplierInfo>
                <p>{label}</p>
                <S.SiteLink href={"/"}>{site}</S.SiteLink>
              </S.SupplierInfo>
            </S.SupplierWrapper>
          );
        })}
      </S.SuppliersWrapper>
    </S.SuppliersContainer>
  );
};
