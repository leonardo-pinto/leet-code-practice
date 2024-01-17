// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function solution(s) {
  const sFormatted = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let left = 0;
  let right = sFormatted.length - 1;

  while (left <= right) {
    if (sFormatted[left++] != sFormatted[right--]) return false;
  }
  return true;
}

// console.log(solution("A man, a plan, a canal: Panama") + " Expected: true");
// console.log(solution("race a car") + " Expected: false");
console.log(solution("aa") + " Expected: true");
