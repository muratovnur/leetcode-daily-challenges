/*
  451. Sort Characters By Frequency (Medium)
  https://leetcode.com/problems/sort-characters-by-frequency/description/

  Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

  Return the sorted string. If there are multiple answers, return any of them.
*/

/*
  @param {string} s
  @return {string}
*/

var frequencySort = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  s = '';
  const resultArr = Object.entries(map).sort((a, b) => (b[1] - a[1]));
  
  for (let i = 0; i < resultArr.length; i++) {
    while (resultArr[i][1] > 0) {
      s += resultArr[i][0];
      resultArr[i][1]--;
    }
  }
  return s;
};

console.log(frequencySort('Aaacccbbd'));