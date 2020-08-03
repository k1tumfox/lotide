const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};


//scans object, and returns first key for which callback returns truthy
//if no key found, return undefined
const findKey = function(object, callback) {
  let firstKey;
  for (let item in object) {
    if (callback(object[item])) {
      firstKey = item;
      break;
    }
  }
  return firstKey;
}

// const results1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"
// console.log('the matching key is: ', results1);

// //test---------
// console.log(assertEqual(results1, 'noma'));
//-------------

