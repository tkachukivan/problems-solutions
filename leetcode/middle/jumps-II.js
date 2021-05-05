/**
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    // dp
//     const dp = new Uint32Array(nums.length);
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length && j <= i + nums[i]; j++) {
//             if (dp[j] === 0) dp[j] = dp[i] + 1;
//             else dp[j] = Math.min(dp[j], dp[i] + 1);
//             if (j === nums.length - 1) return dp[j];
//         }
//     }
    
//     return dp[nums.length - 1];
// // greedy
    let jumps = 0;
    let currentElement = 0;
    while (currentElement < nums.length - 1) {
        jumps++;
        let maxNum = 0;
        let maxNumIndex = currentElement;
        for (let j = currentElement + 1; j < nums.length && j <= currentElement + nums[currentElement]; j++) {
            const candidate = nums[j] + j;
            if (candidate >= maxNum) {
                maxNum = candidate;
                maxNumIndex = j;
            }
            if (j === nums.length - 1) return jumps;
        }
        
        currentElement = maxNumIndex;
    }
    
    return jumps;
    
	// if(nums.length === 1) return 0;
	// let jumps = 0;
	// let maxReach = nums[0];
	// let steps = nums[0];
	// for(let i = 1; i < nums.length - 1; i++){
	// 	maxReach = Math.max(maxReach, i + nums[i])
	// 	steps--;
	// 	if(steps === 0){
	// 		jumps++;
	// 		steps = maxReach - i;
	// 	}
	// }
	// return jumps + 1;  
};