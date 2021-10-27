const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const countLetters = function(string) {
  const result = {};
  const allLetters = string.split('');
  for (const letter of allLetters) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
    console.log(result);
  }
  return result;
}

const string = "LHL";
const result = countLetters(string);

assertEqual(result["L"], 2);
assertEqual(result["H"], 1);