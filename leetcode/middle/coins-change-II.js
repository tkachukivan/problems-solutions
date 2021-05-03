/**
 * https://leetcode.com/problems/coin-change-2/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    const dp = Array.from({ length: coins.length + 1 }, () => new Uint32Array(amount + 1));
    dp[0][0] = 1;
    
    for (let i = 1; i <= coins.length; i++) {
        dp[i][0] = 1;
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j];
            if (coins[i - 1] <= j) {
                dp[i][j] += dp[i][j - coins[i - 1]];
            }
        }
    }
    
    return dp[coins.length][amount]
};

// var change = function(amount, coins) {
//     let dp = new Uint32Array(amount + 1);
//     dp[0] = 1;

//     for (let i=0;i<coins.length;i++) { // iterate the types of coin
//         for (let j=1;j<=amount;j++) {
//             if (j >= coins[i]) {
//                 // dp[j] is the combinations for amount j for not using the current coin
//                 // dp[j - coins[i]] is is the combinations for using the current coin
//                 dp[j] = dp[j] + dp[j - coins[i]];
//             }
//         }
//     }
//     return dp[amount];
// }