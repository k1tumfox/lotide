
const eqArrays = function(array1, array2) {
  let matchIndicator = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return matchIndicator;//true or false
}

const assertArraysEqual = function(a1, a2) {
  console.log(eqArrays(a1, a2));
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3, '2'], [1, 3, 2]);

/* 
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
 */