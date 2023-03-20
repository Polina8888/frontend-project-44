import getRandomNumber from '../math.js';
import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const num = getRandomNumber();
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const question = num;
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
