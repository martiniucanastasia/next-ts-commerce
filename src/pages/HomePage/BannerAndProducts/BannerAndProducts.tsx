"use client";

import { Product } from "@/types/types";
import { bannerAndProductsStyles as S } from "./styles/bannerAndProductsStyles";
import { bannerMapper } from "./data";

import Image from "next/image";
import ArrowRight from "../../../../src/assets/svg/icon/control/arrow_forward.svg";

const BannerAndProductsBlock = ({
  products,
  title,
  image,
  category,
}: {
  products: Product[];
  title: string;
  image: string;
  category: string;
}) => {
  return (
    <S.BlockWrapper>
      <S.BannerAndProductsWrapper>
        <S.BannerWrapper>
          <S.InfoWrapper>
            <S.BannerName>{title}</S.BannerName>
            <S.BannerButton variant="secondary">Shop now</S.BannerButton>
          </S.InfoWrapper>
          <Image src={image} width={280} height={257} alt={"Banner"} />
        </S.BannerWrapper>

        <S.ProductsWrapper>
          {products
            .filter((product) => product.category === category)
            .slice(0, 8)
            .map((product) => (
              <S.ProductWrapper key={product.id} href={"/"}>
                <S.ProductInfo>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>From USD {product.price}</S.ProductPrice>
                </S.ProductInfo>
                <Image
                  src={product.image}
                  width={80}
                  height={80}
                  alt={product.name}
                />
              </S.ProductWrapper>
            ))}
        </S.ProductsWrapper>
      </S.BannerAndProductsWrapper>
      <S.MobileButton variant="secondary">
        Shop now
        <ArrowRight />
      </S.MobileButton>
    </S.BlockWrapper>
  );
};

export const BannerAndProducts = ({ products }: { products: Product[] }) => {
  return (
    <S.BannerAndProductsContainer>
      <S.BannerAndProductsBody>
        <BannerAndProductsBlock
          products={products}
          title={bannerMapper.BannerName[0]}
          image={bannerMapper.BannerImage[0]}
          category={bannerMapper.ProductCategory[0]}
        />
        <BannerAndProductsBlock
          products={products}
          title={bannerMapper.BannerName[1]}
          image={bannerMapper.BannerImage[1]}
          category={bannerMapper.ProductCategory[1]}
        />
      </S.BannerAndProductsBody>
    </S.BannerAndProductsContainer>
  );
};
