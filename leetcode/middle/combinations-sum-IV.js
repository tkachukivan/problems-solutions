/**
 * https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    const cache = new Map(); // we can use array
    // nums.sort((a,b) => a - b); we can sort to stop loop as soon as element is bigger then current
    return countCombinations(target);
    
    function countCombinations(currentTarget) {
        if (currentTarget === 0) return 1;
        
        if (cache.has(currentTarget)) {
            return cache.get(currentTarget);
        }
        
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > currentTarget) continue;
            result += countCombinations(currentTarget - nums[i]);
        }
        
        cache.set(currentTarget, result);
        return result;
    }
};


// var combinationSum4 = function(N, T) {
//     let dp = new Uint32Array(T+1)
//     dp[0] = 1
//     for (let i = 1; i <= T; i++)
//         for (let num of N)
//             if (num <= i) dp[i] += dp[i-num]
//     return dp[T]
// };