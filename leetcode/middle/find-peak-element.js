/**
 * https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] > nums[mid + 1]) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    
    return lo;
};