// Given an array, find the minimum subarray size that is equal to or greater than a given number

let value = 11;
let input = [1, 1, 1];

function dynamicSlidingWindow(input, value) {
  let left = 0;
  let right = 0;
  let minSubArraySize = 0;
  let currSum = input[left];

  while (left < input.length) {
    // expand the window to reach the value
    while (currSum < value && right < input.length - 1) {
      right++;
      currSum += input[right];
    }

    if (right === input.length - 1 && currSum < value) {
      break;
    }
    // retract the window to check minimum size
    minSubArraySize = right - left + 1;
    currSum -= input[left];
    left++;
  }
  return minSubArraySize;
}

console.log(dynamicSlidingWindow(input, value));
