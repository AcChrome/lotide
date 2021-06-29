const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');




console.log(middle([1]));
console.log(middle([4, 5, 6, 7]));
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3]), [2]);

assertArraysEqual(middle([1, 2, 5, 2, 4, 3]),[5, 2]);
// assertArraysEqual(eqArrays(middle([1, 2])));
// assertArraysEqual(eqArrays(middle([1, 2, 3])));
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5])));
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4])));
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6])));
