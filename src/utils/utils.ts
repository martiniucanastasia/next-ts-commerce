type RandomNumberGenerator = (min: number, max: number) => number;

export const getRandomNumber: RandomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
