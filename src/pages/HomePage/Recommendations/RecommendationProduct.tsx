import Image from "next/image";
import { Product } from "@/types/types";
import { recommendationSectionStyles as S } from "./styles/recommendationSectionStyles";

export const RecommendationProduct = ({ item }: { item: Product }) => {
  return (
    <S.ProductWrapper href="/">
      <Image src={item.image} width={200} height={200} alt={item.name} />
      <S.ProductInfoBlock>
        <S.ProductPrice>${item.price.toFixed(2)}</S.ProductPrice>
        <S.ProductInfo>{item.brand}</S.ProductInfo>
        <S.ProductInfo>{item.seller}</S.ProductInfo>
      </S.ProductInfoBlock>
    </S.ProductWrapper>
  );
};
