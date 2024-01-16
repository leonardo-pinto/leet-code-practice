// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is greater than
// or equal to target. If there is no such subarray, return 0 instead

let target = 15;
let nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];

// TODO: refactor to avoid NaN currSum

function minimumSizeSubarraySum(nums, target) {
  if (!nums.length) {
    return 0;
  }
  let left = 0;
  let right = 0;
  let minSubArraySize = Infinity;
  let currSum = nums[left];

  while (left < nums.length) {
    // expand the window to reach the value
    while (currSum < target && right < nums.length - 1) {
      right++;
      currSum += nums[right];
    }

    if (right === nums.length - 1 && currSum < target) {
      break;
    }
    // retract the window to check minimum size

    let currSubArraySize = right - left + 1;
    if (currSum >= target && currSubArraySize < minSubArraySize) {
      minSubArraySize = currSubArraySize;
    }

    currSum -= nums[left];
    left++;
  }
  return minSubArraySize != Infinity ? minSubArraySize : 0;
}

console.log(minimumSizeSubarraySum(nums, target));
