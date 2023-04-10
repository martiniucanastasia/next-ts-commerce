"use client";

import { currentOffer, Product } from "@/types/types";
import { useEffect, useState } from "react";
import { dealsAndOffersStyles as S } from "./styles/dealsAndOffersStyles";
import { getRandomNumber } from "@/utils/utils";
import Image from "next/image";
import dynamic from "next/dynamic";

const CountdownTimer = dynamic(
  () => import("../../../components/UI/Countdown/CountdownTimer"),
  {
    ssr: false,
  }
);

interface DealsAndOffersProps {
  products: Product[];
  currentOffer: currentOffer;
}

export const DealsAndOffers = ({
  products,
  currentOffer,
}: DealsAndOffersProps) => {
  const [salePercentage, setSalePercentage] = useState(0);

  useEffect(() => {
    setSalePercentage(getRandomNumber(10, 40));
  }, []);

  return (
    <S.DealsAndOffersContainer>
      <S.GeneralWrapper>
        <S.DealsAndOffersWrapper>
          <S.DealsAndOffersInfoWrapper>
            <S.DealsAndOffersTitle>Deals and offers</S.DealsAndOffersTitle>
            <S.DealsAndOffersText>Hygiene equipments</S.DealsAndOffersText>
          </S.DealsAndOffersInfoWrapper>
          <CountdownTimer targetData={currentOffer} />
        </S.DealsAndOffersWrapper>

        <S.ProductsWrapper className="Products">
          {products.slice(0, 10).map((item) => {
            return (
              <S.ProductWrapper key={item.id} href={"/"}>
                <Image
                  src={item.image}
                  width={140}
                  height={140}
                  alt={item.name}
                />
                <S.ProductName>{item.name}</S.ProductName>
                <S.SaleWrapper>{`-${salePercentage}%`}</S.SaleWrapper>
              </S.ProductWrapper>
            );
          })}
        </S.ProductsWrapper>
      </S.GeneralWrapper>
    </S.DealsAndOffersContainer>
  );
};
