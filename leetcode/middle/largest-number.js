/**
 * https://leetcode.com/problems/largest-number
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    nums.sort((a, b) => {
        const stra = '' + a + b;
        const strb = '' + b + a;
        return strb - stra;
    });
    
    if (nums[0] === 0) return '0';
    return nums.join('');
};