/**
 * https://leetcode.com/problems/majority-element
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // const N = nums.length;
    // const expectedAppears = Math.ceil(N/2);
    // const map = new Map();
    // for (let i = 0; i < N; i++) {
    //     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    // }
    // for (let [key, value] of map) {
    //     if (value >= expectedAppears) return key; 
    // }
    let count = 0;
    let candidate = null;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) candidate = nums[i];
        candidate === nums[i] ? count++ : count--;
    }
    return candidate;
};