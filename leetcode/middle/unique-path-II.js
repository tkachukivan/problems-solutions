/**
 * https://leetcode.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
//     const visited = Array.from({ length: n }, () => new Array(m));
//     const cache = Array.from({ length: n }, () => new Uint32Array(m));
    
//     return dfs(0, 0);
        
//     function dfs(x, y) {
//         if (cache[x][y]) return cache[x][y];
//         if (obstacleGrid[x][y] === 1) return 0;
//         if (x === n - 1 && y === m - 1) {
//             return 1;
//         }
        
//         visited[x][y] = true;
//         let result = 0;
//         if (x + 1 < n && obstacleGrid[x + 1][y] === 0 && !visited[x + 1][y]) {
//             result += dfs(x + 1, y);
//         }
        
//         if (y < m && obstacleGrid[x][y + 1] === 0 && !visited[x][y + 1]) {
//             result += dfs(x, y + 1);
//         }
//         cache[x][y] = result;
//         visited[x][y] = false;
        
//         return result;
//     }
    if (obstacleGrid[0][0] === 1) return 0;
    const dp = Array.from({ length: n }, () => new Uint32Array(m));
    dp[0][0] = 1;
    for (let i = 1; i < n; i++) {
        if (obstacleGrid[i][0] === 1) continue;
        dp[i][0] = dp[i - 1][0];
    }
    
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[0][i] === 1) continue;
        dp[0][i] = dp[0][i - 1];
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[n - 1][m - 1];
};