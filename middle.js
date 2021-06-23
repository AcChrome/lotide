const middle = function (arr) {
  let result = [];
  if (arr.length % 2 !== 0) {
    result = arr[Math.trunc(arr.length / 2)];
  }else {
    result = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
  return result;
};

const array9 = [0, 1, 5, 7, 2, 3];
const array = [0, 9, 7, 3]; //length = 4 / 2 = 2
const array1 = [0, 1, 2, 3, 4];
const array2 = [0, 1, 2, -3, 4, 5, 6];//length = 5 / 2 = 2.5
console.log(middle(array9));
console.log(middle(array));
console.log(middle(array1));
console.log(middle(array2));

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//arr.slice(arr[arr.length / 2 - 1], arr[arr.length + 1 / 2])