/**
 * https://leetcode.com/problems/contains-duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const appearedNums = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (appearedNums.has(nums[i])) return true;
        else appearedNums.set(nums[i], true);
    }
    // return (new Set(nums)).size !== nums.length
    return false;
};