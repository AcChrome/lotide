const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed; [${actual}] !== [${expected}]`);
  }
};

const tail = function(arr) {
  let result = [];
  
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }

  return result;

};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
