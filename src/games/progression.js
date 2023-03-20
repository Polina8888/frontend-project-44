import getRandomNumber from '../math.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const hiddenElementIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
