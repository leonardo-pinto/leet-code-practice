// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Sorting both arrays
// Time Complexity: O(n.log(n))
function solution(s, t) {
  if (s.length != t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}

// One string used to sum char count and the second subtract char count
// Time Complexity: O(n)
// function solution(s, t) {
//   if (s.length != t.length) return false;
//   let sMap = new Map();

//   for (i = 0; i < s.length; i++) {
//     if (sMap.has(s[i])) {
//       sMap.set(s[i], sMap.get(s[i]) + 1);
//     } else {
//       sMap.set(s[i], 1);
//     }

//     sMap.set(t[i], sMap.has(t[i]) ? sMap.get(t[i]) - 1 : -1);
//   }
//   for (const [_, value] of sMap) {
//     if (value !== 0) return false;
//   }

//   return true;
// }

// Store all the string in a Map, and check if both maps are equal
// Time Complexity: O(n)
// function solution(s, t) {
//   if (s.length != t.length) return false;
//   let sMap = new Map();
//   let tMap = new Map();
//   let isAnagram = true;

//   for (i = 0; i < s.length; i++) {
//     if (sMap.has(s[i])) {
//       sMap.set(s[i], sMap.get(s[i]) + 1);
//     } else {
//       sMap.set(s[i], 1);
//     }

//     if (tMap.has(t[i])) {
//       tMap.set(t[i], tMap.get(t[i]) + 1);
//     } else {
//       tMap.set(t[i], 1);
//     }
//   }

//   sMap.forEach((value, key) => {
//     if (!tMap.has(key) || value !== tMap.get(key)) {
//       isAnagram = false;
//     }
//   });

//   return isAnagram;
// }

console.log(solution("anagram", "nagaram"), " Expected: true");
console.log(solution("rat", "car"), " Expected: false");
console.log(solution("a", "ab"), " Expected: false");
