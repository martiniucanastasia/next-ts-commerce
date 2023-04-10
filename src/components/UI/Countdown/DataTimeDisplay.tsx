import { dealsAndOffersStyles as S } from "@/pages/HomePage/DealsAndOffers/styles/dealsAndOffersStyles";

export const DateTimeDisplay = ({
  value,
  type,
}: {
  value: number;
  type: string;
}) => {
  return (
    <S.Countdown>
      <S.CountNumber>{value}</S.CountNumber>
      <S.CountLabel>{type}</S.CountLabel>
    </S.Countdown>
  );
};
