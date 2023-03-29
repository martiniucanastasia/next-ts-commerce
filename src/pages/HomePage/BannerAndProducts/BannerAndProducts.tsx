"use client";

import { Product } from "@/types/types";
import { bannerAndProductsStyles as S } from "./styles/bannerAndProductsStyles";

import Image from "next/image";
import ArrowRight from "../../../../src/assets/svg/icon/control/arrow_forward.svg";

interface BannerAndProductsProps {
  products: Product[];
}

export const BannerAndProducts = ({ products }: BannerAndProductsProps) => {
  return (
    <S.BannerAndProductsContainer>
      <S.BannerAndProductsBody>
        <S.BlockWrapper>
          <S.BannerAndProductsWrapper>
            <S.BannerWrapper>
              <S.InfoWrapper>
                <S.BannerName>Home and outdoor</S.BannerName>
                <S.BannerButton variant="secondary">Shop now</S.BannerButton>
              </S.InfoWrapper>
              <Image
                src={"/home_banner_top.jpg"}
                width={280}
                height={257}
                alt={"Banner top"}
              />
            </S.BannerWrapper>

            <S.ProductsWrapper>
              {products
                .filter((product) => product.category === "Home")
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

        <S.BlockWrapper>
          <S.BannerAndProductsWrapper>
            <S.BannerWrapper>
              <Image
                src={"/home_banner_down.jpg"}
                width={280}
                height={257}
                alt={"Banner down"}
              />
              <S.InfoWrapper>
                <S.BannerName>Consumer electronics and gadgets</S.BannerName>
                <S.BannerButton variant="secondary">Shop now</S.BannerButton>
              </S.InfoWrapper>
            </S.BannerWrapper>

            <S.ProductsWrapper>
              {products
                .filter((product) => product.category === "Tech")
                .slice(0, 8)
                .map((product) => (
                  <S.ProductWrapper key={product.id} href={"/"}>
                    <div>
                      <S.ProductName>{product.name}</S.ProductName>
                      <S.ProductPrice>From USD {product.price}</S.ProductPrice>
                    </div>
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
      </S.BannerAndProductsBody>
    </S.BannerAndProductsContainer>
  );
};
