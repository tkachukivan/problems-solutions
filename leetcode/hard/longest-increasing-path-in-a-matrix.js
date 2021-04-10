/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0;
    if (matrix[0].length === 0) return 0;
    const m = matrix.length;
    const n = matrix[0].length;
    let longestPath = 1;
    const reversePostOrder = [];
    const visited =  Array.from({length: m}, () => new Uint16Array(n))
    // topological sort
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) dfs(i, j);
        }
    }
    // use reverse post order to calc dists
    while (reversePostOrder.length !== 0) {
        const [i, j] = reversePostOrder.pop();
        let currentDist = visited[i][j];
        longestPath = Math.max(longestPath, currentDist++);
        const value = matrix[i][j];
        if (i+1 < m && value < matrix[i+1][j] && visited[i+1][j] < currentDist) visited[i+1][j] = currentDist;
        if (j+1 < n && value < matrix[i][j+1] && visited[i][j+1] < currentDist) visited[i][j+1] = currentDist;
        if (i-1 >= 0 && value < matrix[i-1][j] && visited[i-1][j] < currentDist) visited[i-1][j] = currentDist;
        if (j-1 >= 0 && value < matrix[i][j-1] && visited[i][j-1] < currentDist) visited[i][j-1] = currentDist;
    }
    
    return longestPath;
    
    function dfs(i, j,) {
        visited[i][j] = 1;
        const value = matrix[i][j];
        if (i+1 < m && value < matrix[i+1][j] && !visited[i+1][j]) dfs(i+1, j);
        if (j+1 < n && value < matrix[i][j+1] && !visited[i][j+1]) dfs(i, j+1);
        if (i-1 >= 0 && value < matrix[i-1][j] && !visited[i-1][j]) dfs(i-1, j);
        if (j-1 >= 0 && value < matrix[i][j-1] && !visited[i][j-1]) dfs(i, j-1);
        reversePostOrder.push([i,j]);
    }
};
// dp not my solution
// var longestIncreasingPath = function(M) {
//     let ylen = M.length, xlen = M[0].length, ans = 0,
//         memo = Array.from({length: ylen}, el => new Uint16Array(xlen))
//     const dfs = (y, x) => {
//         if (memo[y][x]) return memo[y][x]
//         let val = M[y][x]
//         memo[y][x] = 1 + Math.max(
//             y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
//             y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
//             x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
//             x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
//         return memo[y][x]
//     }
//     for (let i = 0; i < ylen; i++)
//         for (let j = 0; j < xlen; j++)
//             ans = Math.max(ans, dfs(i, j))
//     return ans
// };