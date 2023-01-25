#!/usr/bin/env node
import gameProcess from '../src/index.js';
import getRandomNumber from '../src/utils/getRandomNumber.js';

const task = 'What is the result of the expression?';
const num1 = getRandomNumber();
const num2 = getRandomNumber();
const operators = '+-*';
const randomIndex = getRandomNumber(0, operators.length - 1);
const question = `${num1} ${operators[randomIndex]} ${num2}`;
let correctAnswer = '';

switch (randomIndex) {
    case 0:
        correctAnswer = num1 + num2;
        break;

    case 1:
        correctAnswer = num1 - num2;
        break;
        
    case 2:
        correctAnswer = num1 * num2;
        break;

    default:
        throw new Error(`unexpected operator index: ${randomIndex}`);
}

gameProcess(task, question, correctAnswer);
