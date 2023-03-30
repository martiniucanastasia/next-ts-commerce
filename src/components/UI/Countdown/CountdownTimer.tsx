import { useCountdown } from "@/hooks/useCountdown";
import { DateTimeDisplay } from "./DataTimeDisplay";
import { dealsAndOffersStyles as S } from "@/pages/HomePage/DealsAndOffers/styles/dealsAndOffersStyles";
import { currentOffer } from "@/types/types";

const NOW_IN_MS = new Date().getTime();

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
  labels,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  labels: string[];
}) => {
  return (
    <S.CountdownWrapper>
      <DateTimeDisplay value={days} type={labels[0]} />
      <DateTimeDisplay value={hours} type={labels[1]} />
      <DateTimeDisplay value={minutes} type={labels[2]} />
      <DateTimeDisplay value={seconds} type={labels[3]} />
    </S.CountdownWrapper>
  );
};

export const CountdownTimer = ({
  targetData,
}: {
  targetData: currentOffer;
}) => {
  const timeFromServer = (targetData: currentOffer) => {
    return targetData.map((item: any) => item[Object.keys(item)[0]]);
  };

  const labelsFromServer = (targetData: currentOffer) => {
    return targetData.map((item: any) => item[Object.keys(item)[1]]);
  };

  const multiplyOfferTime = (array: number[]) => {
    return array.reduce((acc: number, curr: number) => acc * curr, 1) * 1000;
  };

  const targetDate = NOW_IN_MS + multiplyOfferTime(timeFromServer(targetData));

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <S.ExpiredAlert>
        Offer is expired! Come back soon for new deals! &#128523;
      </S.ExpiredAlert>
    );
  } else {
    return (
      <ShowCounter
        labels={labelsFromServer(targetData)}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
