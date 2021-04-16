/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    // candidates.sort((a, b) => a - b);
    collect([], target, 0);
    return result;
    
    function collect(nums, currentTarget, from) {
        if (currentTarget === 0) {
            result.push([...nums]);
            return;
        }
        
        for (let i = from; i < candidates.length; i++) {
            // if (candidates[i] > currentTarget) break;
            if (candidates[i] > currentTarget) continue;
            nums.push(candidates[i]);
            collect(nums, currentTarget - candidates[i], i);
            nums.pop();
        }
    }
};