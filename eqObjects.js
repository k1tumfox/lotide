const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

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
//test eqArrays
/* const c = ["2", 3, 'apple'];
const d = ["2", 3, 'apple'];
console.log(eqArrays(d, c)); */

const eqObjects = function(obj1, obj2) { //determines if object are equal, same keys, same values
  //same number of keys
  let array1 = Object.keys(obj1); // [c, d[]]
  let array2 = Object.keys(obj2); // [d[], c

  if (array1.length !== array2.length) {
    return false;
  }
  
  if (array1.length === array2.length) { //confirms objects have same # of keys
    for (let ele of array1) {
      if (Array.isArray(obj1[ele]) && Array.isArray(obj2[ele])) { //confirms if arraylength for same key in both objects
        if (!eqArrays(obj1[ele], obj2[ele])) { //compares the arrays of both objects,
          return false;
        }
      }
      else if (obj1[ele] !== obj2[ele]) {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

console.log("----------------------");

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);

console.log("----------------------");
console.log("----------------------");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);


console.log("----------------------");

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 

