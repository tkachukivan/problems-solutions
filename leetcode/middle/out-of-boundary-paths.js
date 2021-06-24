/**
 * https://leetcode.com/problems/out-of-boundary-paths/
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// recurtion with memo
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const MOD = 10**9 + 7;

    const memo = new Map();
    
    const result = dfs(startRow, startColumn, 0);
    
    return result % MOD;
    
    function dfs(i, j, moves) {
        if (i < 0 || j < 0 || i >= m || j >= n) return 1;
        if (moves >= maxMove) return 0;
        const key = `${i}.${j}.${moves}`;
        moves++
        if (memo.has(key)) return memo.get(key);
        let result = 0;
        result += dfs(i + 1, j, moves);
        result += dfs(i - 1, j, moves);
        result += dfs(i, j + 1, moves);
        result += dfs(i, j - 1, moves);
        result = result % MOD;
        memo.set(key, result)
        
        return result;
    }
};

// dp
// var findPaths = function(m, n, maxMove, startRow, startColumn) {
//     if (!maxMove) return 0
//     let dpCurr = Array.from({length: m+2}, () => new Uint32Array(n+2)),
//         dpLast = Array.from({length: m+2}, () => new Uint32Array(n+2))
//     for (let i = 1; i <= m; i++)
//         dpCurr[i][1]++, dpCurr[i][n]++
//     for (let j = 1; j <= n; j++)
//         dpCurr[1][j]++, dpCurr[m][j]++
//     let ans = dpCurr[startRow+1][startColumn+1]
//     for (let d = 1; d < maxMove; d++) {
//         [dpCurr, dpLast] = [dpLast, dpCurr]
//         for (let i = 1; i <= m; i++)
//             for (let j = 1; j <= n; j++)
//                 dpCurr[i][j] = (dpLast[i-1][j] + dpLast[i+1][j] + dpLast[i][j-1] + dpLast[i][j+1]) % 1000000007
//         ans = (ans + dpCurr[startRow+1][startColumn+1]) % 1000000007
//     }
//     return ans
// };