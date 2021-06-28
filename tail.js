const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let result = [];
  
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }

  return result;

};

module.exports = tail;
