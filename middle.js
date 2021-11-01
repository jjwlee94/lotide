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

module.exports = middle;