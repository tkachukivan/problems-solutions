/**
 * https://leetcode.com/problems/combination-sum-ii
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort();
    collect([], target, 0);
    return result;
    
    function collect(nums, currentTarget, start) {
        if (currentTarget === 0) {
            result.push([...nums]);
            return;
        }
        if (start === candidates.length) return;
        for (let i = start; i < candidates.length; i++) {
            if (i !== start && candidates[i] === candidates[i-1]) continue;
            if (candidates[i] > currentTarget) continue;
            nums.push(candidates[i]);
            collect(nums, currentTarget - candidates[i], i + 1);
            nums.pop();
        }
    }
};