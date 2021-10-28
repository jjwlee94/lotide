const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const findKey = function(object, callback) {
  let listOfKeys = Object.keys(object);
  for (const key of listOfKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
}

const listOfStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(listOfStars, x => x.stars === 2), "noma");
assertEqual(findKey(listOfStars, x => x.stars === 3), "Akaleri");
assertEqual(findKey(listOfStars, x => x.stars === 1), "Blue Hill");