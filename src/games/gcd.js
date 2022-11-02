import brainGames from '../index.js';
import random from '../utilit.js';

const description = 'Find the greatest common divisor of given numbers';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else { b -= a; }
  }

  return a;
};

const getQuestionAndAnswer = () => {
  const number1 = random(1, 99);
  const number2 = random(1, 99);
  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2);

  return [question, String(result)];
};
export default getQuestionAndAnswer;
brainGames(description, getQuestionAndAnswer);
