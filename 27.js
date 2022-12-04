/*
 @param {number[]} nums
 @param {number} val
 @return {number}
*/
const removeElement = function(nums, val) {
    let arraySize = nums.length;
    for (let i = 0; i < arraySize; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        arraySize--;
        i--;
      }
    }
    return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));