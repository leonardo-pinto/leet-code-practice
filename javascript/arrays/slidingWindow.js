// Given an array, find the sum of all subarrays of length k

let k = 3;
let input = [1, 2, 3, 4, 5];
// [6, 9, 12]

function fixedSizeSlidingWindow(arr, k) {
  if (!arr.length || k == 0) {
    return undefined;
  }
  // initialize array of sums
  let result = [];
  let currSum = 0;

  // sum the array with the initial k elements
  for (i = 0; i < k; i++) {
    currSum += arr[i];
  }
  result.push(currSum);

  // moves the sliding window
  for (i = k; i < arr.length; i++) {
    currSum -= arr[i - k];
    currSum += arr[i];
    result.push(currSum);
  }
  return result;
}

console.log(fixedSizeSlidingWindow(input, k));
