/**
 * https://leetcode.com/problems/permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = [];
    collectPermutations(nums, 0);
    return result;
    
    function collectPermutations(nums, idx) {
        if (idx === nums.length) {
            result.push([...nums]);
            return;
        }
        
        for (let i = idx; i < nums.length; i++) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            collectPermutations(nums, idx + 1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
        }
    }
};