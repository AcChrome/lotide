const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  }
  if (arr.length % 2 !== 0) {
    result.push(arr[Math.trunc(arr.length / 2)]);
  }else {
    result = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
  return result;
};


module.exports = middle;