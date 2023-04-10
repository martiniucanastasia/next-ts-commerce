import { useCountdown } from "@/hooks/useCountdown";
import { DateTimeDisplay } from "./DataTimeDisplay";
import { dealsAndOffersStyles as S } from "@/pages/HomePage/DealsAndOffers/styles/dealsAndOffersStyles";
import { currentOffer } from "@/types/types";

const CountdownTimer = ({ targetData }: { targetData: currentOffer }) => {
  const NOW_IN_MS = new Date().getTime();
  const differenceInTime = new Date(targetData.value).getTime() - NOW_IN_MS;

  const targetDate = NOW_IN_MS + differenceInTime;

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  let isExpired = false;

  if (isExpired) {
    return (
      <S.ExpiredAlert>
        Offer is expired! Come back soon for new deals! &#128523;
      </S.ExpiredAlert>
    );
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <S.CountdownWrapper>
      <DateTimeDisplay value={days} type={"Days"} />
      <DateTimeDisplay value={hours} type={"Hour"} />
      <DateTimeDisplay value={minutes} type={"Min"} />
      <DateTimeDisplay value={seconds} type={"Sec"} />
    </S.CountdownWrapper>
  );
};

export default CountdownTimer;
