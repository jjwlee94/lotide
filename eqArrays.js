const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      let result = secondArr.indexOf(firstArr[i]) !== -1;
      if (result === false) {
        return false;
      }
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS