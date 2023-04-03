"use client";

import Image from "next/image";
import { Product } from "@/types/types";
import { recommendationSectionStyles as S } from "./styles/recommendationSectionStyles";

const ProductsRow = ({ products }: { products: Product[] }) => {
  return (
    <S.RecommendProductsWrapper>
      {products.slice(0, 10).map((item) => {
        return (
          <S.ProductWrapper key={item.id}>
            <Image src={item.image} width={200} height={200} alt={item.name} />
            <S.ProductInfoBlock>
              <S.ProductPrice>${item.price}</S.ProductPrice>
              <S.ProductInfo>{item.brand}</S.ProductInfo>
              <S.ProductInfo>{item.seller}</S.ProductInfo>
            </S.ProductInfoBlock>
          </S.ProductWrapper>
        );
      })}
    </S.RecommendProductsWrapper>
  );
};

export const RecommendationSection = ({
  products,
}: {
  products: Product[];
}) => {
  return (
    <S.RecommendContainer>
      <S.RecommendSectionTitle>Recommended items</S.RecommendSectionTitle>
      <ProductsRow products={products} />
    </S.RecommendContainer>
  );
};
