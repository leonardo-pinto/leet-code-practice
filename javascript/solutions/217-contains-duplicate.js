// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function solution(nums) {
  if (nums.length < 2) return false;
  let map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
}

console.log(solution([]), "false");
console.log(solution([3]), "false");
console.log(solution([1, 2, 3, 1]), "true");
console.log(solution([1, 2, 3, 4]), "false");
console.log(solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), "true");
