/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let islands = 0;
    let M = grid.length;
    let N = grid[0].length;
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === '1') {
                islands++;
                dfs(i, j);
            }
        }
    }
    
    return islands;
    
    function dfs(i, j) {
        if (grid[i][j] === '0') return;
        grid[i][j] = '0';
        if (i + 1 < M) dfs(i + 1, j);
        if (j + 1 < N) dfs(i, j + 1);
        if (i - 1 >= 0) dfs(i - 1, j);
        if (j - 1 >= 0) dfs(i, j - 1);
    }
};

// function UnionFind(grid) {
//     this.count = 0;
//     this.father = new Array(grid.length * grid[0].length);
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             const k = i * grid[0].length + j;
//             this.father[k] = k;
//             if (grid[i][j] === '1') {
//                 this.count++;
//             }
//         }
//     }
// }

// UnionFind.prototype.find = function (x) {
//     if (this.father[x] === x) {
//         return x;
//     }
//     this.father[x] = this.find(this.father[x]);
//     return this.father[x];
// }

// UnionFind.prototype.union = function (a, b) {
//     const root_a = this.find(a);
//     const root_b = this.find(b);
//     if (root_a !== root_b) {
//         this.father[root_a] = root_b;
//         this.count--;
//     }
// }

// const Dx = [0, 1, -1, 0];
// const Dy = [1, 0, 0, -1];

// function inbound(grid, x, y) {
//     return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
// }

// var numIslands = function(grid) {
//     if (!grid || grid.length === 0 || !grid[0] || grid[0].length === 0) {
//         return 0;
//     }
    
//     const unionFind = new UnionFind(grid);
    
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === '1') {
//                 for (let k = 0; k < 4; k++) {
//                     let x = i + Dx[k];
//                     let y = j + Dy[k];
//                     if (inbound(grid, x, y) && grid[x][y] === '1') {
//                         unionFind.union(x * grid[0].length + y, i * grid[0].length + j);
//                     }
//                 }   
//             }
//         }
//     }
//     return unionFind.count;
// };