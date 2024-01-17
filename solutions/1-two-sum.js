// Given an array of integers nums and an integer target, return indices
// of the two numbers such that they add up to target

// You may assume that each input would have exactly one solution, and you
// may not use the same element twice

// O(n^2)
// function solution(nums, target) {
//   let left = 0;
//   let right = 1;
//   let sum;

//   while (left < nums.length + 1) {
//     sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (right < nums.length + 1) {
//       right++;
//     } else {
//       left++;
//       right = left + 1;
//     }
//   }
// }

// O(n)
function solution(nums, target) {
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
}

console.log("Result: [" + solution([2, 7, 11, 15], 9) + "] Solution: [0,1]");
console.log("Result: [" + solution([3, 2, 4], 6) + "] Solution: [1,2]");
console.log("Result: [" + solution([3, 3], 6) + "] Solution: [0,1]");
