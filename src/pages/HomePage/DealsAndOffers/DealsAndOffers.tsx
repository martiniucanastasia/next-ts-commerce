"use client";

import { Container } from "@/styles/_common";
import { Product } from "@/types/types";
import { getRandomNumber, getTime } from "@/helpers/utils";
import { dealsAndOffersStyles as S } from "./styles/dealsAndOffersStyles";
import { createElement, useEffect, useState } from "react";
import Image from "next/image";

export interface DealsAndOffersProps {
  products: Product[];
}

export const DealsAndOffers = ({ products }: DealsAndOffersProps) => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [salePercentage, setSalePercentage] = useState("");

  useEffect(() => {
    setDay(getRandomNumber(1, 10));
    setTime(getTime());
    setSalePercentage(getRandomNumber(10, 50));
  }, []);

  const splittedTime = time.split(":");

  return (
    <Container>
      <br />
      <S.GeneralWrapper>
        <S.DealsAndOffersWrapper>
          <S.DealsAndOffersInfoWrapper>
            <S.DealsAndOffersTitle>Deals and offers</S.DealsAndOffersTitle>
            <S.DealsAndOffersText>Hygiene equipments</S.DealsAndOffersText>
          </S.DealsAndOffersInfoWrapper>

          <S.CountdownWrapper>
            <S.Countdown>
              <S.CountNumber>{day}</S.CountNumber>
              <S.CountValue>Days</S.CountValue>
            </S.Countdown>
            <S.Countdown>
              <S.CountNumber>{splittedTime[0]}</S.CountNumber>
              <S.CountValue>Hour</S.CountValue>
            </S.Countdown>
            <S.Countdown>
              <S.CountNumber>{splittedTime[1]}</S.CountNumber>
              <S.CountValue>Min</S.CountValue>
            </S.Countdown>
            <S.Countdown>
              <S.CountNumber>{splittedTime[2]}</S.CountNumber>
              <S.CountValue>Sec</S.CountValue>
            </S.Countdown>
          </S.CountdownWrapper>
        </S.DealsAndOffersWrapper>

        <S.ProductsWrapper className="Products">
          {products.slice(0, 15).map((item) => {
            return (
              <S.ProductWrapper key={item.id}>
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
    </Container>
  );
};
