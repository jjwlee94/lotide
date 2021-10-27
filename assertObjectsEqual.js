const eqObjects = function(object1, object2) {
  let listOfKeysObj1 = Object.keys(object1);
  let listOfKeysObj2 = Object.keys(object2);
  if (listOfKeysObj1.length !== listOfKeysObj2.length) {
    return false;
  } else {
    for (key of listOfKeysObj1) {
      if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        return false;
      }
    }
    return true;
  }
};