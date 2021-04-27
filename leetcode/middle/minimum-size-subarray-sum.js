/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let minSize = Infinity;
    let start = 0;
    let end = 0;
    let sum = 0;
    while (end < nums.length) {
        sum += nums[end++];

        while (sum >= target && start <= end) {
            minSize = Math.min(minSize, (end - start));
            if (minSize === 1) return minSize;
            sum -= nums[start++];
        }
    }   
    return minSize === Infinity ? 0 : minSize;
};