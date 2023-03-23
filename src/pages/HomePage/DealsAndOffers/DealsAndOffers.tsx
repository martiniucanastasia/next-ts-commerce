"use client";

import { Container } from "@/styles/_common";
import { Product } from "@/types/types";
import { getRandomNumber, getTime } from "@/helpers/utils";
import { dealsAndOffersStyles as S } from "./styles/dealsAndOffersStyles";

export interface DealsAndOffersProps {
  products: Product[];
}

export const DealsAndOffers = ({ products }: DealsAndOffersProps) => {
  return (
    <Container>
      <S.GeneralWrapper>
        <S.DealsAndOffersWrapper className="OffersEnd">
          <div className="Text">
            <p>Deals and offers</p>
            <p>Hygiene equipments</p>
          </div>
          <div className="Time">
            <div>{getTime()}</div>
            <div>{getRandomNumber(1, 31)}</div>
          </div>
        </S.DealsAndOffersWrapper>

        <div className="Products">
          {products.slice(0, 5).map((item) => {
            return (
              <div key={item.id} style={{ width: "200px" }}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </S.GeneralWrapper>
    </Container>
  );
};
