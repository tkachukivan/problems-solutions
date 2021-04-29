/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    let lo = 0;
    let hi = nums.length - 1;
    let mid = 0;
    
    while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2);
        if (nums[mid] === target) break;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    
    if (nums[mid] !== target) return [-1, -1];
    
    lo = mid;
    hi = mid;
    
    while (lo > 0 && nums[lo - 1] === target) lo--;
    while (hi < nums.length - 1 && nums[hi + 1] === target) hi++;
    

    return [lo, hi];
        
    // a bit more efficient way, find start, then find end, both with binary search
    // find the start
//     while (lo <= hi) {
//         mid = lo + Math.floor((hi - lo) / 2);
//         if (nums[mid] >= target) hi = mid - 1;
//         else lo = mid + 1;
//     }
    
//     // if target doesn't exist
//     if(nums[lo] !== target) return [-1, -1];
    
//     const start = lo;
    
//     // reset low and high
//     hi = nums.length-1;
    
//     // find the end
//     while(lo <= hi) {
//         mid = lo + Math.floor((hi - lo) / 2);
//         if(nums[mid] <= target) lo = mid + 1;
//         else hi = mid - 1;
//     }
//     return [start, hi];
};