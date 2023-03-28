"use client";

import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import { dealsAndOffersStyles as S } from "./styles/dealsAndOffersStyles";
import Image from "next/image";

interface DealsAndOffersProps {
  products: Product[];
}

type RandomNumberGenerator = (min: number, max: number) => string;

const getRandomNumber: RandomNumberGenerator = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomNum < 10) {
    return `0${randomNum}`;
  } else {
    return randomNum.toString();
  }
};

const getTime = () => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time;
};

export const DealsAndOffers = ({ products }: DealsAndOffersProps) => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [salePercentage, setSalePercentage] = useState("");

  useEffect(() => {
    setTime(getTime());
    setDay(getRandomNumber(1, 10));
    setSalePercentage(getRandomNumber(10, 40));
  }, []);

  const splittedTime = time.split(":");

  useEffect(() => {
    const interval = setInterval(() => {
      const [hour, min, sec] = splittedTime;

      if (parseInt(sec) > 0) {
        splittedTime[2] = (parseInt(sec) - 1).toString();
      } else if (parseInt(min) > 0) {
        splittedTime[1] = (parseInt(min) - 1).toString();
        splittedTime[2] = "59";
      } else if (parseInt(hour) > 0) {
        splittedTime[0] = (parseInt(hour) - 1).toString();
        splittedTime[1] = "59";
        splittedTime[2] = "59";
      } else {
        clearInterval(interval);
      }

      setTime(splittedTime.join(":"));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <S.DealsAndOffersContainer>
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
          {products.slice(0, 10).map((item) => {
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
    </S.DealsAndOffersContainer>
  );
};
