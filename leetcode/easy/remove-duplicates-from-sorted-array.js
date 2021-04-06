/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length;
    let lastUnique = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[lastUnique]) {
            nums[++lastUnique] = nums[i];
        }
    }
    
    return lastUnique + 1;
};