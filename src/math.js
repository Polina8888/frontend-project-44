const getRandomNumber = (min = 0, max = 100) => {
  const result = Math.floor(min + Math.random() * (max + 1 - min));
  return result;
};
export default getRandomNumber;
