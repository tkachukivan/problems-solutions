/**
 * https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let currentOnes = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentOnes = 0;
        } else {
            currentOnes++;
        }
        
        if (currentOnes > result) {
            result = currentOnes;
        }
    }
    
    return result;
};