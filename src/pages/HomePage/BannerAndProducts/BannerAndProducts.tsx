"use client";

import { Product, BannersInfo } from "@/types/types";
import { bannerAndProductsStyles as S } from "./styles/bannerAndProductsStyles";

import Image from "next/image";
import ArrowRight from "@/assets/svg/icon/control/arrow_forward.svg";

export const BannerAndProducts = ({
  products,
  bannersInfo,
}: {
  products: Product[];
  bannersInfo: BannersInfo;
}) => {
  return (
    <S.BannerAndProductsContainer>
      <S.BannerAndProductsBody>
        {bannersInfo.map((banner) => {
          return (
            <BannerAndProductsBlock
              key={banner.id}
              products={products}
              title={banner.name}
              image={banner.image}
              category={banner.category}
            />
          );
        })}
      </S.BannerAndProductsBody>
    </S.BannerAndProductsContainer>
  );
};
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
            <S.Link href="/categories?">
              <S.BannerLinkButton variant="secondary">
                Shop now
              </S.BannerLinkButton>
            </S.Link>
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
                  <S.ProductPriceBlock>
                    <S.ProductPrice>From</S.ProductPrice>
                    <S.ProductPrice>USD {product.price}</S.ProductPrice>
                  </S.ProductPriceBlock>
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
      <S.Link href="/categories?">
        <S.MobileButton variant="secondary">
          Shop now
          <ArrowRight />
        </S.MobileButton>
      </S.Link>
    </S.BlockWrapper>
  );
};
