/*
  1207. Unique Number of Occurrences (Easy)
  https://leetcode.com/problems/unique-number-of-occurrences/description/

  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

/*
  @param {number[]} arr
  @return {boolean}
*/

var uniqueOccurrences = function(arr) {
  let map = {};

  arr.forEach(n => {
    map[n] = (map[n] || 0) + 1;
  });

  const set = new Set(Object.values(map));
  return set.size === Object.values(map).length;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));