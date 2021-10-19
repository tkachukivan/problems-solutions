/**
 * https://leetcode.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// improved brute force
// var nextGreaterElement = function(nums1, nums2) {
//     const elementIndex = new Map();
    
//     nums2.forEach((num, index) => {
//         elementIndex.set(num, index);
//     });
    
//     return nums1.map((num) => {
//         const indexInSet = elementIndex.get(num);
        
//         for (let i = indexInSet + 1; i < nums2.length; i++) {
//             if (nums2[i] > num) return nums2[i];
//         }
        
//         return -1;
//     })
// };

// stack
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreatestMap = new Map();
    for (const num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            nextGreatestMap.set(stack.pop(), num);
        }
        
        stack.push(num);
    }

    return nums1.map((num) => nextGreatestMap.get(num) || -1);
};

