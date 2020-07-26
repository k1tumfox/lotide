const assertEqual = function(actual, expected) {
  return actual === expected; //console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

//------prev iteration
/* const eqArrays = function(array1, array2) {
  let matchIndicator = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return matchIndicator;//true or false
} */
//-----------
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;//true or false
};


//console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.log(assertEqual(1, 1));

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

/* console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false */