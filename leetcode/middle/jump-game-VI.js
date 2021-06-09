/**
 * https://leetcode.com/problems/jump-game-vi/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxResult = function(nums, k) {
//     const n = nums.length;
//     const dp = new Int32Array(n);
//     const pq = new MaxPriorityQueue({ priority: x => x[1] })
//     dp[0] = nums[0];
//     pq.enqueue([0, nums[0]])
    
//     for (let i = 1; i < n; i++) {
//         let j = i - k;
//         if (j < 0) j = 0;
//         while (pq.front().element[0] < j) {
//             pq.dequeue();
//         }
        
//         dp[i] = pq.front().element[1] + nums[i];
//         pq.enqueue([i, dp[i]]);
//     }
    
//     return dp[n - 1];
// };

// var maxResult = function(nums, k) {
//     const n = nums.length;
//     const pq = new MaxPriorityQueue({ priority: x => x[1] })
//     let sum = nums[0];
//     pq.enqueue([0, sum])

//     for (let i = 1; i < n; i++) {
//         let j = i - k;
//         if (j < 0) j = 0;
//         while (pq.front().element[0] < j) {
//             pq.dequeue();
//         }
        
//         sum = pq.front().element[1] + nums[i];
//         pq.enqueue([i, sum]);
//     }
    
//     return sum;
// };
// dequeue
var maxResult = function(nums, k) {
    if (nums.length == 1) return nums[0];
    
    let dp = new Array(nums.length);
    let queue = [];
    queue.push(0);
    dp[0] = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        while (queue.length > 0 && queue[0] < i-k) {
            queue.shift()
        }
        dp[i] = dp[queue[0]] + nums[i]
        
        while (queue.length > 0 && dp[i] >= dp[queue[queue.length-1]]) {
            queue.pop()
        }
        queue.push(i)
    }
    return dp[nums.length-1];
    
};