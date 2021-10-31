/**
 * https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/
 * @param {number[]} nums
 * @return {number}
 */
 var waysToSplit = function(nums) {
    const MOD = 10 ** 9 + 7;
    const n = nums.length;
    let result = 0;
    const prefixSums = [nums[0]];
    for (let i = 1; i < n; i++) {
        prefixSums[i] = nums[i] + prefixSums[i - 1];
    }
    
    for (let i = 0, j = 0, k = 0; i < n - 2; i++) {
        while (j <= i || (j < n - 1 && prefixSums[j] < prefixSums[i] * 2)) {
            j++;
        }

        while (k < j || ( k < n - 1 && prefixSums[k] - prefixSums[i] <= prefixSums[n - 1] - prefixSums[k])) {
            ++k;
        }

		result += k - j;
    }
    
    return result % MOD;
};