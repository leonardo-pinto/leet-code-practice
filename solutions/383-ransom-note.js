// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

function solution(ransomNote, magazine) {
  // add each element of the ransomNote in a hash map
  const hashMap = new Map();
  for (i = 0; i < magazine.length; i++) {
    if (hashMap.has(magazine[i])) {
      hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1);
    } else {
      hashMap.set(magazine[i], 1);
    }
  }

  for (i = 0; i < ransomNote.length; i++) {
    if (hashMap.get(ransomNote[i]) > 0) {
      hashMap.set(ransomNote[i], hashMap.get(ransomNote[i]) - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log("Expected: false     Ouput:", solution("a", "b"));
console.log("Expected: false     Ouput:", solution("aa", "ab"));
console.log("Expected: true     Ouput:", solution("aa", "aab"));
