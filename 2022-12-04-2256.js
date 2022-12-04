/*
  2256. Minimum Average Difference (Medium)
  https://leetcode.com/problems/minimum-average-difference/description/

  You are given a 0-indexed integer array nums of length n.

  The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.

  Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

  Note:

  The absolute difference of two numbers is the absolute value of their difference.
  The average of n elements is the sum of the n elements divided (integer division) by n.
  The average of 0 elements is considered to be 0.
*/

/*
  @param {number[]} nums
  @return {number}
*/

var minimumAverageDifference = function(nums) {
  if (nums.length === 1) {
    return 0;
  }
  const arrLength = nums.length;
  let sumOfAllElements = 0, sumFromStart = 0;
  let currentAvgDiff, minAvgDiff, result;
  nums.forEach(e => {
    sumOfAllElements += e;
  });
  for (let i = 0; i < arrLength - 1; i++) {
    sumFromStart += nums[i]
    currentAvgDiff = Math.abs(Math.floor((sumFromStart)/(i+1)) - Math.floor((sumOfAllElements - sumFromStart)/(arrLength - i - 1)));
    console.log(currentAvgDiff);
    if (i === 0 || minAvgDiff > currentAvgDiff) {
      minAvgDiff = currentAvgDiff;
      result = i;
    }
  }
  return minAvgDiff > sumOfAllElements/arrLength ? arrLength - 1 : result;
};

console.log("result: ", minimumAverageDifference([0,1,0,1,0,1]));