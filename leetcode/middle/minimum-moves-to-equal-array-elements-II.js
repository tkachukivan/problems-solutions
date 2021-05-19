/**
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const middle = nums[Math.floor(n / 2)]
    let moves = 0;
    for (let i = 0; i < n; i++) {
        moves += Math.abs(nums[i] - middle);
    }
    
    
    return moves;
};