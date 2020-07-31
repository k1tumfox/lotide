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
const assertArraysEqual = function(a1, a2) {
  console.log(eqArrays(a1, a2));
};

//implement without which returns a subset of array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let exemptAr = [];
  for (ele of source) {
    let keep = '';
    for (items of itemsToRemove) {
      if (ele !== items) {
        keep = true;
      } else {
        keep = false;
        break;
      }
    }
    if (keep === true) {
    exemptAr.push(ele);
    }
    // console.log(exemptAr);//dgns
  }
  return exemptAr;

};

// assertArraysEqual(["1", "2"], without(["1", "2", "3"], [1, 2, "3"]));
// assertArraysEqual([2, 3], without([1, 2, 3], [1]));

//test to ensure original array is unmodified
// const words = ["hello", "world", "lighthouse"];
// console.log('expected: hello, world', 'actual: ', without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);