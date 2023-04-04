"use client";

import { Suppliers } from "@/types/types";
import { suppliersSectionStyles as S } from "./styles/suppliersSectionStyles";
import Image from "next/image";

export const SuppliersSection = ({ suppliers }: { suppliers: Suppliers }) => {
  return (
    <S.SuppliersContainer>
      <S.SuppliersSectionTitle>Suppliers by region</S.SuppliersSectionTitle>
      <S.SuppliersWrapper>
        {suppliers.map((item) => {
          return (
            <S.SupplierWrapper key={item.value}>
              <Image src={item.icon} width={28} height={20} alt={item.label} />
              <S.SupplierInfo>
              <S.CountryName>{item.label}</S.CountryName>
              <S.SiteLink href={"/"}>{item.site}</S.SiteLink>
              </S.SupplierInfo>
            </S.SupplierWrapper>
          );
        })}
      </S.SuppliersWrapper>
    </S.SuppliersContainer>
  );
};
