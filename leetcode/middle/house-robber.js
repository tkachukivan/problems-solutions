/**
 * https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     const n = nums.length;
//     if (n < 3) return Math.max(...nums);
//     const cache = new Uint32Array(n);
//     cache[0] = nums[0];
//     cache[1] = nums[1];
//     cache[2] = nums[2] + nums[0];
    
    
//     for (let i = 3; i < n; i++) {
//         cache[i] = Math.max(cache[i - 2], cache[i - 3]) + nums[i];
//     }
    
//     return Math.max(cache[n - 1], cache[n - 2]);
// };

// variation for first
// var rob = function(nums) {
//     const n = nums.length;
//     if (n < 3) return Math.max(...nums);
//     const cache = new Uint32Array(n + 1);
//     cache[0] = 0;
//     cache[1] = nums[0];
    
    
//     for (let i = 1; i < n; i++) {
//         cache[i + 1] = Math.max(cache[i], cache[i - 1] + nums[i]);
//     }
    
//     return cache[n];
// };

// var rob = function(nums) {
//     const n = nums.length;
//     if (n === 1) return nums[0];
//     const cache = new Array(n + 1);
    
//     return getMoney(0);
    
//     function getMoney(house) {
//         if (house >= n) return 0;
//         if (cache[house] !== undefined) return cache[house];
        
//         cache[house] = Math.max(getMoney(house + 2) + nums[house], getMoney(house + 1));
        
//         return cache[house];
//     }
// };

var rob = function(nums) {
    let prevMax = 0, curMax = 0;
    for (let n of nums) {
        let temp = curMax;
        curMax = Math.max(prevMax + n, curMax); // rob vs !rob
        prevMax = temp;
    }
    return Math.max(curMax, prevMax);
}