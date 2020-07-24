
const map = function(array, callback) {
  
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

//testing functions
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
/* const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1); */

const jumble = ['all', 'I', 'ever', 'wanted'];
console.log(map(jumble, jumb => jumb[jumb.length - 1]));
//output: ['l', 'I', 'r', 'd']
console.log('------');
assertArraysEqual(['l', 'I', 'r', 'd'], map(jumble, jumb => jumb[jumb.length - 1]));

const numble = [1,5,8,7];
console.log(map(numble, numb => numb * 3));
//output: [3, 15, 24, 21]
console.log('------');
assertArraysEqual([3, 15, 24, 21], map(numble, numb => numb * 3));

