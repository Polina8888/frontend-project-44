import readlineSync from 'readline-sync';
import getName from './cli.js';

const run = (generateRound, description) => {
  const name = getName();
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsToWin = 3;
  for (let rounds = 1; rounds <= roundsToWin; rounds += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
    if (rounds === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default run;
