const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let x = [1, 2, 3, 4, 5, 6];
console.log(middle(x));
console.log("1 element gives blank array", assertArraysEqual([7], middle([1, 7, 3])));