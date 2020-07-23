'use strict';

const findLongestWord = function (string) {
  let words = string.split(' ');
  let max = 0;
  let longestWord;

  for (const wordsLength of words) {
    let wordLength = wordsLength.length;
    if (wordLength > max) {
      max = wordLength;
      longestWord = wordsLength;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
