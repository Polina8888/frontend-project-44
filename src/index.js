import readlineSync from 'readline-sync';

export const getPlayerAnswer = (question) => {
  console.log(`Question: ${question}`);
  const playerAnswer = Number(readlineSync.question('Your answer: '));
  return playerAnswer;
};

export const checkingForCorrectAnswer = (correctAnswer, playerAnswer, rounds, name) => {
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  if (rounds === 2) console.log(`Congratulations, ${name}!`);
  return true;
};
