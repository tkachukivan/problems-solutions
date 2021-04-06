/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let result = 0;
    let resultsMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let storedValue = resultsMap.get(nums[i]) || 0;
        result += storedValue;
        resultsMap.set(nums[i], ++storedValue);
    }
    
    return result;
};