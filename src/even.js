import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ')

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkingForEvenNumber = () => {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    
    if (playerAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
    
    return [playerAnswer, correctAnswer]; 
};
const brainEven = () => {
    let roundsCount = 0;
    const rounds = 3;

    while (roundsCount !== rounds) {
        const [playerAnswer, correctAnswer] = checkingForEvenNumber();

        if  (playerAnswer !== correctAnswer) {
            break;
        }
        roundsCount += 1;
    };

    if (roundsCount === rounds) {
        console.log(`Congratulations, ${name}!`);
    }
};

export default brainEven;
