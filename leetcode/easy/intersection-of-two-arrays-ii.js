/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    const result = [];
    const counts = new Map();
    let smaller, bigger;
    if (nums1.length > nums2.length) {
        smaller = nums2;
        bigger = nums1;
    } else {
        smaller = nums1;
        bigger = nums2;
    }
    
    for (let i = 0; i < smaller.length; i++) {
        counts.set(smaller[i], (counts.get(smaller[i]) || 0) + 1);
    }
    
    for (let i = 0; i < bigger.length; i++) {
        const number = bigger[i];
        const numCounts = counts.get(number);
        if (numCounts) {
            result.push(number);
            counts.set(number, numCounts - 1);
        }
    }
    
    return result;
};