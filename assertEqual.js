const assertEqual = function(actual, expected) {
  let notice;
  actual === expected ? notice = console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : notice = console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  return notice;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("tomato", "ketchup");
assertEqual("lhl", "lhl");
assertEqual(1, 4);
