// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function solution(prices) {
  if (prices.length < 2) return 0;
  let l = 0;
  let r = 1;
  let maxValue = 0;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      maxValue = Math.max(prices[r] - prices[l], maxValue);
    } else {
      l = r;
    }
    r++;
  }
  return maxValue;
}

console.log(solution([7, 1, 5, 3, 6, 4]), " Expected: 5");
console.log(solution([7, 6, 4, 3, 1]), " Expected: 0");
console.log(solution([1, 2, 4, 1, 2, 4, 1, 2, 3]), " Expected: 9");
// console.log(solution([]), " Expected: 0");
