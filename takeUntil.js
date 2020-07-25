const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item);
    } else {
      break;
    }
  }
  return newArray; //Slice of the array with elements taken from the beginning.
          //It should keep going until callback/predicate returns a truthy value.
}

/* const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); */

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
};  //testing functions

const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);

