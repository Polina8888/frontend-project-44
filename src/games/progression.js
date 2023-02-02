import { getRandomNumber, getRandomIndex } from '../math.js';
import { checkingForCorrectAnswer, getPlayerAnswer } from '../index.js';
import greeting from '../cli.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};
export default () => {
  const name = greeting(description);

  for (let i = 0; i < 3; i += 1) {
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(2, 10);
    const length = getRandomNumber(5, 10);
    const progression = getProgression(start, step, length);
    const hiddenElementIndex = getRandomIndex(progression);
    const correctAnswer = String(progression[hiddenElementIndex]);
    progression[hiddenElementIndex] = '..';
    const question = progression.join(' ');
    const playerAnswer = getPlayerAnswer(question);
    if (!checkingForCorrectAnswer(correctAnswer, playerAnswer, i, name)) {
      break;
    }
  }
};
