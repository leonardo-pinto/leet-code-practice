// Given a sorted array, find if there exists any pair
// of elements such that their sum is equal to X

let arr = [10, 20, 35, 50, 75, 80];
let target = 71;

// Time Complexity: O(n^2)
function loopSolution(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
}

// Time Complexity: O(n)
function twoPointersSolution(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === target) {
      return true;
      // Since the array is sorted, if the sum is greater than the target
      // we need to decrease the value by moving the right points
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(loopSolution(arr, target));
console.log(twoPointersSolution(arr, target));
