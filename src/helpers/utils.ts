export type RandomNum = { min: number; max: number };

export const getRandomNumber = (
  min: RandomNum["min"],
  max: RandomNum["max"]
) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  if (randomNum < 10) {
    return `0${randomNum}`;
  } else {
    return randomNum.toString();
  }
};

export const getTime = () => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time;
};
