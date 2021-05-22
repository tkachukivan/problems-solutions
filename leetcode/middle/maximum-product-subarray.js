/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const n = nums.length;
    let max = nums[0];
    let min = nums[0];
    let res = nums[0];
    
    for (let i = 1; i < n; i++) {
        const curMax = Math.max(nums[i], max * nums[i], min * nums[i]);
        const curMin = Math.min(nums[i], max * nums[i], min * nums[i]);
        
        max = curMax;
        min = curMin;
        res = Math.max(res, max);
    }
    
    return res;
};

// var maxProduct = function(nums) {
//     let maxProd = -Infinity;
//     let running = 1;
    
//     // moving forward;
//     for(let n of nums) {
//         if(!running) running = n;
//         else running *= n;
//         maxProd = Math.max(maxProd, running);
//     }
    
//     running = 1;
    
//     // moving backward
//     for(let i = nums.length-1; i >= 0; i--) {
//         if(!running) running = nums[i];
//         else running *= nums[i];
//         maxProd = Math.max(maxProd, running);
//     }
//     return maxProd
// };