/**
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    const used = [];
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) continue;
        used[nums[i]] = true;
        maxNum = Math.max(maxNum, nums[i]);
    }
    
    for (let i = 1; i < used.length; i++) {
        if (!used[i]) return i;
    }
    
    return maxNum + 1;
};
// var firstMissingPositive = function(nums) {
//     let i = 0;
//     while (i < nums.length) {
//         if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
//             [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
//         } else {
//             i++;
//         }
//     }
//     for (i = 0; i < nums.length; i++) {
//         if (nums[i] !== i + 1) return i + 1;
//     }
//     return i + 1;
// };