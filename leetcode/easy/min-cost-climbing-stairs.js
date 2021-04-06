/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    //     const dp = new Uint32Array(cost.length);
    //     dp[0] = cost[0];
    //     dp[1] = cost[1];
    
    //     for (let i = 2; i < cost.length; i++) {
    //         dp[i] = Math.min(cost[i] + dp[i - 1], cost[i] + dp[i - 2]);
    //     }
        
    //     return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
        let f1 = 0, f2 = 0;
        for (let i = cost.length - 1; i >=0; i--) {
            let f0 = cost[i] + Math.min(f1, f2);
            f2 = f1;
            f1 = f0;
        }
        
        return Math.min(f1, f2);
    };