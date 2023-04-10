"use client";

import { Button } from "../UI/Buttons/Button";
import { subscribeSectionStyles as S } from "./styles/subscribeSectionStyles";
import EmailSvg from "../../../src/assets/svg/icon/general/email.svg";
import { Container } from "@/styles/_common";

export const SubscribeSection = () => {
  return (
    <S.SubscribeSection>
      <Container>
        <S.SubscribeTitle>Subscribe to our newsletter</S.SubscribeTitle>
        <S.SubscribeText>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </S.SubscribeText>

        <S.SubscribeForm>
          <S.InputWrapper>
            <S.SubscribeInput placeholder="Email" type="email" required />
            <EmailSvg />
          </S.InputWrapper>
          <Button>Subscribe</Button>
        </S.SubscribeForm>
      </Container>
    </S.SubscribeSection>
  );
};
