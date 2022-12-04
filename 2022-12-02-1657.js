/*
  1657. Determine if Two Strings Are Close (Medium)
  https://leetcode.com/problems/determine-if-two-strings-are-close/description/

  Two strings are considered close if you can attain one from the other using the following operations:

  Operation 1: Swap any two existing characters.
  For example, abcde -> aecdb
  Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
  For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
  You can use the operations on either string as many times as necessary.

  Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
*/

/*
  @param {string} word1
  @param {string} word2
  @return {boolean}
*/

 var closeStrings = function(word1, word2) {
    const map1 = {};
    const map2 = {};
    if (word1.length !== word2.length) {
      return false;
    }
    for (let i = 0; i < word1.length; i++) {
      map1[word1[i]] = (map1[word1[i]] || 0) + 1;
      map2[word2[i]] = (map2[word2[i]] || 0) + 1;
    }
    let map1Values = Object.values(map1).sort();
    let map2Values = Object.values(map2).sort();

    let map1keys = Object.keys(map1).sort();
    let map2keys = Object.keys(map2).sort();

    for (let i = 0; i < map1Values.length; i++) {
      if (map1keys[i] !== map2keys[i] || map1Values[i] !== map2Values[i]) {
        return false;
      }
    }
    console.log(map1Values);
    console.log(map2Values);
    console.log(map1Values == map2Values);
    return true;
};

console.log(closeStrings('cabbbc', 'abbccc'));