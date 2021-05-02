/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let max = 0;
    const dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
               dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        
        max = Math.max(max, dp[i]);
    }
    
    return max;
};

// var lengthOfLIS = function(nums) {
//     if (nums.length === 0) return 0;
    
//     let res = [nums[0]];
//     let len = 1;
    
//     for (let i = 1; i < nums.length; i++) {
        
//         if (res[len - 1] < nums[i]) res[len++] = nums[i]; //If prior element in res is less than cur, simply append cur to res as the new tail
//         else {
//             let left = 0;
//             let right = nums.length - 1;
//             while (left < right) {
//                 let mid = left + Math.floor((right - left) / 2);
//                 if (res[mid] < nums[i]) left = mid + 1; //If cur is greater than midpoint of res, recalibrate to look right and vice versa
//                 else right = mid;
//             }
//             res[right] = nums[i];
//         }
//     }
//     return res.length;
// };

// // Time Complexity: O(N Log N) Worst case is to perform binary search (Log N) on every element within nums(N Elements)
// // Space Complexity: O(N)