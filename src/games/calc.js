import { getRandomNumber } from '../math.js';
import greeting from '../cli.js';
import { checkingForCorrectAnswer, getPlayerAnswer } from '../index.js';

const getRandomOperator = () => {
  const operators = '+-*';
  const randomIndex = getRandomNumber(0, operators.length - 1);

  return operators[randomIndex];
};
const getCorrectAnswer = (num1, num2, operator) => {
  let result = 0;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  return result;
};

export default () => {
  const name = greeting('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const playerAnswer = Number(getPlayerAnswer(question));
    const correctAnswer = getCorrectAnswer(num1, num2, operator);
    if (!checkingForCorrectAnswer(correctAnswer, playerAnswer, i, name)) {
      break;
    }
  }
};
