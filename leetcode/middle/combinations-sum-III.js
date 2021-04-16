/**
 * https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const result = [];
    collect([], 0, n);
    return result;
    
    function collect(nums, start, target) {
        if (nums.length === k && target === 0) {
            result.push([...nums]);
            return;
        }
        
        if (start === candidates.length || target === 0 || nums.length === k) return;
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target) return;
            nums.push(candidates[i]);
            collect(nums, i + 1, target - candidates[i]);
            nums.pop();
        }
    }
};