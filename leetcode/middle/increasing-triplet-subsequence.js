/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    const n = nums.length;
    if (n < 3) return false;
    let a = Infinity;
    let b = Infinity;
    for (let i = 0; i < n; i++) {
        if (nums[i] > a && nums[i] > b) return true;
        if (nums[i] > a) b = nums[i];
        else a = nums[i];
    }
    
    return false;
};