"use client";

import { servicesSectionStyles as S } from "./styles/servicesSectionStyles";
import { servicesSectionData } from "./data";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <S.ServicesContainer>
      <S.ServicesSectionTitle>Our extra services</S.ServicesSectionTitle>
      <S.ServicesWrapper>
        {servicesSectionData.map((item) => {
          return (
            <S.ServiceWrapper key={item.title} href={"/"}>
              <Image
                src={item.image}
                width={280}
                height={120}
                alt={"service_image"}
              />
              <S.IconWrapper>
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt={"service_icon"}
                />
              </S.IconWrapper>
              <S.BlockText>{item.title}</S.BlockText>
            </S.ServiceWrapper>
          );
        })}
      </S.ServicesWrapper>
    </S.ServicesContainer>
  );
};
