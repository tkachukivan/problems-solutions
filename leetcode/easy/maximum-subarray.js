/**
 * https://leetcode.com/problems/maximum-subarray
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prev = Math.max(nums[i], nums[i] + prev);
        maxSum = Math.max(maxSum, prev);
    }
    return maxSum;
};