/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//     if (amount === 0) return 0;
//     const dp = new Int32Array(amount + 1);
//     collect(amount);
    
//     return dp[amount];
    
//     function collect(amount) {
//         if (amount < 0) return -1;
//         if (amount === 0) return 0;
//         if (dp[amount]) return dp[amount];
        
//         let result = amount + 1;

//         for (let coin of coins) {
//             const res = collect(amount - coin);
//             if (res >= 0) {
//                 result = Math.min(result, res + 1);
//             }
//         }
        
//         result = result === amount + 1 ? -1 : result;
        
//         dp[amount] = result;
//         return result;
//     }
// };

var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    const dp = new Int32Array(amount + 1);
    for (let i = 1; i <= amount; i++) {
        let takeCoins = amount + 1;
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                takeCoins = Math.min(takeCoins, 1 + dp[i - coins[j]])
            }
        }
        
        dp[i] = takeCoins;
    }
    
    return dp[amount] === amount + 1 ? -1 : dp[amount];
};

// bfs, can be improved with using queue
// var coinChange = function(coins, amount) {
//     if (amount === 0) return 0;
//     const queue = [amount];
//     const seen = new Set();

//     let taken = 0;    

//     while (queue.length) {
//         taken++;
//         let size = queue.length;
//         while (size) {
//             size--;
//             const currentAmount = queue.shift();
//             for (let i = 0; i < coins.length; i++ ) {
//                 let rem = currentAmount - coins[i];
//                 if (rem === 0) return taken;
//                 if (rem > 0 && !seen.has(rem)) {        
//                     queue.push(rem);
//                     seen.add(rem);
//                 }      
//             }
//         }
//     }
    
//     return -1;  
// };