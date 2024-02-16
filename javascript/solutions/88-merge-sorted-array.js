// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n

function solution(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let currIndex = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[currIndex] = nums1[p1];
      p1--;
      currIndex--;
    } else {
      nums1[currIndex] = nums2[p2];
      p2--;
      currIndex--;
    }
  }

  while (p2 >= 0) {
    nums1[p2] = nums2[p2];
    p2--;
  }
  return nums1;
}

console.log(solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
[1, 2, 2, 3, 5, 6];
console.log(solution([1], 1, [], 0)); // [1]
console.log(solution([0], 0, [1], 1)); // [1]
console.log(solution([2, 0], 1, [1], 1)); // [1,2]
console.log(solution([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)); // [1,2]
