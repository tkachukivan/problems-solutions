/**
 * https://leetcode.com/problems/maximum-erasure-value/
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    const windowValues = new Set();
    let sum = 0;
    let maxSum = 0;
    let left = 0;
    let right = 0;
    
    while (right < nums.length) {
        while(windowValues.has(nums[right])) {
            sum -= nums[left];
            windowValues.delete(nums[left++]);
        }
        
        windowValues.add(nums[right]);
        sum += nums[right++];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
};

// faster and takes less memory because we have not numbers but counts of them what results in using less memory and faster algorithm
// var maximumUniqueSubarray = function(nums) {
//     let nmap = new Int8Array(10001), total = 0, best = 0
//     for (let left = 0, right = 0; right < nums.length; right++) {
//         nmap[nums[right]]++, total += nums[right]
//         while (nmap[nums[right]] > 1)
//             nmap[nums[left]]--, total -= nums[left++]
//         best = Math.max(best, total)
//     }
//     return best
// };