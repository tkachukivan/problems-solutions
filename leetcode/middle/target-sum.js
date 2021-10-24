/**
 * https://leetcode.com/problems/target-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let memo = new Map();
    
    return countWays(0, 0);
        
    function countWays(currentNum, currentSum) {
        if (currentNum == nums.length) return target === currentSum ? 1 : 0;

        const key = `${currentNum};${currentSum}`;
        if (memo.has(key)) return memo.get(key);
        
        let ways = 0;
        
        ways += countWays(currentNum + 1, currentSum + nums[currentNum]);
        ways += countWays(currentNum + 1, currentSum - nums[currentNum]);
        
        memo.set(key, ways);
        
        return ways;
    }
};