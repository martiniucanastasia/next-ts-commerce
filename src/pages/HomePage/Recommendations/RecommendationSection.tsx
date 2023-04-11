"use client";

import { Product } from "@/types/types";
import { RecommendationProduct } from "./RecommendationProduct";
import { recommendationSectionStyles as S } from "./styles/recommendationSectionStyles";

const ProductsRow = ({ products }: { products: Product[] }) => {
  return (
    <S.RecommendProductsWrapper>
      {products.slice(0, 10).map((item) => {
        return <RecommendationProduct item={item} key={item.id} />;
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
