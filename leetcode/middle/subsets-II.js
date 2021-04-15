/**
 * https://leetcode.com/problems/subsets-ii
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    const result = [];
    backtrack([], 0);
    
    return result;
    
    function backtrack(arr, idx) {
        result.push([...arr]);
        if (idx === nums.length) return;
        
        for (let i = idx; i < nums.length; i++) {
            if (i !== idx && nums[i] === nums[i - 1]) continue;
            arr.push(nums[i]);
            backtrack(arr, i + 1);
            arr.pop();
        }
    }
};