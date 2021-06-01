/**
 * https://leetcode.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ]
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }
    
    return maxArea;
    
    function dfs(i, j) {
        grid[i][j] = 0;
        let area = 1;
        
        directions.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI < 0 || newI >= m || newJ < 0 || newJ >=n || grid[newI][newJ] === 0) return;
            area += dfs(newI, newJ);
        })
        
        return area;
    }
};