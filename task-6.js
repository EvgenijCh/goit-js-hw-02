'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введи число');
  if (input !== null) {
    numbers.push(Number(input));
  }
  if (Number.isNaN(+input)) {
    alert('Было введено не число,попробуйте еще раз');
  }
} while (input !== null);
if (numbers.length !== 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
