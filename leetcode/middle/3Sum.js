/**
 * https://leetcode.com/problems/3sum
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const result = [];
    if (nums.length < 3) return result;
    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let middle = i + 1;
        let right = nums.length - 1;

        while(middle < right) {
            const sum = nums[i] + nums[middle] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                middle++;
            } else {
                result.push([nums[i], nums[middle], nums[right]]);
                while (middle < right && nums[middle] === nums[middle + 1]) middle++;
                while (middle < right && nums[right] === nums[right - 1]) right--;
                middle++;
                right--;
            }
        }
    }

    return result;
};