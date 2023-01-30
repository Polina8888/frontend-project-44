import getRandomNumber from '../math.js';
import greeting from '../cli.js';
import { checkingForCorrectAnswer, getPlayerAnswer } from '../index.js';

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

export default () => {
  const name = greeting('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const playerAnswer = Number(getPlayerAnswer(question));
    const correctAnswer = getGcd(num1, num2);
    if (!checkingForCorrectAnswer(correctAnswer, playerAnswer, i, name)) {
      break;
    }
  }
};
