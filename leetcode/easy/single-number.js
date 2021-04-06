/**
 * https://leetcode.com/problems/single-number
 * can be solved with XOR
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
//     const map = new Map();
    
//     nums.forEach((num) => {
//         map.set(num, (map.get(num) || 0) + 1);
//     });
    
//     for (let [key, value] of map) {
//         if (value == 1) return key;
//     }
    const s = new Set();
    nums.forEach(num => s.has(num) ? s.delete(num) : s.add(num));
    return [...s][0]; 
};