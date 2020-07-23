const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  
  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item]) { //if jason/karim/fang (jkf) is true
      if (results[item]) {  //While going through each name in firstNames,
        results[item]++;    //you're accessing the value of jkf via [item].
      } else {              //If this key:value exists in results object,
        results[item] = 1;  //increment, otherwise, set new entry = 1.
      }
    }
    /*
    if (results[item]) {
      results[item]++;
    } else {             //if does not exist in new object
      results[item] = 1; //creates both the key and value via bracket notation
    }                 //quotations for bracket notation not required since var inside and not string
    */
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
