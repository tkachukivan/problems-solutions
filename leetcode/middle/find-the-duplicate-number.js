/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
// can be done with set as well, but it will cost O(n) space
 var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = slow;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    };
    
    return fast;
};