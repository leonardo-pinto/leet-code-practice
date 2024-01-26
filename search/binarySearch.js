// Time Complexity: O(log(n))
function solution(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

function recursiveSolution(arr, target, l, r) {
  if (l > r) return -1;
  let m = Math.floor((l + r) / 2);
  if (arr[m] === target) {
    return m;
  } else if (arr[m] > target) {
    return recursiveSolution(arr, target, l, m - 1);
  } else {
    return recursiveSolution(arr, target, m + 1, r);
  }
}

console.log(solution([1, 2, 3, 4, 5, 6], 2)); // 1
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(solution([], 2)); // -1
console.log(solution([1], 2)); // -1

console.log(
  recursiveSolution([1, 2, 3, 4, 5, 6], 2, 0, [1, 2, 3, 4, 5, 6].length - 1)
); // 1
console.log(
  recursiveSolution([1, 2, 3, 4, 5, 6], 5, 0, [1, 2, 3, 4, 5, 6].length - 1)
); // 4
console.log(recursiveSolution([], 2, 0, [].length - 1)); // -1
console.log(recursiveSolution([1], 2, 0, [1].length - 1)); // -1
