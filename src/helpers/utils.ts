export type RandomNum = { min: number; max: number };

export const getRandomNumber = (
  min: RandomNum["min"],
  max: RandomNum["max"]
) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getTime = () => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time;
};
