import { getRandomNumber } from '../math.js';
import greeting from '../cli.js';
import { checkingForCorrectAnswer, getPlayerAnswer } from '../index.js';

const checkForPrimeNumber = (num) => {
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }
  return result;
};

export default () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(2, 100);
    const playerAnswer = getPlayerAnswer(num);
    const correctAnswer = checkForPrimeNumber(num);
    if (!checkingForCorrectAnswer(correctAnswer, playerAnswer, i, name)) {
      break;
    }
  }
};
