/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let start = 0;
    let end = nums.length - 1;
    let insert = end;
    while(insert >= 0) {
        const startSq = nums[start] ** 2;
        const endSq = nums[end] ** 2;
        if (startSq > endSq) {
            result[insert--] = startSq;
            start++;
        } else {
            result[insert--] = endSq;
            end--;
        }
    }
    
    return result;
};