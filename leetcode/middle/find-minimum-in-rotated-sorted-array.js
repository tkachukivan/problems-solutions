/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums[0] <= nums[nums.length - 1]) return nums[0];
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        // if (nums[start] > nums[start + 1]) {
        //     return nums[start + 1];
        // }
        // if (nums[end] < nums[end - 1]) {
        //     return nums[end];
        // }
        // start++;
        // end--;
        let mid = start + Math.floor((end - start) / 2)
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        
        if (nums[mid] > nums[0]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};