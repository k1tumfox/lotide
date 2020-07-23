const eqArrays = function(array1, array2) {
  let matchIndicator = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return matchIndicator;//true or false
};

const assertArraysEqual = function(a1, a2) {
  console.log(eqArrays(a1, a2));
};

//return all the indices in the string where each i is found
//for each i, multiple numbers may be needed to represent all the places in the string
// it shows up.  Test with "hello".  Use assertArraysEqual to compare the 4 letters and
//their expected positions.

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
    
  }
  return results;
};
//answer:
let checkValue =
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

const userInput = process.argv.slice(2);
const original = letterPositions(userInput.toString());
assertArraysEqual(checkValue['h'], original['h']);



/*
const original = letterPositions('hello');
let greet = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};
assertArraysEqual(greet['l'], original['l']);
 */
