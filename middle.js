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
  return eqArrays(a1, a2);
};


const middle = function(array) {
  let middleMost = [];//could be 1 or 2 values
    
  if (array.length < 3) {  //arrays with < 3 elements, return empty array
    return middleMost;
  } else if (array.length % 2 === 0) {  //array.length % 2 === 0, return 2 elements
    let x = (array.length / 2) - 1;
    let y = array.length / 2;
    middleMost.push(array[x], array[y]);
  } else {    //array.length % 2 === !0, return 1 elements
    middleMost.push(array[parseInt(array.length / 2)]);
  }

  return middleMost;
};

let x = [1, 2, 3, 4, 5, 6];
console.log(middle(x));
console.log("1 element gives blank array", assertArraysEqual([7], middle([1, 7, 3])));


