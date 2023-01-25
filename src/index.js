import readlineSync from 'readline-sync';
import greeting from './cli.js';

const playerName = greeting();

const checkingForCorrectAnswer = (task, question, correctAnswer) => {
    console.log(task);
    console.log(`Question: ${question}`);
    const playerAnswer = Number(readlineSync.question('Your answer: '));

    if (playerAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(typeof playerAnswer);
        console.log(typeof correctAnswer);
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
    }
    return playerAnswer;
};
const gameProcess = (task, question, correctAnswer) => {
    let roundsCount = 0;
    const rounds = 3;
    while (roundsCount !== rounds) {
        const playerAnswer = checkingForCorrectAnswer(task, question, correctAnswer);

        if (playerAnswer !== correctAnswer) {
            break;
        }
        roundsCount += 1;
    }

    if (roundsCount === rounds) {
        console.log(`Congratulations, ${playerName}!`);
    }
};
export default gameProcess;
