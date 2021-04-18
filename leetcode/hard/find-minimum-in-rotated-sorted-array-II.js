/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let lo = 0;
    let hi = nums.length - 1;
    
    if (nums[lo] < nums[hi]) return nums[0];
    while(lo < hi) {
        const mid = lo + Math.floor((hi - lo)/2);
//         if (nums[mid] > nums[mid + 1]) {
//             return nums[mid + 1];
//         }
        
//         if (nums[mid] < nums[mid - 1]) {
//             return nums[mid];
//         }
        
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else if (nums[mid] < nums[hi]) {
            hi = mid;
        } else {
            hi--
        }
    }
    return nums[lo];
};