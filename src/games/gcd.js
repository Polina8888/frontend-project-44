import getRandomNumber from '../math.js';
import run from '../index.js';

const getGcd = (x, y) => ((y === 0) ? x : getGcd(y, x % y));

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
