const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const eqObjects = function(object1, object2) {
  let listOfKeysObj1 = Object.keys(object1);
  let listOfKeysObj2 = Object.keys(object2);
  if (listOfKeysObj1.length !== listOfKeysObj2.length) {
    return false;
  } else {
    for (key of listOfKeysObj1) {
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false