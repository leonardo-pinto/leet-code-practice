// Given a string s, find the length of the longest  substring without repeating characters

function solution(s) {
  if (s.length < 2) return s.length;
  let left = 0;
  let right = 1;
  let maxSize = 0;
  let map = new Map();

  map.set(s[left], left);
  while (right < s.length) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
      map.set(s[right], right);
    } else {
      map.set(s[right], right);
    }
    if (right - left + 1 > maxSize) {
      maxSize = right - left + 1;
    }
    right++;
  }
  return maxSize;
}

console.log(solution("abcabcbb") + " Expected: 3");
console.log(solution("bbbbb") + " Expected: 1");
console.log(solution("pwwkew") + " Expected: 3");
console.log(solution(" ") + " Expected: 1");
console.log(solution("au") + " Expected: 2");
console.log(solution("dvdf") + " Expected: 3");
