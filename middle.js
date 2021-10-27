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

const middle = function(arr) {
  let newArr = [];
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 === 0) {
    return arr.splice((Math.floor(arr.length / 2) - 1), 2);
  } else {
    return arr.splice((Math.floor(arr.length / 2)), ((arr.length / 2) - 1));
  }
}

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]