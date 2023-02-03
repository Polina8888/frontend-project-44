import greeting from '../cli.js';
import { getRandomNumber } from '../math.js';
import { getPlayerAnswer, checkingForCorrectAnswer } from '../index.js';

export default () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber();
    const playerAnswer = getPlayerAnswer(num);
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    if (!checkingForCorrectAnswer(correctAnswer, playerAnswer, i, name)) {
      break;
    }
  }
};
