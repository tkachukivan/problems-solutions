/**
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     const n = nums.length;
//     const seen = new Set();
//     const queue = [0];
//     let lastSeen = 0;
//     seen.add(0);
    
//     while (queue.length) {
//         let index = queue.shift();
//         let value = nums[index];
        
//         while (value > 0) {
//             let nextIndex = value + index;
//             if (nextIndex > n - 1) {
//                 value = nextIndex - n - 1;
//                 nextIndex = n - 1;
//             } else {
//                 value--;
//             }
//             if (seen.has(nextIndex)) break;
//             lastSeen = Math.max(index, nextIndex);
//             if (lastSeen === n - 1) return true;
//             seen.add(nextIndex);
//             queue.push(nextIndex);
//         }
//     }
    
//     return lastSeen === n - 1;
// };

var canJump = function(nums) {
    let idx = 0;
    let max = 0;
    let target = nums.length - 1;
  
    while(idx < nums.length) {
      max = Math.max(max, idx + nums[idx]);
      
      if (max >= target) {
        return true;
      }
      
      if (max <= idx && nums[idx] === 0) {
        return false;
      }
      
      idx++;
    }
    
    return false;
  };
  
  // var canJump = function(nums) {
  //     let max = nums[0];
  //     for (let i=0;i<nums.length;i++) {
  //         if (max < i) return false
  //         max = Math.max(i+nums[i], max);
  //     }
  //     return true;
  // };