/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     const n = nums.length;
//     k = k % n;
//     if (k === 0) return;
//     const tmp = new Array(n);
    
//     for (let i = 0; i < n; i++) {
//         const newIndex = getNext(i);
//         tmp[newIndex] = nums[i];
//     }
   
//     for (let i = 0; i < n; i++) {
//         nums[i] = tmp[i];
//     }
    
//     function getNext(i) {
//         return (i + k) % n;
//     }
// };

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    if (k === 0) return;
    let count = 0;
    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];
        do {
            const next = getNext(current);
            const tmp = nums[next];
            nums[next] = prev;
            prev = tmp;
            current = next;
            count++
        } while(start !== current)
    }
    
    function getNext(i) {
        return (i + k) % n;
    }
};
    
// var rotate = function(nums, k) {
//     const n = nums.length;
//     k = k % n;
        
// 	reverse(0, n-1); // reverse   <--<------
// 	reverse(0, k-1) // reverse first part ---><----
//     reverse(k, n-1)// reverse second part --->----->
    
//     function reverse (i, j){
//         while(i < j){
//             let temp = nums[i]
//             nums[i] = nums[j]
//             nums[j] = temp
//             i++
//             j--
//         }
//     }
// };