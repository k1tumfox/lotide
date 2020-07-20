/* const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
}; */
//should return first element, catch undefined arrays
const head = function(array) {
  return array[0];
};
console.log(head([]));
/* assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), 5); */