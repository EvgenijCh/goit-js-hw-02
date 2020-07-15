'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  const number = Number(input);
  if (number) {
    numbers.push(number);
  }
}
for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
