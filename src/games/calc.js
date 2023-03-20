import getRandomNumber from '../math.js';
import run from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
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

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getCorrectAnswer(num1, num2, operator));
  return [question, correctAnswer];
};

export default () => run(generateRound, description);
