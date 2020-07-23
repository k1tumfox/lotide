const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

//count letters in sentence, can use for...of loops with strings
const countLetters = function(sentence) {
  const letterTally = {};
  for (let letter of sentence) {
    if (letter !== ' ') {        //if current letter of string is not a space
      if (letterTally[letter]) {
        letterTally[letter]++; //create and populate key:value pair in new obj letterTally
      } else {
        letterTally[letter] = 1; //create and populate key:value pair in new obj letterTally
      }
    }

  }
  return letterTally;
};

// let x = "the quick brown fox jumps over the lazy dog";
// console.log(countLetters(x));

const userInput = process.argv.slice(2);
console.log(countLetters(userInput.toString()));