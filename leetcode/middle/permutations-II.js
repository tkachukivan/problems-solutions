/**
 * https://leetcode.com/problems/permutations-ii
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    collect(nums, 0);
    return result;
    
    function collect(nums, idx) {
        if (idx === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        let used = new Set();
        
        for (let i = idx; i < nums.length; i++) {
            if (used.has(nums[i])) continue;
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            collect(nums, idx + 1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            used.add(nums[i])
        }
    }
};