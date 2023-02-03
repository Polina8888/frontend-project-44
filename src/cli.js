import readlineSync from 'readline-sync';

export default (description = '') => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (description !== '') console.log(description);
  return name;
};
