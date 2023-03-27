"use client";

import { Container } from "@/styles/_common";
import { Product } from "@/types/types";
import { getRandomNumber, getTime } from "@/helpers/utils";
import {
  dealsAndOffersStyles as S,
  Countdown,
} from "./styles/dealsAndOffersStyles";
import { useEffect, useState } from "react";

export interface DealsAndOffersProps {
  products: Product[];
}

export const DealsAndOffers = ({ products }: DealsAndOffersProps) => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setDay(getRandomNumber(1, 10));
    setTime(getTime());
  }, []);

  const splittedTime = time.split(":");

  return (
    <Container>
      <S.GeneralWrapper>
        <S.DealsAndOffersWrapper>
          <S.DealsAndOffersTextWrapper>
            <S.DealsAndOffersTitle>Deals and offers</S.DealsAndOffersTitle>
            <S.DealsAndOffersText>Hygiene equipments</S.DealsAndOffersText>
          </S.DealsAndOffersTextWrapper>

          <S.CountdownWrapper>
            <S.Countdown>
              <p>{day}</p>
              <span>Days</span>
            </S.Countdown>
            <S.Countdown>
              <p>{splittedTime[0]}</p>
              <span>Hour</span>
            </S.Countdown>
            <S.Countdown>
              <p>{splittedTime[1]}</p>
              <span>Min</span>
            </S.Countdown>
            <S.Countdown>
              <p>{splittedTime[2]}</p>
              <span>Sec</span>
            </S.Countdown>
          </S.CountdownWrapper>
        </S.DealsAndOffersWrapper>

        {/* 
        <div className="Products">
          {products.slice(0, 5).map((item) => {
            return (
              <div key={item.id} style={{ width: "200px" }}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div> */}
      </S.GeneralWrapper>
    </Container>
  );
};
