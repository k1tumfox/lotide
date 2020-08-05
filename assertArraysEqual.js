const eqArrays = require('./eqArrays');

const assertArraysEqual = function(a1, a2) {
  console.log(eqArrays(a1, a2));
};

/* 
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};
 */
module.exports = assertArraysEqual;