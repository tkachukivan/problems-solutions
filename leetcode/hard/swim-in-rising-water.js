/**
 * https://leetcode.com/problems/swim-in-rising-water/
 * @param {number[][]} grid
 * @return {number}
 */

 const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  
  var swimInWater = function(grid) {
      const n = grid.length;
      const visited = Array.from({ length: n }, () => new Array(n));
      const pq = new MinPriorityQueue({ priority: x => x[2] });
      pq.enqueue([0, 0, grid[0][0]]);
      
      while (!pq.isEmpty()) {
          const [i, j, time] = pq.dequeue().element;
  
          if (i === n - 1 && j === n - 1) return time;
  
          for (const [x, y] of directions) {
              const newI = i + x;
              const newJ = j + y;
              if (newI < 0 || newI === n || newJ < 0 || newJ === n || visited[newI][newJ]) continue;
              visited[newI][newJ] = true;
              
              pq.enqueue([newI, newJ, Math.max(time, grid[newI][newJ])]);
          }
      }
      
      return -1;
  };
  