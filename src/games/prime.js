import getRandomNumber from '../math.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkForPrimeNumber = (num) => {
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  return result;
};

const generateRound = () => {
  const num = getRandomNumber(2, 100);
  const correctAnswer = checkForPrimeNumber(num);
  const question = num;
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
