/**
 * https://leetcode.com/problems/stone-game-vii/
 * @param {number[]} stones
 * @return {number}
 */
// dp top bottom optimized
// var stoneGameVII = function(S) {
//     let N = S.length,
//         dpCurr = new Uint32Array(N), dpLast = new Uint32Array(N)
//     for (let i = N - 2; ~i; i--) {
//         let total = S[i], temp = dpLast
//         dpLast = dpCurr, dpCurr = temp
//         for (let j = i + 1; j < N; j++) {
//             total += S[j]
//             dpCurr[j] = Math.max(total - S[i] - dpLast[j], total - S[j] - dpCurr[j-1])
//         }
//     }
//     return dpCurr[N-1]
// };
// do bottom up
// var stoneGameVII = function(stones) {
//     const n = stones.length;
//     const sum = new Uint32Array(n + 1);
//     for (let i = 0; i < n; i++) {
//         sum[i + 1] = sum[i] + stones[i];
//     }
//     const memo = Array.from({ length: n }, () => new Uint32Array(n));
    
//     return getSmallestDiff(0, n - 1);
    
//     function getSmallestDiff(left, right) {
//         if (left === right) return 0;
//         if (memo[left][right]) return memo[left][right];
//         const removeLeft = sum[right + 1] - sum[left + 1];
//         const removeRight = sum[right] - sum[left];
        
//         const result = Math.max(
//             removeLeft - getSmallestDiff(left + 1, right),
//             removeRight - getSmallestDiff(left, right - 1)
//         );
        
//         memo[left][right] = result;
        
//         return result
//     }
// };
// dp top bottom
var stoneGameVII = function(stones) {
    const n = stones.length;
    const sum = new Uint32Array(n + 1);
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + stones[i];
    }
    
    const dp = Array.from({ length: n }, () => new Uint32Array(n));
    
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            const removeLeft = sum[j + 1] - sum[i + 1];
            const removeRight = sum[j] - sum[i];
            dp[i][j] = Math.max(
                removeLeft - dp[i + 1][j],
                removeRight - dp[i][j - 1],
            );
        }
    }
    
    return dp[0][n - 1];
};