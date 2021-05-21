/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        const mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) return mid;
        // left sorted
        if (nums[lo] <= nums[mid]) {
            if (nums[lo] <= target && nums[mid] > target) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else { // right sorted
            if (nums[mid] < target && nums[hi] >= target ) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    
    return -1;
};