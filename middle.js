
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


module.exports = middle;