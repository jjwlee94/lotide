 const eqArrays = function(firstArr, secondArr) {
  for (var i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  } 
  return true;
}
const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
}

const letterPositions = function(sentence) {
  const result = {};
  // Use for loop to loop through sentence[i]
  // If letter is in result, push index position
  // If letter is not in result, add to object
  console.log(result);
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]); // => pass
assertArraysEqual(letterPositions("hello").h, [1]); // => fail