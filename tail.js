

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

/* const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs" */



/* const xwords = ["Yo Yo"];
console.log(tail(xwords)); // no need to capture the return value since we are not checking it

const ywords = [];
console.log(tail(ywords)); // no need to capture the return value since we are not checking it */
module.exports = tail;