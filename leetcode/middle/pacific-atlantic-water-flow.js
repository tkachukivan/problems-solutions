/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var pacificAtlantic = function(matrix) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const result = [];
    if (!matrix.length) return result;

    const M = matrix.length;
    const N = matrix[0].length;
    const reachableP = new Array(M);
    const reachableA = new Array(M);
    for (let i = 0; i < M; i++) {
        reachableP[i] = new Array(N);
        reachableA[i] = new Array(N);
    }

    for (let x = 0; x < M; x++) {
        dfs(x, 0, reachableP);
        dfs(x, N - 1, reachableA);
    }
    
    for (let y = 0; y < N; y++) {
        dfs(0, y, reachableP);
        dfs(M - 1, y, reachableA);
    }
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (reachableA[i][j] && reachableP[i][j]) result.push([i, j])
        }
    }
    
    return result;
    
    function dfs(x, y, reachable) {
        reachable[x][y] = true;
        for(let [changeX, changeY] of directions) {
            const newX = x + changeX;
            const newY = y + changeY;
            
            if (newX < 0 || newY < 0 || newX === M || newY === N) continue;
            if (matrix[x][y] > matrix[newX][newY]) continue;
            if (reachable[newX][newY]) continue;
            
            dfs(newX, newY, reachable);
        }
    }
};