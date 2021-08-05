/**
 * https://leetcode.com/problems/stone-game/
 * @param {number[]} piles
 * @return {boolean}
 */
// var stoneGame = function(piles) {
//     const memo = new Map()
    
//     return wins(0, 0, 0, piles.length - 1);
    
//     function wins(alex, lee, left, right) {
//         const key = `${alex}-${lee}-${left}-${right}`;
        
//         if (memo.has(key)) return memo.get(key);
        
//         if (left > right) {
//             return alex > lee;
//         }
        
//         const result = wins(alex + piles[left], lee + piles[left + 1], left + 2, right) ||
//                        wins(alex + piles[left], lee + piles[right], left + 1, right - 1) ||
//                        wins(alex + piles[right], lee + piles[right - 1], left, right - 2) ||
//                        wins(alex + piles[right], lee + piles[left], left + 1, right - 1);
              
//         memo.set(key, result);
        
//         return result;
//     }
// };

// var stoneGame = function(piles) {
//     return true;
// };

// var stoneGame = function(piles) {
//     const n = piles.length;
//     const dp = Array.from({ length: n + 2 }, el => new Uint32Array(n + 2));
                          
//     for (let size = 1; size <= n; size++) {
//         for (let i = 0, j = size - 1; j < n; j++, i++) {
//             const parity = (j + i + n) % 2;  // j - i - N; but +x = -x (mod 2)
//             if (parity == 1) {
//                 dp[i+1][j+1] = Math.max(piles[i] + dp[i+2][j+1], piles[j] + dp[i+1][j]);
//             } else {
//                 dp[i+1][j+1] = Math.min(-piles[i] + dp[i+2][j+1], -piles[j] + dp[i+1][j]);
//             }
//         }
//     }
    
//     return dp[1][n] > 0;
// };