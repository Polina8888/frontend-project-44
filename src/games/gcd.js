import getRandomNumber from '../math.js';
import run from '../index.js';

const getGcd = (num1, num2) => {
  let lowestNumber = 0;
  if (num1 > num2) {
    lowestNumber = num2;
  } else {
    lowestNumber = num1;
  }
  const diffNumber = Math.abs(num1 - num2);

  if (num1 === num2) {
    return lowestNumber;
  }

  return getGcd(lowestNumber, diffNumber);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
